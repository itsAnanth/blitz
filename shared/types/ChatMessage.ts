interface ChatMessage {
    content: string;
    timestamp: number;
    author: string;
    id?: string;
}

type ChatMessagePayload = { author: string, content: string, timestamp?: number, id? :string }

export type { ChatMessage as IChatMessage, ChatMessagePayload };
