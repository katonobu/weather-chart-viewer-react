import { viewerRoute } from '../main' // viewerRouteをmain.jsxからexportする
import { useParams } from '@tanstack/react-router'

export default function Viewer() {
  const { dir } = useParams({ from: viewerRoute.id }) // 正しい記法
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Viewer Page</h1>
      <p>選択されたディレクトリ: {dir}</p>
    </div>
  )
}