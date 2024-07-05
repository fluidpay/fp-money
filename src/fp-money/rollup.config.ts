import { RollupOptions } from 'rollup'
import { fileURLToPath } from 'node:url';
import typescript from '@rollup/plugin-typescript';
import scss from "rollup-plugin-scss";

const libConfig: RollupOptions = {
    plugins: [typescript({ tsconfig: 'tsconfig.build.json' })],
    input: fileURLToPath(new URL('fp-money.ts', import.meta.url)),
    output: [
        {
            file: 'dist/fp-money.es.js',
            assetFileNames: '[name].[ext]',
            format: 'es'
        },
        {
            name: 'fp-money.umd.js',
            file: 'dist/fp-money.umd.js',
            format: 'umd'
        }
    ]
};

const scssConfig: RollupOptions = {
    plugins: [scss({ fileName: 'style.css' })],
    input: fileURLToPath(new URL('fp-money.scss', import.meta.url)),
    output: [
        {
            file: 'dist/style.css',
        }
    ]
}


export default [libConfig, scssConfig]
