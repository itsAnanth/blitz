<script lang="ts">

    import ChatMessage from "../../../shared/structures/ChatMessage";
    import { client } from "../structures/Store";

    export let data: ChatMessage;

    function deleteMessage(this: HTMLSpanElement) {
        // const message: HTMLDivElement = this.parentNode.parentNode.parentNode;
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
