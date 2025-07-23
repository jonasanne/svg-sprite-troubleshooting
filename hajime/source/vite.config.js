import { resolve } from 'path'
import svgSpritePlugin from '@pivanov/vite-plugin-svg-sprite';

export default {
  root: './',
  plugins: [
    svgSpritePlugin({
      iconDirs: [resolve(process.cwd(), 'assets/icons')],
      symbolId: '[dir]-[name]',
      svgDomId: 'svg-sprite',
      inject: 'body-last',
    }),
  ],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        js: resolve(__dirname, '/js/app.js'),
        css: resolve(__dirname, '/scss/main.scss'),
      },
      output: {
        entryFileNames: 'js/app.js',
        assetFileNames: 'css/style.css',
      },
    },
  },
}
