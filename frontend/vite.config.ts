import { defineConfig } from "vite";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            $lib: path.resolve(__dirname, "..", "./lib"),
        },
    },
    plugins: [
        svelte({
            preprocess: [sveltePreprocess({ typescript: true })],
        }),
    ],
});