<script lang="ts">
    import WsManager from "../structures/WsManager";

    let wsConnected = false;
    const wsm = new WsManager();

    wsm.addEventListener('connect', () => wsConnected = true);
    wsm.connect();

</script>


{#if !wsConnected}
    <div>hello world</div>
{:else}
    <div>connected</div>
{/if}

