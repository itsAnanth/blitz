<script lang="ts">
    import Chat from "./Chat.svelte";
    import LogIn from "./LogIn.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import CryptoClient from "../structures/CryptoClient";
    import { keys, messages, users } from "../structures/Store";
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import Logger from "../../../shared/structures/Logger";

    let wsConnected: boolean = false,
        loggedIn: boolean = false,
        username: string | null = null,
        avatar: null | number = null;

    let wsm = new WsManager();

    const events = {
        userjoin: (ev: any) => {
            const message = ev.detail.message;
            const leaveMsg = new ChatMessage({
                author: message.author,
                content: message.content,
                id: message.id,
                avatar: 2,
            });

            messages.set([...$messages, leaveMsg]);
            users.set([...$users, ...ev.detail.users]);
        },
        users: (ev: any) => {
            users.set([...$users, ev.detail.users])
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
            users.set([...$users, ev.detail.users]);
        },
        messagecreate: async (ev: any) => {
            const decryptedText = await CryptoClient.decrypt(
                ev.detail.content,
                $keys.derivedKey,
                $keys.iv
            );
            ev.detail.content = decryptedText;
            messages.set([...$messages, ev.detail]);
        },
        session: async (ev: any) => {
            const derived = await CryptoClient.deriveKey(
                ev.detail.sessionKey,
                $keys.privateKeyJwk
            );
            keys.set({ ...$keys, sessionKey: ev.detail, derivedKey: derived, iv: ev.detail.iv });
            Logger.log(`session update`, $keys);
        },
    };

    wsm.addEventListener("connect", async () => {
        wsConnected = true;
    });

    wsm.connect();

    async function handleLogin(ev: any) {
        loggedIn = true;
        username = ev.detail.username;
        avatar = Math.floor(Math.random() * 100);

        for (const [k, v] of Object.entries(events)) {
            wsm.addEventListener(k, v);
            Logger.info(`event ${k} attached`);
        }

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
    <Chat on:logout={handleLogout} {wsm} {username} {avatar} />
{/if}
