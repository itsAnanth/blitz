import EncryptedMessage from "../structures/EncryptedMessage";
import User from '../../backend/structures/User';

export namespace Updates {
    export type messageId = string;
    export type senderId = string;
    export type senderPublicKey = JsonWebKey;
    export type serializedUsers = ReturnType<User['serialize']>;
    export type serializedEncryptedMessage = ReturnType<EncryptedMessage['serialize']>;

    export namespace Server {
        export type CONNECT = [string];
        export type SESSION = [JsonWebKey, string];
        export type MESSAGE_CREATE = [messageId, senderId, senderPublicKey, serializedEncryptedMessage];
        export type JOIN = [string, serializedUsers[]]
        export type USERS = [serializedUsers[]];
        export type LEAVE = JOIN;
    }


    export namespace Client {


        export type MESSAGE_CREATE = {
            messageId: messageId, 
            senderId: senderId,
            senderPublicKey: senderPublicKey,
            data: serializedEncryptedMessage;
        }

        export type CONNECT = {
            clientId: string;
        };

        export type SESSION = {
            sessionKey: JsonWebKey;
            iv: string;
        }

        export type JOIN = {
            message: string,
            users: serializedUsers[];
        }

        export type LEAVE = JOIN;
        
        export type USERS = {
            users: serializedUsers[];
        }
    }
}
