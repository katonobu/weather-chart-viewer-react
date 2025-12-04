import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
  // mode は build 時に --mode dev/stg/prd で渡される
  const env = mode // ここでは mode をそのまま利用

  return {
    base: process.env.VITE_BASE || '/',
    plugins: [
      react(),
      tailwindcss(),
      viteStaticCopy({
        targets: [
          {
            src: `public/robots.${env}.txt`, // 環境ごとの robots ファイル
            dest: '.',                       // dist/ の直下にコピー
            rename: 'robots.txt'             // ファイル名を robots.txt に固定
          }
        ]
      })
    ],
  }
})

