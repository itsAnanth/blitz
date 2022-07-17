import EncryptedMessage from "../structures/EncryptedMessage";
import User from '../../backend/structures/User';
import ChatMessage from "../structures/ChatMessage";

export namespace Updates {
    export type messageId = string;
    export type senderId = string;
    export type senderPublicKey = JsonWebKey;
    export type serializedUsers = ReturnType<User['serialize']>;
    export type serializedEncryptedMessage = ReturnType<EncryptedMessage['serialize']>;
    export type serializedChatMessage = ReturnType<ChatMessage['serialize']>;

    export namespace Server {
        export type CONNECT = [string];
        export type SESSION = [JsonWebKey, string];
        export type MESSAGE_CREATE = [messageId, senderId, senderPublicKey, serializedEncryptedMessage['data']];
        export type JOIN = [serializedChatMessage, serializedUsers[]]
        export type USERS = [serializedUsers[]];
        export type LEAVE = JOIN;
    }


    export namespace Client {


        export type MESSAGE_CREATE = {
            messageId: messageId, 
            senderId: senderId,
            senderPublicKey: senderPublicKey,
            data: serializedEncryptedMessage['data'];
        }

        export type CONNECT = {
            clientId: string;
        };

        export type SESSION = {
            sessionKey: JsonWebKey;
            iv: string;
        }

        export type JOIN = {
            message: serializedChatMessage,
            users: serializedUsers[];
        }

        export type LEAVE = JOIN;
        
        export type USERS = {
            users: serializedUsers[];
        }
    }
}
