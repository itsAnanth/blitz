import { writable } from 'svelte/store';
const messages = writable([]);

export { messages };