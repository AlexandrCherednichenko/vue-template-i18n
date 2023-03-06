import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve, dirname } from 'node:path';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        build: {
            outDir: 'dist',
        },

        plugins: [
            vue(),
            svgLoader({
                svgoConfig: {
                    multipass: true,
                },
            }),
            VueI18nPlugin({
                runtimeOnly: false,
                include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
            }),
        ],

        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                    @use 'sass:math';
                    @import "@/assets/css/variables-scss";
                    @import "@/assets/css/functions";
                    `,
                },
            },
        },

        test: {
            globals: true,
            environment: 'jsdom',
        },

        server: {
            host: '0.0.0.0',
            proxy: {
                '^/api': {
                    target: env.BACKEND_HOST,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                    configure: proxy => {
                        proxy.on('proxyRes', (proxyRes, req, res) => {
                            res.on('close', () => {
                                if (!res.writableEnded) {
                                    proxyRes.destroy();
                                }
                            });
                        });
                    },
                },
            },
        },
    };
});
