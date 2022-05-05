import type { ChatMessagePayload, IChatMessage } from '../types/ChatMessage';

interface ChatMessage extends IChatMessage { };

class ChatMessage {
    constructor({ author, content, timestamp = Date.now(), id = null, avatar }: ChatMessagePayload ) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp;
        this.id = id;
        this.avatar = avatar;
    }

    serialize() {
        return { 
            author: this.author,
            content: this.content,
            timestamp: this.timestamp,
            avatar: this.avatar
        }
    }
}

export default ChatMessage;
