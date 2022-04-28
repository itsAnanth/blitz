import { TemplatedApp } from "uWebSockets.js";
import type { IWSS } from '../types/WsServer';
import crypto from 'crypto';
import Message from '../../shared/structures/Message';
import User from "../structures/User";

interface WsServer extends IWSS { };

class WsServer {
    constructor(app: TemplatedApp, { port }: { port: number }) {
        this.app = app;
        this.sockets = new Map();
        this.port = port;
    }

    usersData() {
        return Message.encode(new Message({ type: Message.types.USERS, data: [...this.sockets.entries()].map(([id, user]) => ({ id: id, username: user.name })) }));
    }

    start() {
        this.app.ws('/*', {
            open: (ws) => {
                ws.id = crypto.randomBytes(16).toString('hex');
                ws.subscribe("STATE/");
                console.log(`Client connected with id ${ws.id}`);
            },
            message: (ws, _message) => {
                let _data;
                const message = Message.inflate(_message);
                if (!message) return;

                switch (message.type) {
                    case Message.types.CONNECT:
                        ws.send(Message.encode(new Message({ type: Message.types.CONNECT, data: ['authorized'] })), true);
                        break;
                    case Message.types.MESSAGE_CREATE:
                        _data = { ...message.data[0], id: crypto.createHash('sha256').digest('hex') };
                        this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.MESSAGE_CREATE, data: [_data] })), true);
                        break;
                    case Message.types.JOIN:
                        this.sockets.set(ws.id, new User(message.data[0], ws));
                        _data = { author: 'Blitz Bot', content: `${message.data[0]} joined the chat`, id: crypto.createHash('sha256').digest('hex') };
                        this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.JOIN, data: [_data, this.usersData()] })), true);
                        break;
                    case Message.types.USERS:
                        ws.send(this.usersData(), true);
                        break;
                    case Message.types.LEAVE:
                        this.sockets.delete(ws.id);
                        _data = { author: 'Blitz Bot', content: `${message.data[0]} left the chat`, id: crypto.createHash('sha256').digest('hex') };
                        this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.LEAVE, data: [_data, this.usersData()] })), true);
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