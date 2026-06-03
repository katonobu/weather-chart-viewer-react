import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
  // mode は build 時に --mode dev/stg/prd で渡される
  const target_env = mode // ここでは mode をそのまま利用
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [
      react(),
      tailwindcss(),
      viteStaticCopy({
        targets: [
          {
            src: `public/robots.${target_env}.txt`, // 環境ごとの robots ファイル
            dest: '.',                       // dist/ の直下にコピー
            rename: 'robots.txt'             // ファイル名を robots.txt に固定
          }
        ]
      })
    ],
  }
})

