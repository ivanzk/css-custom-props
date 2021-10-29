import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './lib/index.esm.js',
        format: 'esm',
      },
      {
        file: './lib/index.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: './lib/css-custom-props.umd.js',
        format: 'umd',
        exports: 'named',
        name: 'cssVar',
      },
    ],
    plugins: [typescript()],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: './lib/css-custom-props.min.umd.js',
        format: 'umd',
        exports: 'named',
        name: 'cssVar',
      },
    ],
    plugins: [typescript(), uglify()],
  },
];
