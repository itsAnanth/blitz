import { MessageType } from "../structures/MessageType";

interface Message {
    type: MessageType;
    data: any[];
}

type DeflatedMessage = [MessageType, ...any];

export type { Message, DeflatedMessage };
