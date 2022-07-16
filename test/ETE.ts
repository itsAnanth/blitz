// end to end encryption

import CryptoClient from "../frontend/src/structures/CryptoClient";

(async() => {
    let msg = 'hello world';

    const k1 = await CryptoClient.generateKeyPair();
    const k2 = await CryptoClient.generateKeyPair();

    console.log('k1, k2', k1, k2);
    const session = (await CryptoClient.generateKeyPair()).publicKeyJwk;
    console.log('session', session)

    const d1 = await CryptoClient.deriveKey(session, k1.privateKeyJwk);
    const d2 = await CryptoClient.deriveKey(session, k2.privateKeyJwk);

    console.log('derived key', d1, d2);

    const encrypted = await CryptoClient.encrypt(msg, d1);

    console.log('encry', encrypted)

    console.log(await CryptoClient.decrypt(encrypted, d2));

})();