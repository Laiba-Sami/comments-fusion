// next.config.mjs
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default {
    experimental: {
        externalDir: true,
    },
    webpack: (config) => {
        // (Optional) also add a nice alias so you never need ../../../
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            '@backend': resolve(__dirname, 'backend'),
        };
        return config;
    }
};