import { Link } from '@tanstack/react-router'
import { Footer } from '../components/Footer'

export default function About() {
    return (
        <div className="p-4">
            <Link
                id="top"
                to={`/`}
                className="text-blue-500 hover:underline"
            >日付毎一覧ページへ
            </Link>

            <h1 className="text-2xl font-bold">このページについて</h1>
            <h2 className="text-lg font-bold">オープンソースライセンス</h2>
            <ul className="list-disc text-wrap px-10">
                <li>これから追記予定</li>
            </ul>
            <Footer></Footer>
        </div>

    );
}