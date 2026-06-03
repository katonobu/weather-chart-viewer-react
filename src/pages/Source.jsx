import { sourceRoute } from '../main'
import { useParams } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Footer } from '../components/Footer'
import { useFetchMetaDataDetail } from '../hooks/useFetchMetaDataDetail'

export default function Reference() {
    const { dir } = useParams({ from: sourceRoute.id })
    const {
        metadata,
        loading
    } = useFetchMetaDataDetail(dir)

    if (loading) return <p className="p-4">読み込み中...</p>
    if (!metadata) return (
        <div className="p-4">
            データがありません。
            <Link
                to={`/viewer/${dir}`}
                className="text-blue-500 hover:underline"
            >元のページへ
            </Link>。
        </div>
    )

    // 環境変数 VITE_CONTENTS_PATH を参照
    const contentsPath = import.meta.env.VITE_CONTENTS_PATH || "/"
    return (
        <div className="p-4">
            <Link
                id="top"
                to={`/`}
                className="text-blue-500 hover:underline"
            >日付毎一覧ページへ
            </Link>
            <br></br>
            <Link
                to={`/viewer/${metadata.id}`}
                className="text-blue-500 hover:underline"
            >{metadata.title} {metadata.released_at_j}ページへ
            </Link>


            <h1 className="text-2xl font-bold">データ引用元情報</h1>
            <p><a href="https://www.jma.go.jp/jma/kishou/info/coment.html" className="text-blue-500 hover:underline">気象庁ホームページのコンテンツの利用について</a>に基づき、
            {metadata.title} {metadata.released_at_j}で用いている各気象庁データの引用元URLを記載します。</p>
            <h2 className="text-xl font-bold">ページ内リンク</h2>
                <ul className="list-disc text-wrap px-10">
                {
                    metadata.files.map(item => (
                    <li key={item.id}><a href={`#${item.id}`} className="text-blue-500 hover:underline">{item.title}</a></li>
                    ))
                }
                </ul>

            <h2 className="text-xl font-bold">各資料の引用元/時刻</h2>
            {
                metadata.files.map(item => (
                    <div key={`p-${item.id}`}>
                    <h3 className="text-l font-bold" id={item.id}>{item.title}</h3>
                    <ul className="list-disc text-wrap px-10">
                        <li>ダウンロード時刻(UTC) : {item.download_at}</li>
                        <li>ダウンロード元URL</li>
                        <ul className="list-disc text-wrap px-10">
                        {
                            item.urls.map( url => (
                                <li key={url}><a href={url} className="text-blue-500 hover:underline">{url}</a></li>
                            ))
                        }
                        </ul>
                    </ul>
                    <p><a href="#top" className="text-blue-500 hover:underline">ページの先頭</a></p>
                    </div>
                ))
            }
            <Link
                to={`/viewer/${metadata.id}`}
                className="text-blue-500 hover:underline"
            >{metadata.title} {metadata.released_at_j}ページへ
            </Link>
            <Footer></Footer>
        </div>

    );
}