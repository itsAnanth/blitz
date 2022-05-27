<script lang="ts">
    import Chat from "./Chat.svelte";
    import LogIn from "./LogIn.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import CryptoClient from "../structures/CryptoClient";
    import { client, keys, messages, users } from "../structures/Store";
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import Logger from "../../../shared/structures/Logger";


    let wsConnected: boolean = false,
        loggedIn: boolean = false,
        username: string | null = null,
        avatar: null | number = null;

    let wsm = new WsManager();

    const events = {
        connect: (ev: any) => {
            client.set({ ...$client, id: ev.detail.clientId });
            Logger.log("connect", $client);
        },
        userjoin: (ev: any) => {
            const message = ev.detail.message;
            const leaveMsg = new ChatMessage({
                author: message.author,
                content: message.content,
                id: message.id,
                avatar: 2,
            });

            messages.set([...$messages, leaveMsg]);
            users.set([...ev.detail.users]);
        },
        users: (ev: any) => {
            users.set([...ev.detail.users]);
        },
        userleave: (ev: any) => {
            const message = ev.detail.message;
            const joinMsg = new ChatMessage({
                author: message.author,
                content: message.content,
                id: message.id,
                avatar: 2,
            });

            messages.set([...$messages, joinMsg]);
            users.set([...ev.detail.users]);
        },
        messagecreate: async (ev: any) => {
            const key = await CryptoClient.deriveKey(ev.detail.senderPublicKey, $keys.privateKeyJwk);
            const decryptedText = await CryptoClient.decrypt(
                ev.detail.data,
                key,
                $keys.iv
            );

            const user = $users.find(x => x.id === ev.detail.senderId);

            if (!user) return Logger.logc('MESSAGE_CREATE_UNKNOWN_USER', 'red');

            const msg = new ChatMessage({
                author: user.username,
                content: decryptedText,
                avatar: user.avatar,
                id: ev.detail.messageId,
                authorId: ev.detail.senderId
            })


            messages.set([...$messages, msg]);
        },
        session: async (ev: any) => {
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

    wsm.addEventListener("connect", () => {
        wsConnected = true;
    });

    for (const [k, v] of Object.entries(events)) {
        wsm.addEventListener(k, v);
        Logger.info(`event ${k} attached`);
    }

    wsm.connect();

    async function handleLogin(ev: any) {
        loggedIn = true;
        username = ev.detail.username;
        avatar = Math.floor(Math.random() * 100);

        const keyPair = await CryptoClient.generateKeyPair();
        keys.set({ ...$keys, ...keyPair });

        wsm.send(
            new Message({
                type: Message.types.JOIN,
                data: [username, avatar, keyPair.publicKeyJwk],
            })
        );
    }

    function handleLogout() {
        loggedIn = false;
        wsm.send(new Message({ type: Message.types.LEAVE, data: [username] }));
        username = null;
        avatar = null;
    }
</script>

{#if !wsConnected}
    <div>connecting</div>
{:else if !loggedIn}
    <LogIn on:login={handleLogin} />
{:else}
    <Chat on:logout={handleLogout} {wsm}/>
{/if}
