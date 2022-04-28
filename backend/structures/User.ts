import type { WebSocket } from 'uWebSockets.js';
import type { IUser } from '../types/User';

interface User extends IUser { };

class User {
    constructor(name: string, ws: WebSocket) {
        this.name = name;
        this.ws = ws;
    }

    serialize() {
        return { username: this.name };
    }
}


export default User;