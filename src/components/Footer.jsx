import { Link } from '@tanstack/react-router'
import { isTankiYohou } from '../hooks/useFetchKaisetsuData'
import { TextToSpeechCtrl } from '../components/TextToSpeechCtrl'

export const Footer = ({ metadata, kaisetsu, kaisetsuLoading }) => {
  const envTarget = import.meta.env.VITE_ENV;
  const envTargetStr = envTarget==="prd"?"":(envTarget==="stg"?"ステージング環境用":"開発環境用")
  return (
    <>
      <hr></hr>
      {isTankiYohou(metadata) ? <TextToSpeechCtrl texts={kaisetsu} loading={kaisetsuLoading}></TextToSpeechCtrl> : null}
      <hr></hr>
      <p className="text-sm">
        <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
        気象庁ホームページ
        </a>のデータを加工して作成。
        本サイトで引用している気象庁データの引用元URL及び加工方法詳細
        <Link
          to={`/reference`}
          className="text-sm text-blue-500 hover:underline"
        >
          こちら
        </Link>。
        <br></br>
        各ページの具体的な引用元情報、引用時刻等は各ページにある「本ページで参照しているデータの引用元情報」のリンクを参照してください。
      </p>
      <Link
        to={`/about`}
        className="text-sm text-blue-500 hover:underline"
      >
        このページについて
      </Link>
      <p className="text-xs">© {new Date().getFullYear()} katonobu. All rights reserved. Build at {import.meta.env.VITE_BUILD_TIME} {envTargetStr}</p>
    </>
  )
}
