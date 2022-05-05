<script lang="ts">
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import { createEventDispatcher } from "svelte";

    export let username: string,
        wsm: WsManager,
        wsConfiged: boolean,
        avatar: number;

    const dispatch = createEventDispatcher();

    if (!wsConfiged) {
        attachListeners();
        wsm.dispatchEvent(new Event("config"));
    }

    function attachListeners() {
        wsm.addEventListener("messagecreate", (ev: any) =>
            outputMessage(ev.detail)
        );

        wsm.addEventListener("users", (ev: any) =>
            outputUsers(
                ev.detail as unknown as { id: string; username: string, avatar: number }[]
            )
        );

        wsm.addEventListener("userjoin", (ev: any) => {
            const message = ev.detail.message;
            outputMessage(
                new ChatMessage({
                    author: message.author,
                    content: message.content,
                    id: message.id,
                    avatar: 2,
                })
            );

            outputUsers(ev.detail.users);
        });

        wsm.addEventListener("userleave", (ev: any) => {
            const message = ev.detail.message;
            outputMessage(
                new ChatMessage({
                    author: message.author,
                    content: message.content,
                    id: message.id,
                    avatar: 2,
                })
            );

            outputUsers(ev.detail.users);
        });
    }

    function onSubmit(e: any) {
        e.preventDefault();

        let msg: string = e.target.elements.msg.value;

        msg = msg.trim();

        if (!msg) return;

        e.target.elements.msg.value = "";
        e.target.elements.msg.focus();

        const chatMsg = new ChatMessage({
            author: username,
            content: msg,
            avatar: avatar,
        });

        wsm.send(
            new Message({
                type: Message.types.MESSAGE_CREATE,
                data: [chatMsg.serialize()],
            })
        );
    }

    function outputUsers(users: { id: string; username: string, avatar: number }[]) {
        const userList = document.getElementById("users");
        userList.innerHTML = "";

        console.log(users);

        users.forEach((user) => {
            const div = document.createElement("div");
            div.classList.add("user");

            const p = document.createElement("p");
            p.innerText = user.username;
            p.classList.add('username');

            const userAvatar = document.createElement("img");
            userAvatar.classList.add("avatar");
            userAvatar.src = `https://avatars.dicebear.com/api/adventurer-neutral/${user.avatar}.svg`;

            div.appendChild(userAvatar);
            div.appendChild(p);

            userList.appendChild(div);
        });
    }

    function outputMessage(message: ChatMessage) {
        const div = document.createElement("div");
        const metaWrapper = document.createElement("div");
        const userAvatar = document.createElement("img");

        div.classList.add("message", message.id || "");
        userAvatar.classList.add("avatar");

        userAvatar.src = `https://avatars.dicebear.com/api/adventurer-neutral/${message.avatar}.svg`;

        metaWrapper.classList.add("meta-wrapper");

        const p = document.createElement("p");
        p.classList.add("meta");
        p.innerText = message.author;
        p.innerHTML += ` <span>${new Date(message.timestamp).toLocaleString(
            "en-US",
            { hour: "numeric", hour12: true, minute: "numeric" }
        )}</span>`;

        const para = document.createElement("p");
        para.classList.add("text");
        para.innerText = message.content;

        metaWrapper.appendChild(p);
        metaWrapper.appendChild(para);

        div.appendChild(userAvatar);
        div.appendChild(metaWrapper);

        document.querySelector(".chat-messages").appendChild(div);

        const chatMessages = document.querySelector(".chat-messages");

        chatMessages.scrollTo(0, chatMessages.scrollHeight);
    }
</script>

<div class="chat-container">
    <header class="chat-header">
        <h1>Blitz</h1>
        <div id="leave-btn" on:click={() => dispatch("logout")} class="btn">
            Leave Room
        </div>
    </header>
    <main class="chat-main">
        <div class="chat-sidebar">
            <h3>Room Name:</h3>
            <h2 id="room-name">Test</h2>
            <h3>Users</h3>
            <div id="users"></div>
        </div>
        <div class="chat-messages" />
    </main>

    <div class="chat-form-container">
        <form on:submit={onSubmit} id="chat-form">
            <input
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autocomplete="off"
            />
            <button class="btn">Send</button>
        </form>
    </div>
</div>
