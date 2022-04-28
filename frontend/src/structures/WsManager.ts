import Message from '../../../shared/structures/Message';
import { createEventDispatcher } from 'svelte';

class WsManager extends EventTarget {
    constructor() {
        super();
    }
    connect() {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const hostname = window.location.hostname === 'localhost' ? 'localhost:8000' : 'herokuapp';

        const wsURL = `${protocol}://${hostname}`;

        const ws = new WebSocket(wsURL);

        ws.binaryType = 'arraybuffer';

        ws.addEventListener('open', () => console.log('ws open'));
        ws.addEventListener('error', console.error);
        ws.addEventListener('close', () => console.log('ws closed'));
        ws.addEventListener('message', (event) => {
            const message = Message.inflate(event.data);

            if (!message) return;

            switch (message.type) {
                case Message.types.CONNECT:
                    this.dispatchEvent(new Event('connect'));
                    break;
            }
        })

    }
}

export default WsManager;
