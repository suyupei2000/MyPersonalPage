import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

import path from 'path'

import qiankun from 'vite-plugin-qiankun'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD)

  console.log('command:', command)
  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    css: {
      preprocessorOptions: {
        less: {
          // modifyVars: {
          //   hack: `true; @import (reference) "${path.resolve('src/style/variables.less')}";`,
          // },
          math: 'strict',
          javascriptEnabled: true,
        },
      },
    },

    plugins: [
      createVuePlugin(),
      vueJsx(),
      svgLoader(),
      qiankun('syp-page-main', {
        useDevMode: true,
      }),
    ],

    server: {
      port: 4399,
      host: '0.0.0.0',
      proxy: {
        '/api': 'http://127.0.0.1:3000/',
        '/api/test': {
          target: 'http://127.0.0.1:3000/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/test/, ''),
        },
      },
    },

    // 打包配置
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      sourcemap: false,
      // minify: 'terser',
      cssCodeSplit: true,
      // 警告打包后文件大小
      chunkSizeWarningLimit: 1000, // 单位 KB，默认 500 KB
      rollupOptions: {
        // external: [''],
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
        output: {
          // JS 文件配置
          chunkFileNames: 'js/[name]-[hash].js', // 动态导入的 chunk
          entryFileNames: 'js/[name]-[hash].js', // 入口文件
          // CSS 文件配置
          assetFileNames: (chunkInfo) => {
            if (chunkInfo.name?.endsWith('.css')) {
              return 'css/[name]-[hash].css' // 单独输出 CSS 文件
            }
            // 其他静态资源（如图片、字体等）的配置
            const ext = chunkInfo.name?.split('.').pop() || ''
            const imgExts = ['.png', '.jpg', '.jpeg', '.gif', '.svg']
            if (imgExts.includes(`.${ext}`.toLowerCase())) {
              return 'img/[name]-[hash].[ext]'
            }
            return 'assets/[name]-[hash].[ext]' // 默认输出到 assets 目录
          },
          // manualChunks: {
          //   vue: ['vue', 'vue-router', 'pinia'],
          // },
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // 将 node_modules 中的库按名称拆分
              // return id.toString().split('node_modules/')[1].split('/')[0].toString()
              // 提取库名（如 'lodash' 来自 'node_modules/lodash/...'）
              const match = id.toString().match(/node_modules[\\/]([^\\/]+)/)
              if (match) {
                // 将大型库（如 lodash、vue）单独拆分
                const libName = match[1]
                if (['lodash', 'vue', 'vue-router', 'pinia'].includes(libName)) {
                  return libName
                }
              }
              // 其他小型库合并到 vendors chunk
              return 'vendors'
            }
            return null
            // return 'syp-page-main'
          },

          // globals: {
          //   vue: 'Vue',
          // },
        },
      },
    },
  }
}
