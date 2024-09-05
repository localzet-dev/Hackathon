import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': process.env
    },
    plugins: [vue(), imagetools()],
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
