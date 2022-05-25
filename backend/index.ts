import { config } from 'dotenv';

config();

import { App } from 'uWebSockets.js';
import WsServer from './structures/WsServer';
import Logger from './utils/Logger';

declare module 'uWebSockets.js' {
    interface WebSocket {
        id: string;
    }
}


Logger.DEV && console.log(`Log level = ${process.env.LOG_LEVEL}`)

const PORT = Number(process.env.PORT) || 8000;
const app = App();
const server = new WsServer(app, { port: PORT });

server.init();
server.start();

