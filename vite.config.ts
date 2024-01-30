import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: {
      '@': '/src/',
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      // eslint-disable-next-line camelcase
      keep_classnames: true,
      // eslint-disable-next-line camelcase
      keep_fnames: true,
    },
  },
  server: {
    open: true,
    host: '0.0.0.0',
    port: 5000,
    https: false,
    proxy: {
      '/api/': {
        // target: 'http://192.168.122.200:27200',
        target: 'http://192.168.122.200:27200',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
