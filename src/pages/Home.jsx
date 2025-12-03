import { useFetchDirList } from '../hooks/useFetchDirList'
import { DirLinkList } from '../components/DirLinkList'
import { Footer } from '../components/Footer'

export default function Home() {
  const {
    directories,
    loading
  } = useFetchDirList()

  if (loading) return <p className="p-4">読み込み中...</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">日付毎一覧</h1>
      <DirLinkList directories={directories}></DirLinkList>
      <Footer></Footer>
    </div>
  )
}
