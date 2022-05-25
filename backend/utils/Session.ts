import { JsonWebKey } from 'crypto';
import { webcrypto } from 'node:crypto';
import events from 'events';


// @ts-ignore
const subtle = webcrypto.subtle as unknown as any;



class Session extends events {

    sessionKey: JsonWebKey;

    constructor() {
        super();
        this.sessionKey = null;

    }

    async generateKey() {

        const keyPair = await subtle.generateKey(
            {
                name: "ECDH",
                namedCurve: "P-256",
            },
            true,
            ["deriveKey", "deriveBits"]
        );

        const publicKeyJwk = await subtle.exportKey(
            "jwk",
            keyPair.publicKey
        );

        // const privateKeyJwk = await subtle.exportKey(
        //     "jwk",
        //     keyPair.privateKey
        // );

        this.sessionKey = publicKeyJwk;

        // console.log(this.sessionKey);

    }

}

export default Session;