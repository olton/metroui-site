import {nodeResolve} from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from "autoprefixer"
import progress from 'rollup-plugin-progress';

const banner = ``

export default [
    {
        input: './metro/index.js',
        watch: {
            clearScreen: false
        },
        plugins: [
            progress({
                clearLine: true,
            }),
            postcss({
                extract: true,
                minimize: true,
                use: ['less'],
                sourceMap: false,
                plugins: [
                    autoprefixer(),
                ]
            }),
            nodeResolve({
                browser: true
            }),
        ],
        output: {
            file: './public/metro/metro.js',
            format: 'iife',
            sourcemap: false,
            banner,
            plugins: [
                terser({
                    keep_classnames: true,
                    keep_fnames: true,
                })
            ]
        }
    },
];