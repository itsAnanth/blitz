import { App } from 'uWebSockets.js';
import { config } from 'dotenv';
import WsServer from './utils/WsServer';

declare module 'uWebSockets.js' {
    interface WebSocket {
        id: string;
    }
}

config();

const PORT = Number(process.env.PORT) || 8000;
const app = App();
const server = new WsServer(app, { port: PORT });

server.start();
