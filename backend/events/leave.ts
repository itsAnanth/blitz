import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";
import crypto from 'crypto';

export default new Event({
    type: MessageType.LEAVE,
    callback(this: WsServer, ws, message) {
        this.sockets.delete(ws.id);
        const data = { author: 'Blitz Bot', content: `${message.data[0]} left the chat`, id: crypto.createHash('sha256').digest('hex') };
        this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.LEAVE, data: [data, this.usersData()] })), true);
    },
})