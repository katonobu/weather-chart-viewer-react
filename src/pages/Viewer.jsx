import { useEffect, useState } from 'react'
import { viewerRoute } from '../main'
import { useParams } from '@tanstack/react-router'

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
      <h1 className="text-2xl font-bold">{metadata.title}</h1>
      <p className="mb-4">{metadata.released_at_j}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metadata.files.map((item) => (
          <img key={item.id} src={`/${dir}/${item.name}`} className="rounded shadow" />
        ))}
      </div>
    </div>
  )
}
