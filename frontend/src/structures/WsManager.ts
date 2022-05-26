import ChatMessage from '../../../shared/structures/ChatMessage';
import Logger from '../../../shared/structures/Logger';
import Message from '../../../shared/structures/Message';
import type { IWSM } from '../types/WsManager';

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
        const hostname = window.location.hostname === 'localhost' ? 'localhost:8000' : 'blitzv3.herokuapp.com';

        const wsURL = `${protocol}://${hostname}`;

        const ws = new WebSocket(wsURL);

        this.ws = ws;

        ws.binaryType = 'arraybuffer';

        ws.addEventListener('open', () => this.wsHandshake() && console.log('ws open'));
        ws.addEventListener('error', console.error);
        ws.addEventListener('close', () => console.log('ws closed'));
        ws.addEventListener('message', (event) => {
            const message = Message.inflate(event.data);

            if (!message) return;

            console.log('[' + `%c${Message.types[message.type]}` + '%c]', 'color: cyan', 'color: white');


            let eventName, detail, usersData;

            switch (message.type) {
                case Message.types.CONNECT:
                    eventName = 'connect';
                    detail = message.data[0];
                    break;
                case Message.types.SESSION:
                    eventName = 'session';
                    detail = { sessionKey: message.data[0], iv: message.data[1] };
                    break;
                case Message.types.MESSAGE_CREATE:
                    eventName = 'messagecreate';
                    detail = message.data[0];
                    break;
                case Message.types.JOIN:
                    eventName = 'userjoin';
                    usersData = Message.inflate(message.data[1]);
                    detail = { message: message.data[0], users: usersData ? usersData.data : [] };
                    break;
                case Message.types.USERS:
                    eventName = 'users';
                    detail = message.data[0];
                case Message.types.LEAVE:
                    eventName = 'userleave';
                    usersData = Message.inflate(message.data[1]);
                    detail = { message: message.data[0], users: usersData ? usersData.data : [] };
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
