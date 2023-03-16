/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import { resolve } from 'path'

import { peerDependencies } from './package.json'

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      name: 'ChakraUiClone',
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },

    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      // @ts-expect-error: Type mismatch
      plugins: [typescript({ tsconfig: './tsconfig.json' })]
    }
  }
})
