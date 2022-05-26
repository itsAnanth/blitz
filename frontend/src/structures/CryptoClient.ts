class CryptoClient {

    static crypto = window.crypto;

    static async generateKeyPair() {

        const keyPair = await window.crypto.subtle.generateKey(
            {
                name: "ECDH",
                namedCurve: "P-256",
            },
            true,
            ["deriveKey", "deriveBits"]
        );

        const publicKeyJwk = await window.crypto.subtle.exportKey(
            "jwk",
            keyPair.publicKey
        );

        const privateKeyJwk = await window.crypto.subtle.exportKey(
            "jwk",
            keyPair.privateKey
        );

        return { publicKeyJwk, privateKeyJwk };

    }

    static async deriveKey(publicKeyJwk: JsonWebKey, privateKeyJwk: JsonWebKey) {
        const publicKey = await window.crypto.subtle.importKey(
            "jwk",
            publicKeyJwk,
            {
                name: "ECDH",
                namedCurve: "P-256",
            },
            true,
            []
        );

        const privateKey = await window.crypto.subtle.importKey(
            "jwk",
            privateKeyJwk,
            {
                name: "ECDH",
                namedCurve: "P-256",
            },
            true,
            ["deriveKey", "deriveBits"]
        );

        return await window.crypto.subtle.deriveKey(
            { name: "ECDH", public: publicKey },
            privateKey,
            { name: "AES-GCM", length: 256 },
            true,
            ["encrypt", "decrypt"]
        );
    };


    static async encrypt(text: string, key: CryptoKey, iv: Uint8Array) {
        const encodedText = new TextEncoder().encode(text);
        const data = await window.crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv: iv ?? new TextEncoder().encode('Initialization Vector')
            },
            key,
            encodedText
        )

        const uint = new Uint8Array(data);

        return uint;
    }

    static async decrypt(text: any, key: CryptoKey, iv: Uint8Array) {
        const algorithm = {
            name: 'AES-GCM',
            iv: iv ?? new TextEncoder().encode('Initialization Vector')
        };

        const data = await window.crypto.subtle.decrypt(
            algorithm,
            key,
            text
        )

        return new TextDecoder().decode(data);
    }
}

export default CryptoClient;