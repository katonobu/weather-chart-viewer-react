import { viewerRoute } from '../main'
import { useParams } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useFetchMetaData } from '../hooks/useFetchMetaData'
import { useFetchKaisetsuData } from '../hooks/useFetchKaisetsuData'
import { useFooterHeight } from '../hooks/useFooterHeight'
import { Pictures, PictureLinks } from '../components/Pictures'
import { ToListPage } from '../components/ToListPage'
import { Footer } from '../components/Footer'

export default function Viewer() {
  const { dir } = useParams({ from: viewerRoute.id })
  const {
    footerRef,
    footerHeight
  } = useFooterHeight()

  const {
    metadata,
    loading
  } = useFetchMetaData(dir)

  const {
    kaisetsu,
    loading: kaisetsuLoading
  } = useFetchKaisetsuData(metadata, dir)

  if (loading) return <p className="p-4">読み込み中...</p>
  if (!metadata) return <p className="p-4">データがありません。</p>

  // 環境変数 VITE_CONTENTS_PATH を参照
  const contentsPath = import.meta.env.VITE_CONTENTS_PATH || "/"

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4" style={{ paddingBottom: footerHeight }}>
        <ToListPage id="top"></ToListPage>

        <h1 className="text-2xl font-bold">{metadata.title}</h1>
        <p>{metadata.released_at_j}</p>

        <h2 className="text-2xl font-bold">ページ内リンク</h2>
        <PictureLinks metadata={metadata}></PictureLinks>

        <h2 className="text-2xl font-bold">各画像</h2>
        <Pictures metadata={metadata} contentsPath={contentsPath} dir={dir}></Pictures>
        <p>　</p><br></br>
        <p>　</p><br></br>
      </div>
      <div
        ref={footerRef}
        className="fixed bottom-0 w-full bg-white p-4">
        <Footer metadata={metadata} kaisetsu={kaisetsu} kaisetsuLoading={kaisetsuLoading}></Footer>
      </div>
    </div>
  )
}
