<script lang="ts">
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import ChatMsg from "./ChatMessage.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import { createEventDispatcher, onMount, afterUpdate } from "svelte";
    import { messages } from "../structures/Store";

    export let username: string,
        wsm: WsManager,
        wsConfiged: boolean,
        avatar: number;
    const dispatch = createEventDispatcher();

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

            outputUsers(ev.detail.users);
        },
        users: (ev: any) =>
            outputUsers(
                ev.detail as unknown as {
                    id: string;
                    username: string;
                    avatar: number;
                }[]
            ),
        userleave: (ev: any) => {
            const message = ev.detail.message;
            const joinMsg = new ChatMessage({
                author: message.author,
                content: message.content,
                id: message.id,
                avatar: 2,
            });

            messages.set([...$messages, joinMsg]);

            outputUsers(ev.detail.users);
        },
        messagecreate: (ev: any) => {
            messages.set([...$messages, ev.detail]);
            console.log($messages);
        },
    };

    onMount(() => {
        attachListeners();
        wsm.dispatchEvent(new Event("config"));
        document.getElementById("msg").focus();
    });

    afterUpdate(() => {
        const chatMessages = document.querySelector(".chat-messages");

        chatMessages.scrollTo(0, chatMessages.scrollHeight);
    });

    function attachListeners() {
        if (wsConfiged) return;
        for (const [k, v] of Object.entries(events)) {
            wsm.addEventListener(k, v);
        }
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

    function outputUsers(
        users: { id: string; username: string; avatar: number }[]
    ) {
        const userList = document.getElementById("users");
        userList.innerHTML = "";

        users.forEach((user) => {
            const div = document.createElement("div");
            div.classList.add("user");

            const p = document.createElement("p");
            p.innerText = user.username;
            p.classList.add("username");

            const userAvatar = document.createElement("img");
            userAvatar.classList.add("avatar");
            userAvatar.src = `https://avatars.dicebear.com/api/adventurer-neutral/${user.avatar}.svg`;

            div.appendChild(userAvatar);
            div.appendChild(p);

            userList.appendChild(div);
        });
    }
</script>

<div class="chat-container">
    <header class="chat-header">
        <h1>Blitz</h1>
        <!-- <div id="leave-btn" on:click={() => dispatch("logout")} class="btn">
            Leave Room
        </div> -->
    </header>
    <main class="chat-main">
        <div class="chat-sidebar">
            <h3>Room Name:</h3>
            <h2 id="room-name">Test</h2>
            <h3>Users</h3>
            <div id="users" />
        </div>
        <div class="chat-messages">
            {#each $messages as message}
                <ChatMsg data={message} />
            {/each}
        </div>
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
