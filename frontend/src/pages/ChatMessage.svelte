<script lang="ts">
    import ChatMessage from "../../../shared/structures/ChatMessage";

    export let data: ChatMessage;
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
            <span
                >{new Date(data.timestamp).toLocaleString("en-US", {
                    hour: "numeric",
                    hour12: true,
                    minute: "numeric",
                })}</span
            >
        </p>
        <p class="text">{data.content}</p>
    </div>
</div>
