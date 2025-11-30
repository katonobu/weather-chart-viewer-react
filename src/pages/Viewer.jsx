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
      <p>{metadata.released_at_j}</p>

      <h2 className="text-2xl font-bold">ページ内リンク</h2>
      <ul className="list-disc text-wrap px-10">
        {
          metadata.files.map(item => (
            <li key={item.id}><a href={`#${item.id}`} className="text-blue-500 hover:underline">{item.title}</a></li>
          ))
        }
      </ul>

      <h2 className="text-2xl font-bold">各画像</h2>
      {
        metadata.files.map(item => (
          <div key={`p-${item.id}`}>
            <p><a href="#top" className="text-blue-500 hover:underline">ページの先頭</a></p>
            <a 
              href={`/${dir}/${item.name}`}
              target="_blank"
              id={item.id}
              className="text-blue-500 hover:underline inline-flex items-center gap-1"
            >
              {item.title}
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
              </svg>
            </a>
            <img width="100%" height="auto" src={`/${dir}/${item.name}`} className="w-full h-auto border-2 border-black"></img>
          </div>
        ))
      }
      <p><a href="#top" className="text-blue-500 hover:underline">ページの先頭</a></p>
      <hr></hr>
      <h2 className="text-lg font-bold">データの出典</h2>
      <p>
        すべてのデータは
        <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
          気象庁
        </a>発表データです。
      </p>
    </div>
  )
}
