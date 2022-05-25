<script lang="ts">
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import ChatMsg from "./ChatMessage.svelte";
    import Users from "./Users.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import { createEventDispatcher, onMount, afterUpdate } from "svelte";
    import { keys, messages, users } from "../structures/Store";
    import CryptoClient from "../structures/CryptoClient";
    import type { Ikeys } from '../structures/Store';

    export let username: string,
        wsm: WsManager,
        wsConfiged: boolean,
        avatar: number;

    // const dispatch = createEventDispatcher();

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
        users: (ev: any) => users.set([...$users, ev.detail.users]),
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
        messagecreate: async(ev: any) => {
            const decryptedText = await CryptoClient.decrypt(ev.detail.content, ($keys as Ikeys).derivedKey)
            ev.detail.content = decryptedText;
            messages.set([...$messages, ev.detail]);
        },
        session: async(ev: any) => {
            const derived = await CryptoClient.deriveKey(ev.detail, ($keys as Ikeys).privateKeyJwk);
            keys.set({ ...$keys, sessionKey: ev.detail, derivedKey: derived });
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

    async function onSubmit(e: any) {
        e.preventDefault();

        let msg: string = e.target.elements.msg.value;

        msg = msg.trim();

        if (!msg) return;

        e.target.elements.msg.value = "";
        e.target.elements.msg.focus();

        const key = await CryptoClient.deriveKey(($keys as Ikeys).sessionKey, ($keys as Ikeys).privateKeyJwk)
        const encryptedMessage = await CryptoClient.encrypt(msg, key);

        const chatMsg = new ChatMessage({
            author: username,
            content: encryptedMessage,
            avatar: avatar,
        });


        wsm.send(
            new Message({
                type: Message.types.MESSAGE_CREATE,
                data: [chatMsg.serialize()],
            })
        );
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
            <div id="users">
                {#each $users as user}
                    <Users data={user} />
                {/each}
            </div>
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
