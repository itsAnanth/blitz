import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import User from "../structures/User";
import Message from "../../shared/structures/Message";
import Utils from "../utils/Utils";
import { Updates } from "../../shared/types/Updates";
import ChatMessage from "../../shared/structures/ChatMessage";

export default new Event({
    type: MessageType.JOIN,
    callback(this: WsServer, ws, message) {
        console.log(`user joined, username -> ${message.data[0]} avatar -> ${message.data[1]}`)
        this.sockets.set(ws.id, new User({ username: message.data[0], ws, avatar: message.data[1], publicKey: message.data[2] }));
        
        const data = new ChatMessage({
            author: 'Blitz Bot',
            content: `${message.data[0]} joined the chat`,
            id: Utils.getMessageId(),
            timestamp: Date.now(),
            avatar: 2
        }).serialize();

        const msgData: Updates.Server.JOIN = [data, this.usersData()];

        this.app.publish('STATE/',
            new Message({
                type: Message.types.JOIN,
                data: msgData
            }).encode()
            , true);

        ws.send(
            new Message({
                type: Message.types.SESSION,
                data: [this.session.sessionKey, this.session.iv]
            }).encode(), true);
    },
})