import ChatMessage from '../../../shared/structures/ChatMessage';
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
        const hostname = window.location.hostname === 'localhost' ? 'localhost:8000' : 'herokuapp';

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

            switch (message.type) {
                case Message.types.CONNECT:
                    this.dispatchEvent(new Event('connect'));
                    break;
                case Message.types.MESSAGE_CREATE:
                    this.dispatchEvent(new CustomEvent('messagecreate', { detail: message.data[0] }));
                    break;
            }
        })
    }


    send(msg: Message) {

        if (!this.ws || this.ws.readyState === WebSocket.CLOSED) return;

        this.ws.send(Message.encode(msg));
    }
}

export default WsManager;
