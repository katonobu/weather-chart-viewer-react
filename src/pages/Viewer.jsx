import { useEffect, useState } from 'react'
import { viewerRoute } from '../main'
import { useParams } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export default function Viewer() {
  const { dir } = useParams({ from: viewerRoute.id })
  const [metadata, setMetadata] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/${dir}/metadata.json`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch metadata')
        return response.json()
      })
      .then(data => {
        setMetadata(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching metadata:', error)
        setLoading(false)
      })
  }, [dir])

  if (loading) return <p className="p-4">読み込み中...</p>
  if (!metadata) return <p className="p-4">データがありません。</p>

  return (
    <div className="p-4">
      <Link
        id="top"
        to={`/`}
        className="text-blue-500 hover:underline"
      >日付毎一覧ページへ       
      </Link>

      <h1 className="text-2xl font-bold">{metadata.title}</h1>
      <p className="mb-4">{metadata.released_at_j}</p>

      <h2 className="text-2xl font-bold">データの出典</h2>
      <p>
        すべてのデータは
        <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
          気象庁
        </a>発表データです。
      </p>

      <h2 className="text-2xl font-bold">ページ内リンク</h2>
      <ul className="mt-4 space-y-2">
        {
          metadata.files.map(item => (
            <li key={item.id}><a href={`#${item.id}`} className="text-blue-500 hover:underline">{item.title}</a></li>
          ))
        }
      </ul>

      <h2 className="text-2xl font-bold">各画像</h2>
      {
        metadata.files.map(item => (
          <>
          <p key={`p-${item.id}`}><a href="#top" className="text-blue-500 hover:underline">ページの先頭</a></p>
          <a key={`a-${item.id}`} href={`/${dir}/${item.name}`} target="_blank" id={item.id} className="text-blue-500 hover:underline">{item.title}</a>
          <img key={`img-${item.id}`} width="100%" height="auto" src={`/${dir}/${item.name}`} className="w-full h-auto border-2 border-black"></img>
          </>
        ))
      }
      <p><a href="#top" className="text-blue-500 hover:underline">ページの先頭</a></p>
    </div>
  )
}
