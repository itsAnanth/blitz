import Message from "../../shared/structures/Message";
import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";

export default new Event({
    type: MessageType.USERS,
    callback(this: WsServer, ws, _message) {
        const message = new Message({
            type: Message.types.USERS,
            data: this.usersData()
        }).encode();
        ws.send(message, true);
    },
})