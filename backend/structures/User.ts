import type { WebSocket } from 'uWebSockets.js';
import type { IUser } from '../types/User';

interface User extends IUser { };

class User {
    constructor(name: string, ws: WebSocket, avatar: number) {
        this.name = name;
        this.ws = ws;
        this.avatar = avatar;
    }

    serialize() {
        return { username: this.name, avatar: this.avatar };
    }
}


export default User;