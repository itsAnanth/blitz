import ChatMessage from '../../../shared/structures/ChatMessage';
import Logger from '../../../shared/structures/Logger';
import Message from '../../../shared/structures/Message';
import type { IWSM } from '../types/WsManager';
import { Updates } from '../../../shared/types/Updates';

interface WsManager extends IWSM { };

class WsManager extends EventTarget {
    constructor() {
        super();

        this.ws = null;
    }

    private wsHandshake() {
        const msg = Message.encode(new Message({
            type: Message.types.CONNECT,
        }));
        this.ws.send(msg);
        return true;
    }

    connect() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const hostname = window.location.hostname === 'localhost' ? 'localhost:8000' : 'blitzv1.herokuapp.com';

        const wsURL = `${protocol}://${hostname}`;

        const ws = new WebSocket(wsURL);

        this.ws = ws;

        ws.binaryType = 'arraybuffer';

        ws.addEventListener('open', () => this.wsHandshake() && Logger.logc('WS_OPEN', '#A020F0'));
        ws.addEventListener('error', console.error);
        ws.addEventListener('close', () => Logger.logc('WS_CLOSE', 'red'));
        ws.addEventListener('message', (event) => {
            const message = Message.inflate(event.data);

            if (!message) return;

            const eventName = Message.types[message.type];
            Logger.logc(eventName, 'cyan');

            let detail, usersData;
            let data: Updates.Server.MESSAGE_CREATE |
                Updates.Server.CONNECT |
                Updates.Server.JOIN |
                Updates.Server.LEAVE |
                Updates.Server.MESSAGE_DELETE;

            switch (message.type) {
                case Message.types.CONNECT:
                    (<Updates.Client.CONNECT>detail) = { clientId: (<Updates.Server.CONNECT>message.data)[0] };
                    break;
                case Message.types.SESSION:
                    detail = { sessionKey: message.data[0], iv: message.data[1] };
                    break;
                case Message.types.MESSAGE_CREATE:
                    data = message.data as Updates.Server.MESSAGE_CREATE;
                    (<Updates.Client.MESSAGE_CREATE>detail) = { messageId: data[0], senderId: data[1], senderPublicKey: data[2], data: data[3] };
                    break;
                case Message.types.MESSAGE_DELETE:
                    data = message.data as Updates.Server.MESSAGE_DELETE;
                    (<Updates.Client.MESSAGE_DELETE>detail) = { messageId: data[0] };
                    break;
                case Message.types.JOIN:
                    data = message.data as Updates.Server.JOIN;
                    usersData = data[1];
                    (<Updates.Client.JOIN>detail) = { message: data[0], users: usersData ? usersData : [] };
                    break;
                case Message.types.USERS:
                    detail = message.data[0];
                case Message.types.LEAVE:
                    data = message.data as Updates.Server.LEAVE;
                    usersData = data[1];
                    (<Updates.Client.LEAVE>detail) = { message: data[0], users: usersData ? usersData : [] };
                    break;
            }

            this.dispatchEvent(new CustomEvent(eventName, { detail: detail }));
        })
    }


    send(msg: Message) {

        if (!this.ws || this.ws.readyState === WebSocket.CLOSED) return;

        this.ws.send(Message.encode(msg));
    }
}

export default WsManager;
