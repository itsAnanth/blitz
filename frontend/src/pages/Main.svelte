<script lang="ts">
    import Chat from "./Chat.svelte";
    import LogIn from "./LogIn.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import CryptoClient from "../structures/CryptoClient";
    import { keys } from "../structures/Store";

    let wsConnected: boolean = false,
        loggedIn: boolean = false,
        username: string | null = null,
        wsConfiged = false,
        avatar: null | number = null;

    let wsm = new WsManager();

    wsm.addEventListener("connect", async () => {
        wsConnected = true;
    });

    wsm.connect();

    async function handleLogin(ev: any) {
        loggedIn = true;
        username = ev.detail.username;
        avatar = Math.floor(Math.random() * 100);
    }

    function handleLogout() {
        loggedIn = false;
        wsm.send(new Message({ type: Message.types.LEAVE, data: [username] }));
        username = null;
        avatar = null;
    }

    wsm.addEventListener("config", async() => {
        wsConfiged = true;
        const keyPair = await CryptoClient.generateKeyPair();
        keys.set({ ...keyPair });

        wsm.send(
            new Message({
                type: Message.types.JOIN,
                data: [username, avatar, keyPair.publicKeyJwk],
            })
        );
    });
</script>

{#if !wsConnected}
    <div>connecting</div>
{:else if !loggedIn}
    <LogIn on:login={handleLogin} />
{:else}
    <Chat on:logout={handleLogout} {wsm} {username} {wsConfiged} {avatar} />
{/if}
