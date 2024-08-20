import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { prismjsPlugin } from 'vite-plugin-prismjs'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const { VITE_BUILD_MODE } = loadEnv(mode, process.cwd())
  return VITE_BUILD_MODE === 'lib'
    ? {
        plugins: [
          vue(),
          AutoImport({
            imports: ['vue', 'vue-router'],
            dts: true
          }),
          prismjsPlugin({
            languages: 'all', // 语言
            plugins: ['line-numbers', 'copy-to-clipboard'],
            theme: 'solarizedlight',
            css: true
          }),
          dts({
            entryRoot: './src/components',
            outDir: ['./lljui/es', './lljui/lib'],
            tsconfigPath: './tsconfig.json'
          })
        ],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
          }
        },
        build: {
          // 打包后的文件目录
          outDir: 'lib',
          // 压缩
          minify: false,
          rollupOptions: {
            // 忽略打包vue文件
            external: ['vue'],
            input: ['./src/components/index.ts'],
            // output: {
            //   globals: {
            //     vue: 'Vue'
            //   },
            //   dir: 'dist'
            // }
            output: [
              {
                format: 'es',
                entryFileNames: '[name].mjs',
                // 打包目录和目录对应
                preserveModules: true,
                exports: 'named',
                dir: './lljui/es'
              },
              {
                format: 'cjs',
                entryFileNames: '[name].js',
                // 打包目录和目录对应
                preserveModules: true,
                exports: 'named',
                dir: './lljui/lib'
              }
            ]
          },
          lib: {
            entry: './src/components/index.ts'
            // name: 'lljui',
            // fileName: 'lljui',
            // formats: ['es', 'umd', 'cjs']
          }
        }
      }
    : {
        plugins: [
          vue(),
          AutoImport({
            imports: ['vue', 'vue-router'],
            dts: true
          }),
          prismjsPlugin({
            languages: 'all', // 语言
            plugins: ['line-numbers', 'copy-to-clipboard'],
            theme: 'solarizedlight',
            css: true
          })
        ],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
          }
        },
        publicDir: 'public',
        build: {
          // 设置最终构建的浏览器兼容目标
          target: 'es2015',
          // 构建后是否生成source map文件
          sourcemap: false,
          // 指定输出路径  默认：dist
          outDir: '.',
          // 指定生成静态资源的存放路径（相对于 build.outDir） 默认：assets
          assetsDir: 'static',

          rollupOptions: {
            output: {
              chunkFileNames: 'static/js/[name]-[hash].js',
              entryFileNames: 'static/js/[name]-[hash].js',
              assetFileNames: (assetInfo: any) => {
                const info = assetInfo.name.split('.')
                let extType = info[info.length - 1]
                if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
                  extType = 'media'
                } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
                  extType = 'images'
                } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(assetInfo.name)) {
                  extType = 'fonts'
                }
                return `static/${extType}/[name]-[hash].[ext]`
              },
              manualChunks(id) {
                if (id.includes('node_modules')) {
                  const arr = id.toString().split('node_modules/')
                  return 'chunks/' + arr[arr.length - 1].split('/')[0].toString()
                }
              }
            }
          }
        }
      }
})
