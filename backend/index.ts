import { config } from 'dotenv';

config();

import { App } from 'uWebSockets.js';
import WsServer from './structures/WsServer';
import Logger from '../shared/structures/Logger';
import Session from './utils/Session';

Logger.DEV = process.env.ENV === 'DEV';

declare module 'uWebSockets.js' {
    interface WebSocket {
        id: string;
    }
}

const PORT = Number(process.env.PORT) || 8000;
const app = App();
const server = new WsServer(app, { port: PORT });

server.init();
server.start();



