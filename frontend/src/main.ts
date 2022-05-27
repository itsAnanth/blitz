import App from './pages/Main.svelte';
import Logger from '../../shared/structures/Logger';
import CryptoClient from './structures/CryptoClient';

let dev = false;
declare global {
    interface Window {
        __cryptoclient?: CryptoClient;    
    }
}

dev = window.location.hostname === 'localhost';
Logger.DEV = dev ?? false;


const app = new App({
    target: document.body
});

export default app;
export { dev };