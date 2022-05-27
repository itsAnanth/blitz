class ChatMessage {

    author: string;
    content: string;
    timestamp: number;
    id: string;
    avatar: number;

    constructor({ author, content, timestamp, id, avatar }: {
        author: string, content: string, timestamp?: number, id: string, avatar: number
    } ) {
        this.author = author;
        this.content = content;
        this.timestamp = timestamp ?? Date.now();
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
