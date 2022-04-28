import type { TemplatedApp, WebSocket } from 'uWebSockets.js';

interface WsServer {
    app: TemplatedApp;
    sockets: Map<string, WebSocket>;
    port: number;
}


export type { WsServer as IWSS };
