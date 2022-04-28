<script lang="ts">
    import ChatMessage from "../../../shared/structures/ChatMessage";
    import WsManager from "../structures/WsManager";
    import Message from "../../../shared/structures/Message";

    export let username: string, wsm: WsManager;

    const chatForm = document.getElementById("chat-form");
    const chatMessages = document.querySelector(".chat-messages");
    const roomName = document.getElementById("room-name");
    const userList = document.getElementById("users");

    wsm.addEventListener('messagecreate', (ev: any) => outputMessage(ev.detail));
    
    function onSubmit(e: any) {
        e.preventDefault();

        let msg: string = e.target.elements.msg.value;

        msg = msg.trim();

        if (!msg) 
            return;
        
        e.target.elements.msg.value = "";
        e.target.elements.msg.focus();

        const chatMsg = new ChatMessage({ author: username, content: msg });

        wsm.send(new Message({ type: Message.types.MESSAGE_CREATE, data: [chatMsg.serialize()] }));
    };

    function outputMessage(message: ChatMessage) {
        const div = document.createElement("div");
        div.classList.add("message");
        const p = document.createElement("p");
        p.classList.add("meta");
        p.innerText = message.author;
        p.innerHTML += ` <span>${new Date(message.timestamp).toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })}</span>`;


        div.appendChild(p);

        const para = document.createElement("p");
        para.classList.add("text");
        para.innerText = message.content;

        div.appendChild(para);
        document.querySelector(".chat-messages").appendChild(div);

    }
</script>

<div class="chat-container">
    <header class="chat-header">
        <h1><i />Blitz</h1>
        <div id="leave-btn" class="'btn">Leave Room</div>
    </header>
    <main class="chat-main">
        <div class="chat-sidebar">
            <h3><i />Room Name:</h3>
            <h2 id="room-name">Test</h2>
            <h3><i />Users</h3>
            <ul id="users" />
        </div>
        <div class="chat-messages"></div>
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
            <button class="btn"><i />Send</button>
        </form>
    </div>
</div>
