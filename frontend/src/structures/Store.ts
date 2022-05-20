import { writable } from 'svelte/store';
const messages = writable([]);
const users = writable([]);

export { messages, users };