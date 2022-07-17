import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";
import Utils from "../utils/Utils";
import ChatMessage from "../../shared/structures/ChatMessage";
import { Updates } from "../../shared/types/Updates";

export default new Event({
    type: MessageType.LEAVE,
    callback(this: WsServer, ws, message) {
        this.sockets.delete(ws.id);

        const data = new ChatMessage({
            author: 'Blitz Bot',
            content: `${message.data[0]} left the chat`,
            id: Utils.getMessageId(),
            timestamp: Date.now(),
            avatar: 2
        }).serialize();

        const msgData: Updates.Server.LEAVE = [data, this.usersData()];

        this.app.publish('STATE/', new Message({
            type: Message.types.LEAVE,
            data: msgData
        }).encode(), true);
    },
})