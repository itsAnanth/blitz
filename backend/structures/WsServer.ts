import { TemplatedApp } from "uWebSockets.js";
import Message from '../../shared/structures/Message';
import User from "./User";
import fs from 'fs';
import Event from "../utils/Event";
import Logger from '../../shared/structures/Logger';
import Session from "../utils/Session";
import check from "../utils/packetsChecker";
import Utils from "../utils/Utils";

class WsServer {

    app: TemplatedApp;
    sockets: Map<string, User>;
    port: number;
    events: Map<number, Event>;
    session: Session;

    constructor(app: TemplatedApp, { port }: { port: number }) {
        this.app = app;
        this.sockets = new Map();
        this.events = new Map();
        this.port = port;
        this.session = new Session();
    }

    async init() {
        const eventsPath = fs.readdirSync('./events');

        if (eventsPath.length === 0) return Logger.log('empty server events');

        for (let i = 0; i < eventsPath.length; i++) {
            const event = (await import(`../events/${eventsPath[i]}`)).default as Event;

            if (this.events.has(event.type)) continue;

            this.events.set(event.type, event);
        }

        this.session.on('expired', async () => {
            await this.session.generateKey();
            Logger.log(`${this.session.i++} session`)
            this.app.publish('STATE/', Message.encode(
                new Message({ type: Message.types.SESSION, data: this.session.serialize() })
            ), true)
        })

        await this.session.generateKey();

        Logger.log(this.events, this.session.sessionKey);
    }

    usersData() {
        return [...this.sockets.entries()].map(([id, user]) => ({ id: id, ...user.serialize() }));
    }

    start() {
        this.app.ws('/*', {
            open: (ws) => {
                ws.id = Utils.getUserId();
                ws.subscribe("STATE/");
                Logger.log(`Client connected with id ${ws.id}`);
            },
            message: (ws, _message) => {
                const message = Message.inflate(_message);
                if (!message) return;

                if (check(message)) {
                    Logger.error('malformed packet quitting')
                    Logger.log(message);
                    return;
                }

                Logger.log('[' + `%c${Message.types[message.type]}` + '%c]', 'color: cyan', 'color: white');

                this.events.get(message.type).callback.call(this, ws, message);
                const watchlist = [Message.types.JOIN, Message.types.LEAVE, Message.types.MESSAGE_CREATE];
                // watchlist.includes(message.type) && (this.session.emit('expired'));
            },
            close: (ws, code, _message) => {
                const user = this.sockets.get(ws.id);
                this.sockets.delete(ws.id);

                if (!user) return;

                const data = { author: 'Blitz Bot', content: `${user.username} left the chat`, id: Utils.getMessageId() };
                this.app.publish('STATE/', Message.encode(new Message({ type: Message.types.LEAVE, data: [data, this.usersData()] })), true);
                // this.session.emit('expired');
                Logger.log('client disconnected with code ' + code)
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