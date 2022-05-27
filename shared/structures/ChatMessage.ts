class ChatMessage {

    author: string;
    content: string;
    timestamp: number;
    id: string;
    avatar: number;
    authorId?: string;

    constructor({ author, content, timestamp, id, avatar, authorId }: {
        author: string, content: string, timestamp?: number, id: string, avatar: number, authorId?: string
    } ) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp ?? Date.now();
        this.id = id;
        this.avatar = avatar;
        this.authorId = authorId ?? null;
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
