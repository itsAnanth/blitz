import { writable } from 'svelte/store';
const messages = writable([]);
const users = writable([]);
const keys = writable({});

export { messages, users, keys };

type Ikeys = {
    privateKeyJwk: JsonWebKey;
    publickKeyJwk: JsonWebKey;
    sessionKey: JsonWebKey;
    derivedKey: CryptoKey;
}

export type { Ikeys };