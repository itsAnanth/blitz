<script lang="ts">
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import { client } from "../structures/Store";

    import Logger from "../../../shared/structures/Logger";
    import Message from "../../../shared/structures/Message";
    import WsManager from "../structures/WsManager";

    export let data: ChatMessage, wsm: WsManager;

    function deleteMessage(this: HTMLSpanElement) {
        const message: HTMLDivElement = this.parentNode.parentNode
            .parentNode as HTMLDivElement;

        if (!(message && message.classList.item(1)))
            return Logger.logc("ERROR MESSAGE_DELETE", "red");

        wsm.send(
            new Message({
                type: Message.types.MESSAGE_DELETE,
                data: [{ senderId: $client.id, messageId: message.classList.item(1) }]
            })
        )
        // // message.parentNode.removeChild(message);

        // console.log(message);
        // console.log($messages.find(x => x.id === message.classList.item(1)))
    }
</script>

<div class="message {data.id}">
    <img
        src={`https://avatars.dicebear.com/api/adventurer-neutral/${data.avatar}.svg`}
        alt="avatar"
        class="avatar"
    />
    <div class="meta-wrapper">
        <p class="meta">
            {data.author}
            <span>
                {new Date(data.timestamp).toLocaleString("en-US", {
                    hour: "numeric",
                    hour12: true,
                    minute: "numeric",
                })}
            </span>
            {#if data.authorId === $client.id}
                <span class="close" on:click={deleteMessage}>&#10006;</span>
            {/if}
        </p>
        <p class="text">{data.content}</p>
    </div>
</div>
