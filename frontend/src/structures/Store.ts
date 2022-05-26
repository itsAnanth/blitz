import { writable } from 'svelte/store';
import ChatMessage from '../../../shared/structures/ChatMessage';

type Ikeys = {
    privateKeyJwk: JsonWebKey | null;
    publicKeyJwk: JsonWebKey | null;
    sessionKey: JsonWebKey | null;
    derivedKey: CryptoKey | null;
    iv: Uint8Array | null;
}

type User = { id: string; username: string; avatar: number };

const messages = writable<ChatMessage[]>([]);
const users = writable<User[]>([]);
const keys = writable<Ikeys>({
    privateKeyJwk: null,
    publicKeyJwk: null,
    sessionKey: null,
    derivedKey: null,
    iv: null
});

export { messages, users, keys };



export type { Ikeys };