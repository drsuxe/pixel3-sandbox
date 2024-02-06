import fs from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'

// function getDirectories(path) {
//   const folder = fs.readdirSync(path).filter((file) => {
//     return fs.statSync(`${path}/${file}`).isDirectory()
//   })

//   const routes = folder.map((v) => {
//     return {
//       src: `${path}/${v}/examples`,
//       path: `${v}/`,
//     }
//   })

//   return routes
// }
// const extendRoutes = getDirectories('src/packages')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      routesFolder: ['src/pages', {
        src: 'src/patterns/',
        path: 'patterns/',
      }],
    }),
    vue(),
    vueJsx(),
    visualizer({
      template: 'treemap', // or sunburst
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'analyse.html',
    }),
  ],
})
