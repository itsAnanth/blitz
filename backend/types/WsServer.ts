import type { TemplatedApp, WebSocket } from 'uWebSockets.js';
import User from '../structures/User';

interface WsServer {
    app: TemplatedApp;
    sockets: Map<string, User>;
    port: number;
}


export type { WsServer as IWSS };
