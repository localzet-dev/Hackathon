import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {imagetools} from 'vite-imagetools'
import {viteObfuscateFile} from 'vite-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': process.env
    },
    plugins: [
        vue(), imagetools(),
        viteObfuscateFile({
            globalOptions: {
                compact: true,
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: /^~.+/,
                replacement: (val) => {
                    return val.replace(/^~/, "");
                },
            },
        ],
    },
})
