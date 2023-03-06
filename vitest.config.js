import viteConfig from './vite.config';
import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: 'jsdom',
            exclude: [...configDefaults.exclude, 'e2e/*'],
            root: fileURLToPath(new URL('./', import.meta.url)),
        },
    }),
);
