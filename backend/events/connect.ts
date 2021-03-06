import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";

export default new Event({
    type: MessageType.CONNECT,
    callback(this: WsServer, ws, _message) {
        ws.send(
            new Message({
                type: Message.types.CONNECT,
                data: [ws.id]
            }).encode(), true);
    },
})