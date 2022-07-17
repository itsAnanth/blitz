import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";
import { Updates } from '../../shared/types/Updates';

export default new Event({
    type: MessageType.MESSAGE_DELETE,
    callback(this: WsServer, _ws, message) {
        const data = message.data;

        this.app.publish('STATE/',
            new Message({
                type: Message.types.MESSAGE_DELETE,
                data: [data[0].messageId]
            }).encode()
            , true);
    },
})