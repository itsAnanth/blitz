<script lang="ts">
    import Chat from "./Chat.svelte";
    import LogIn from "./LogIn.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";

    let wsConnected: boolean = false,
        loggedIn: boolean = false,
        username: string | null = null,
        wsConfiged = false,
        avatar = Math.floor(Math.random() * 100);

    let wsm = new WsManager();

    wsm.addEventListener("connect", () => {
        wsConnected = true;
    });

    wsm.connect();

    function handleLogin(ev: any) {
        loggedIn = true;
        username = ev.detail.username;
        wsm.send(new Message({ type: Message.types.JOIN, data: [username, avatar] }));
    }

    function handleLogout() {
        loggedIn = false;
        wsm.send(new Message({ type: Message.types.LEAVE, data: [username] }));
        username = null;
    }

    wsm.addEventListener("config", () => {
        wsConfiged = true;
    });
</script>

{#if !wsConnected}
    <div>connecting</div>
{:else if !loggedIn}
    <LogIn on:login={handleLogin} />
{:else}
    <Chat on:logout={handleLogout} {wsm} {username} {wsConfiged} {avatar} />
{/if}
