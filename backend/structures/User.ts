import type { WebSocket } from 'uWebSockets.js';

class User {
    name: string;
    ws: WebSocket;
    avatar: number;
    publicKey: JsonWebKey;

    constructor(name: string, ws: WebSocket, avatar: number, publicKey: JsonWebKey) {
        this.name = name;
        this.ws = ws;
        this.avatar = avatar;
        this.publicKey = publicKey;
    }

    serialize() {
        return { username: this.name, avatar: this.avatar, publicKey: this.publicKey };
    }
}


export default User;