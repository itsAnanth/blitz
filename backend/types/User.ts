import type { WebSocket } from 'uWebSockets.js';

interface User {
    name: string;
    ws: WebSocket;
}


export type { User as IUser };
