import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import User from "../structures/User";
import Message from "../../shared/structures/Message";
import crypto from 'crypto';

export default new Event({
    type: MessageType.JOIN,
    callback(this: WsServer, ws, message) {
        console.log(`user joined, username -> ${message.data[0]} avatar -> ${message.data[1]}`)
        this.sockets.set(ws.id, new User({ username: message.data[0], ws, avatar: message.data[1], publicKey: message.data[2] }));
        const data = { author: 'Blitz Bot', content: `${message.data[0]} joined the chat`, id: crypto.createHash('sha256').digest('hex') };
        this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.JOIN, data: [data, this.usersData()] })), true);
    },
})