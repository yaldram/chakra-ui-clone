/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import { resolve } from 'path'

import { peerDependencies, dependencies } from './package.json'

export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      name: 'ChakraUiClone',
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es', 'cjs'],
      fileName: 'index'
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies)
      ],
      plugins: [typescript({ tsconfig: './tsconfig.json' })]
    }
  }
})
