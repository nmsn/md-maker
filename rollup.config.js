import clear from 'rollup-plugin-clear';
import typescript from 'rollup-plugin-typescript2';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'es/index.js',
      format: 'esm',
    },
    {
      file: 'lib/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.js',
      format: 'umd',
      name: '@nmsn/md-maker',
    },
  ],
  plugins: [
    clear({
      targets: ['dist', 'lib', 'es'],
    }),
    typescript(),
    commonjs(),
    nodeResolve(),
  ],
};
