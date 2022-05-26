import crypto, { JsonWebKey } from 'crypto';
import { webcrypto } from 'node:crypto';
import events from 'events';


// @ts-ignore
const subtle = webcrypto.subtle as unknown as any;



class Session extends events {

    sessionKey: JsonWebKey;
    iv: Buffer;
    i: number;

    constructor() {
        super();
        this.sessionKey = null;
        this.iv = null;
        this.i = 0;

        setInterval(async() => {
            await this.generateKey();
            this.emit('expired');
            console.log(`${this.i++} session`)
        }, 5000)
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

        const privateKeyJwk = await subtle.exportKey(
            "jwk",
            keyPair.privateKey
        );

        const iv = crypto.randomBytes(16);;

        this.sessionKey = publicKeyJwk;
        this.iv = iv;

        return { privateKeyJwk, publicKeyJwk, iv }
    }

    serialize() {
        return [this.sessionKey, this.iv];
    }

}

export default Session;