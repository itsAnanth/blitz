import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";
import { Updates } from '../../shared/types/Updates';

export default new Event({
    type: MessageType.MESSAGE_DELETE,
    callback(this: WsServer, ws, message) {
        const data = message.data;
        ws.send(
            new Message({
                type: Message.types.MESSAGE_DELETE,
                data: [ws.id]
            }).encode(), true);
    },
})