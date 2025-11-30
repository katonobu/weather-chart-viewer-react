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
      <h1 className="text-2xl font-bold">日付毎一覧</h1>
      <ul className="list-disc text-wrap px-10">
        {directories.length > 0 ? (
          directories.filter(dir => /^\d{8}_\d{4}$/.test(dir)).map(dir => {
            // 年月日・時分を抽出
            const year = dir.slice(0, 4);
            const month = dir.slice(4, 6);
            const day = dir.slice(6, 8);
            const hour = dir.slice(9, 11);
            const min = dir.slice(11, 13);

            // タイムスタンプ文字列
            const timeStampStr = `${year}年${month}月${day}日 ${hour}時${min}分`;

            // タイトル判定
            let title;
            if (dir.endsWith("00")) {
                title = `${timeStampStr} 週間天気予報解説資料`;
            } else {
                title = `${timeStampStr} 短期予報解説資料`;
            }
            return (
              <li key={dir}>
                <Link
                  to={`/viewer/${dir}`}
                  className="text-blue-500 hover:underline"
                >
                  {title}
                </Link>
              </li>
            )
          })
        ) : (
          <p>ディレクトリ一覧を読み込み中...</p>
        )}
      </ul>
      <hr></hr>
      <h2 className="text-lg font-bold">データの出典</h2>
      <p>
        すべてのデータは
        <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
          気象庁
        </a>発表データです。
      </p>
      <p className="text-xs">Build Time : {import.meta.env.VITE_BUILD_TIME}</p>
    </div>
  )
}
