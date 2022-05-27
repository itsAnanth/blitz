import type { WebSocket } from 'uWebSockets.js';
import { JsonWebKey } from 'node:crypto';

class User {
    username: string;
    ws: WebSocket;
    avatar: number;
    publicKeyJwk: JsonWebKey;

    constructor({ username, ws, avatar, publicKey }: { username: string, ws: WebSocket, avatar: number, publicKey: JsonWebKey }) {
        this.username = username;
        this.ws = ws;
        this.avatar = avatar;
        this.publicKeyJwk = publicKey;
    }

    serialize() {
        return { username: this.username, avatar: this.avatar, publicKeyJwk: this.publicKeyJwk };
    }
}


export default User;