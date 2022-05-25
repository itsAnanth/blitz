interface ChatMessage {
    content: Uint8Array;
    timestamp: number;
    author: string;
    id?: string;
    avatar: number;
}

type ChatMessagePayload = { author: string, content: Uint8Array, timestamp?: number, id? :string, avatar: number }

export type { ChatMessage as IChatMessage, ChatMessagePayload };
