import { isTankiYohou } from '../components/useFetchKaisetsuData'
import { TextToSpeechCtrl } from '../components/TextToSpeechCtrl'

export const Footer = ({metadata, kaisetsu, kaisetsuLoading}) => (
  <>
    <hr></hr>
    {isTankiYohou(metadata) ? <TextToSpeechCtrl texts={kaisetsu} loading={kaisetsuLoading}></TextToSpeechCtrl> : null}
    <hr></hr>
    <p className="text-sm">
      データの出典:すべてのデータは
      <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
        気象庁
      </a>発表データです。
    </p>
    <p className="text-xs">Build Time : {import.meta.env.VITE_BUILD_TIME}</p>
  </>      
)
