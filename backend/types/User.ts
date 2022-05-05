import type { WebSocket } from 'uWebSockets.js';

interface User {
    name: string;
    ws: WebSocket;
    avatar: number;
}


export type { User as IUser };
