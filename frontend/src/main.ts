import App from './pages/Main.svelte';
import Logger from '../../shared/structures/Logger';

declare global {
    interface Window {
        DEV?: boolean;       
    }
}

window.location.hostname === 'localhost' && (window.DEV = true);
Logger.DEV = window.DEV ?? false;


const app = new App({
    target: document.body
});

export default app;