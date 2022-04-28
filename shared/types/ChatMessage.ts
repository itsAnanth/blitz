interface ChatMessage {
    content: string;
    timestamp: number;
    author: string;
}

type ChatMessagePayload = { author: string, content: string, timestamp?: number }

export type { ChatMessage as IChatMessage, ChatMessagePayload };
