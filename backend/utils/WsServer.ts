import { TemplatedApp } from "uWebSockets.js";
import type { IWSS } from '../types/WsServer';
import crypto from 'crypto';
import Message from '../../shared/structures/Message';

interface WsServer extends IWSS { };

class WsServer {
    constructor(app: TemplatedApp, { port }: { port: number }) {
        this.app = app;
        this.sockets = new Map();
        this.port = port;
    }

    start() {
        this.app.ws('/*', {
            open: (ws) => {
                ws.id = crypto.randomBytes(16).toString('hex');
                ws.subscribe("STATE/");
                console.log(`Client connected with id ${ws.id}`);
            },
            message: (ws, _message) => {
                const message = Message.inflate(_message);
                if (!message) return;

                switch (message.type) {
                    case Message.types.CONNECT:
                        this.sockets.set(ws.id, ws);
                        ws.send(Message.encode(new Message({ type: Message.types.CONNECT, data: ['authorized'] })), true);
                        break;
                    case Message.types.MESSAGE_CREATE:
                        this.app.publish('STATE/', _message, true);
                        break;

                }
            },
            close: (ws, code, _message) => {
                this.sockets.delete(ws.id);
                console.log('client disconnected with code ' + code)
            },
            idleTimeout: 32,
            maxPayloadLength: undefined
        }).listen(this.port, (success) => {
            if (success) console.info(`Connected to port: ${this.port}`);
            else console.error("Couldn't connect!");
        })
    }
}

export default WsServer;