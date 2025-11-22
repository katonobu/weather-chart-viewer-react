import { Link } from '@tanstack/react-router'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <ul className="mt-4 space-y-2">
        <li><Link to="/viewer/dir1" className="text-blue-500 hover:underline">ディレクトリ1</Link></li>
        <li><Link to="/viewer/dir2" className="text-blue-500 hover:underline">ディレクトリ2</Link></li>
      </ul>
    </div>
  )
}