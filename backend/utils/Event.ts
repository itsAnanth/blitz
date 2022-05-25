import { WebSocket } from "uWebSockets.js";
import Message from "../../shared/structures/Message";
import { MessageType } from "../../shared/structures/MessageType";

class Event {

    type: MessageType;
    callback: (ws: WebSocket, message: Message) => any;

    constructor(
        { type, callback }:
        { type: MessageType, callback: (ws: WebSocket, message: Message) => any }
    ) {
        this.type = type;
        this.callback = callback;

    }
}


export default Event;