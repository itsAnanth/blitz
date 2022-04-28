import type { ChatMessagePayload, IChatMessage } from '../types/ChatMessage';

interface ChatMessage extends IChatMessage { };

class ChatMessage {
    constructor({ author, content, timestamp = Date.now() }: ChatMessagePayload ) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
    }

    serialize() {
        return { 
            author: this.author,
            content: this.content,
            timestamp: this.timestamp
        }
    }
}

export default ChatMessage;
