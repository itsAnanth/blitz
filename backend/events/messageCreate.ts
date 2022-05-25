import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";
import crypto from 'crypto';

export default new Event({
    type: MessageType.MESSAGE_CREATE,
    callback(this: WsServer, _ws, message) {
        const data = { ...message.data[0], id: crypto.createHash('sha256').digest('hex') };
        this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.MESSAGE_CREATE, data: [data] })), true);
    },
})