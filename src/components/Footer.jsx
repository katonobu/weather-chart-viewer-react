import { Link } from '@tanstack/react-router'
import { isTankiYohou } from '../hooks/useFetchKaisetsuData'
import { TextToSpeechCtrl } from '../components/TextToSpeechCtrl'

export const Footer = ({ metadata, kaisetsu, kaisetsuLoading }) => (
  <>
    <hr></hr>
    {isTankiYohou(metadata) ? <TextToSpeechCtrl texts={kaisetsu} loading={kaisetsuLoading}></TextToSpeechCtrl> : null}
    <hr></hr>
    <p className="text-sm">
      <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
      気象庁ホームページ
      </a>のデータを加工して作成。
      引用元URL、加工内容の詳細は、
      <Link
        to={`/reference`}
        className="text-sm text-blue-500 hover:underline"
      >
        こちら
      </Link>
    </p>
    <Link
      to={`/about`}
      className="text-sm text-blue-500 hover:underline"
    >
      このページについて
    </Link>
    <p className="text-xs">© {new Date().getFullYear()} katonobu. All rights reserved. Build at {import.meta.env.VITE_BUILD_TIME}</p>
  </>
)
