import { Link } from '@tanstack/react-router'

export const SourceDescription = ({ metadata}) => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">データ引用元情報</h1>

            <p><a href="https://www.jma.go.jp/jma/kishou/info/coment.html" className="text-blue-500 hover:underline">
                    気象庁ホームページのコンテンツの利用について
                </a>
                に基づき、
                <br></br>
                {metadata.title} {metadata.released_at_j}で用いている各気象庁データの引用元URLを記載します。
            </p>

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
        </div>
    )

}
