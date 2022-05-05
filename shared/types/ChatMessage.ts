interface ChatMessage {
    content: string;
    timestamp: number;
    author: string;
    id?: string;
    avatar: number;
}

type ChatMessagePayload = { author: string, content: string, timestamp?: number, id? :string, avatar: number }

export type { ChatMessage as IChatMessage, ChatMessagePayload };
