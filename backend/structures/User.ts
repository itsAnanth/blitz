import type { WebSocket } from 'uWebSockets.js';
import { JsonWebKey } from 'node:crypto';

class User {
    username: string;
    ws: WebSocket;
    avatar: number;
    publicKey: JsonWebKey;

    constructor({ username, ws, avatar, publicKey }: { username: string, ws: WebSocket, avatar: number, publicKey: JsonWebKey }) {
        this.username = username;
        this.ws = ws;
        this.avatar = avatar;
        this.publicKey = publicKey;
    }

    serialize() {
        return { username: this.username, avatar: this.avatar, publicKey: this.publicKey };
    }
}


export default User;