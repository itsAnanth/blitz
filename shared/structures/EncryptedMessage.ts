class EncryptedMessage {

    data: Uint8Array;
    recipientId: string;

    constructor(data: Uint8Array, recipientId: string) {
        this.data = data;
        this.recipientId = recipientId;
    }


    serialize() {
        return { data: this.data, recipientId: this.recipientId };
    }
}


export default EncryptedMessage;