import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'

export default function Home() {
  const [directories, setDirectories] = useState([])

  useEffect(() => {
    // public/directory_list.json を取得
    fetch('/directory_list.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch directory list')
        }
        return response.json()
      })
      .then(data => {
        setDirectories(data || [])
      })
      .catch(error => {
        console.error('Error fetching directory list:', error)
      })
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <ul className="mt-4 space-y-2">
        {directories.length > 0 ? (
          directories.map(dir => (
            <li key={dir}>
              <Link
                to={`/viewer/${dir}`}
                className="text-blue-500 hover:underline"
              >
                {dir}
              </Link>
            </li>
          ))
        ) : (
          <p>ディレクトリ一覧を読み込み中...</p>
        )}
      </ul>
    </div>
  )
}