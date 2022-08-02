<script lang="ts">
    import firebase from "../utils/firebase";
    import Chat from "./Chat.svelte";
    import SignIn from "./SignIn.svelte";
    import SignUp from "./SignUp.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import CryptoClient from "../structures/CryptoClient";
    import { client, keys, messages, users } from "../structures/Store";
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import Logger from "../../../shared/structures/Logger";
    import { Updates } from "../../../shared/types/Updates";
    import {
        Router,
        Route,
        navigate
    } from "svelte-navigator";

    let wsConnected: boolean = false,
        username: string | null = null,
        avatar: null | number = null;

    let wsm = new WsManager();

    const events = {
        CONNECT: (ev: any) => {
            client.set({ ...$client, id: ev.detail.clientId });
            wsConnected = true;
            Logger.log("connect", $client);
        },
        JOIN: (ev: any) => {
            const message = ev.detail.message;

            messages.set([...$messages, message]);
            users.set([...ev.detail.users]);
        },
        USERS: (ev: any) => {
            users.set([...ev.detail.users]);
        },
        LEAVE: (ev: any) => {
            const message = ev.detail.message;

            messages.set([...$messages, message]);
            users.set([...ev.detail.users]);
        },
        MESSAGE_CREATE: async (ev: {
            detail: Updates.Client.MESSAGE_CREATE;
        }) => {
            const key = await CryptoClient.deriveKey(
                ev.detail.senderPublicKey,
                $keys.privateKeyJwk
            );
            const decryptedText = await CryptoClient.decrypt(
                // @ts-ignore
                ev.detail.data,
                key,
                $keys.iv
            );

            const user = $users.find((x) => x.id === ev.detail.senderId);

            if (!user) return Logger.logc("MESSAGE_CREATE_UNKNOWN_USER", "red");

            const msg = new ChatMessage({
                author: user.username,
                content: decryptedText,
                avatar: user.avatar,
                id: ev.detail.messageId,
                authorId: ev.detail.senderId,
            });

            messages.set([...$messages, msg]);
        },
        MESSAGE_DELETE: (ev: any) => {
            const current = [...$messages];
            const el = current.find((x) => x.id === ev.detail.messageId);
            const idx = current.indexOf(el);
            if (!idx) return;
            current.splice(idx, 1);
            messages.set(current);
        },
        SESSION: async (ev: any) => {
            const derived = await CryptoClient.deriveKey(
                ev.detail.sessionKey,
                $keys.privateKeyJwk
            );
            keys.set({
                ...$keys,
                sessionKey: ev.detail.sessionKey,
                derivedKey: derived,
                iv: ev.detail.iv,
            });
            Logger.log(`session update`, $keys);
        },
    };

    for (const [k, v] of Object.entries(events)) {
        // @ts-ignore
        wsm.addEventListener(k, v);
        Logger.info(`event ${k} attached`);
    }

    firebase();

    wsm.connect();

    async function handleLogin(_ev: any) {
        avatar = Math.floor(Math.random() * 100);

        const keyPair = await CryptoClient.generateKeyPair();
        keys.set({ ...$keys, ...keyPair });

        wsm.send(
            new Message({
                type: Message.types.JOIN,
                data: [$client.username, avatar, keyPair.publicKeyJwk],
            })
        );

        console.log('Signed in or not >>>', $client.signedIn)

        navigate("/chat", { });
    }

    function handleLogout() {
        wsm.send(new Message({ type: Message.types.LEAVE, data: [username] }));
        username = null;
        avatar = null;
    }
</script>

<Router>
    <Route path="/">
        <SignIn on:signin={handleLogin} />
    </Route>
    <Route path="/chat">
        <Chat on:logout={handleLogout} {wsm} />
    </Route>
    <Route path="/signup" component={SignUp} />

    {#if !wsConnected}
        <div>connecting</div>
    {:else if !$client.signedIn && !window.location.pathname.includes('signup')}
        <SignIn on:signin={handleLogin} />
    <!-- {:else}
        <Chat on:logout={handleLogout} {wsm} /> -->
    {/if}
</Router>
