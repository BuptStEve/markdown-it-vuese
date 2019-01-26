import babel from 'rollup-plugin-babel'
import { eslint } from 'rollup-plugin-eslint'

import pkg from './package.json'

export default {
    input: 'src/index.js',
    output: [{
        file: pkg.main,
        format: 'cjs',
    }],
    plugins: [
        eslint(),
        babel(),
    ],
    external: [
        'fs',
        'path',
        '@vuese/parser',
        '@vuese/markdown-render',
    ],
}
