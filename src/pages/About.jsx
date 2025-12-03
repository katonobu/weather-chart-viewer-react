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
            <h2 className="text-lg font-bold">参照データについて</h2>
            <ul className="list-disc text-wrap px-10">
                <li><a href="https://www.jma.go.jp/jma/kishou/know/expert/index.html">気象の専門家向け資料集</a>の各リンクよりデータを取得、抽出を基本としています。</li>
                <ul className="list-disc text-wrap px-10">
                    <li><a href="https://www.data.jma.go.jp/yoho/data/jishin/kaisetsu_tanki_latest.pdf">短期解説資料</a>からsvg,テキストを抽出</li>
                    <li><a href="https://www.data.jma.go.jp/yoho/data/jishin/kaisetsu_shukan_latest.pdf">週間予報解説資料</a>からsvgを抽出</li>
                    <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=upper">各高層天気図</a>からsvgを抽出</li>
                    <li><a href="https://www.jma.go.jp/bosai/numericmap/">数値予報図</a>からsvgを抽出</li>
                    <li><a href="https://www.jma.go.jp/bosai/nowc/">各画像データ</a>からタイルマップ画像を取得、外形画像と重ね合わせ隣接タイルを結合</li>
                </ul>
            </ul>
            <h2 className="text-lg font-bold">オープンソースライセンス</h2>
            <ul className="list-disc text-wrap px-10">
                <li>これから追記予定</li>
            </ul>
            <Footer></Footer>
        </div>

    );
}