import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'url'
import { loadEnv } from "vite";


// https://vitejs.dev/config/
export default ({mode}) => defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
    cors: true,
    proxy: {
      '/dev-api': {
        target: loadEnv(mode, process.cwd()).VITE_APP_SERVER_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dev-api/, ''),
      },
      '/prod-api': {
        target: loadEnv(mode, process.cwd()).VITE_APP_SERVER_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/prod-api/, ''),
      },
    },
  },
})
