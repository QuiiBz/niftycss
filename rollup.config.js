import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from '@wessberg/rollup-plugin-ts';
import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: {
            name: 'niftycss',
            file: pkg.main,
            format: 'umd'
        },
        plugins: [
            resolve(),
            commonjs(),
            ts({
                tsconfig: 'tsconfig.json',
            }),
        ]
    },
    /*{
        input: 'src/index.ts',
        plugins: [
            commonjs({
                include: 'node_modules/**'
            }),
            ts({
                tsconfig: 'tsconfig.json',
            }),
        ],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ]
    }*/
];
