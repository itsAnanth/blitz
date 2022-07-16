import type { Message as IMessage, DeflatedMessage } from '../types/Message';
import { decode, encode as _encode } from 'msgpack-lite';
import { MessageType } from './MessageType';

interface Message extends IMessage {};

class Message {
    constructor({ type, data = [] }: { type: MessageType, data?: any[] }) {
        this.type = type;
        this.data = data;
    }

    deflate(): DeflatedMessage {
        return [this.type, ...(this.data || [])];
    }

    encode(): Buffer {
        return _encode(this.deflate());
    }

    static typesArray() {
        const arr = [];
        for (const i in MessageType) {
            arr.push(MessageType[i]);
        }
        return arr;
    }

    static types = MessageType;

    static inflate(data: ArrayBuffer | DataView): Message | false {
        let _data = new Uint8Array(data instanceof DataView ? data.buffer : data);
        let decoded_message = decode(_data);
        if (!Array.isArray(decoded_message)) {
            try {
                decoded_message = Array.from(decoded_message);
                if (!decoded_message) return false;
            } catch(e) {
                return false;
            }
        }

        const msgT = new Message({ type: decoded_message.shift(), data: decoded_message.length == 0 ? [] : decoded_message });
        return msgT
    }

    static deflate(msg: Message): DeflatedMessage {
        return [msg.type, ...(msg.data || [])];
    }

    static encode(data: Message): Buffer {
        return _encode(Message.deflate(data));
    }

    static safeSend(send: any) {
        return (data: Message | Uint8Array) => {
            if (!(data instanceof Uint8Array)) data = Message.encode(data);
            try {
                send((data as Uint8Array).buffer);
            } catch (e) {
                console.error(e);
            }
        };
    }
}

const ping = _encode([MessageType.PING]);
const pong = _encode([MessageType.PONG]);

export default Message;
export { Message, ping, pong };