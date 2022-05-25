import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";

export default new Event({
    type: MessageType.USERS,
    callback(this: WsServer, ws, _message) {
        ws.send(this.usersData(), true);
    },
})