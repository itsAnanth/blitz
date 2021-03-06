import { MessageType } from "../../shared/structures/MessageType";
import WsServer from "../structures/WsServer";
import Event from "../utils/Event";
import Message from "../../shared/structures/Message";
import EncryptedMessage from '../../shared/structures/EncryptedMessage';
import Utils from "../utils/Utils";
import { Updates } from '../../shared/types/Updates';


export default new Event({
    type: MessageType.MESSAGE_CREATE,
    callback(this: WsServer, _ws, message) {
        const data: { senderId: string, data: ReturnType<EncryptedMessage['serialize']>[] } = message.data[0];

        let sender = this.sockets.get(data.senderId);

        if (!sender) return;

        for (let i = 0; i < data.data.length; i++) {
            const _data = data.data[i];

            const socket = this.sockets.get(_data.recipientId);

            if (!socket) return;

            const msgData: Updates.Server.MESSAGE_CREATE = [Utils.getMessageId(), sender.ws.id, sender.publicKeyJwk, _data.data];

            socket.ws.send(
                new Message({
                    type: Message.types.MESSAGE_CREATE,
                    data: msgData
                }).encode(), true)
        }
    },
})