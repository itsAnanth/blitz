import { TemplatedApp } from "uWebSockets.js";
import type { IWSS } from '../types/WsServer';
import crypto from 'crypto';

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
                this.sockets.set(ws.id, ws);
                console.log(`Client connected with id ${ws.id}`);
            },
            message: (ws, message) => {
                
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