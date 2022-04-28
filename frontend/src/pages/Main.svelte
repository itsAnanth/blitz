<script lang="ts">
    import Chat from './Chat.svelte';
    import LogIn from './LogIn.svelte';
    import WsManager from "../structures/WsManager";
    import Message from '../../../shared/structures/Message';

    let wsConnected: boolean = false, loggedIn: boolean = false, username: string;
    const wsm = new WsManager();

    wsm.addEventListener('connect', () => {
        wsConnected = true;
    });

    wsm.connect();

    function handleLogin(ev: any) {
        loggedIn = true;
        username = ev.detail.username;
        wsm.send(new Message({ type: Message.types.JOIN, data: [username] }));
    }

</script>


{#if !wsConnected}
    <div>connecting</div>
{:else if !loggedIn}
    <LogIn on:joinroom={handleLogin} />
{:else}
    <Chat wsm={wsm} username={username} />
{/if}

