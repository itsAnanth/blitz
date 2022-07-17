<script lang="ts">
    import ChatMsg from "./ChatMessage.svelte";
    import Users from "./Users.svelte";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";
    import { onMount, afterUpdate } from "svelte";
    import { client, keys, messages, users } from "../structures/Store";
    import CryptoClient from "../structures/CryptoClient";
    import EncryptedMessage from '../../../shared/structures/EncryptedMessage';
    import Logger from "../../../shared/structures/Logger";

    export let wsm: WsManager;


    onMount(() => {
        const msg = document.getElementById("msg");
        document.body.addEventListener('focus', () => (Logger.logc('CHAT_FOCUS', '#A020F0'), msg.focus()))
        msg.focus();
    });

    afterUpdate(() => {
        const chatMessages = document.querySelector(".chat-messages");

        chatMessages.scrollTo(0, chatMessages.scrollHeight);
    });

    async function encryptMessage(msg: string) {
        const arr: ReturnType<EncryptedMessage['serialize']>[] = [];
        const usersArr = $users;
        for (let i = 0; i < usersArr.length; i++) {

            const key = await CryptoClient.deriveKey(usersArr[i].publicKeyJwk, $keys.privateKeyJwk);
            const data = await CryptoClient.encrypt(msg, key, $keys.iv);
            const id = usersArr[i].id;

            arr.push(new EncryptedMessage(data, id).serialize());
        }

        return arr;
    }


    async function onSubmit(e: any) {
        e.preventDefault();

        let msg: string = e.target.elements.msg.value;

        msg = msg.trim();

        if (!msg) return;

        e.target.elements.msg.value = "";
        e.target.elements.msg.focus();

        const data = [{ senderId: $client.id, timestamp: Date.now(), data: await encryptMessage(msg) }];

        wsm.send(
            new Message({
                type: Message.types.MESSAGE_CREATE,
                data: data,
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
                <ChatMsg wsm={wsm} data={message} />
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
