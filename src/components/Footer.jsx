
export const Footer = () => (
  <>
    <hr></hr>
    <h2 className="text-lg font-bold">データの出典</h2>
    <p>
      すべてのデータは
      <a href="https://www.jma.go.jp/jma/index.html" className="text-blue-500 hover:underline">
        気象庁
      </a>発表データです。
    </p>
    <p className="text-xs">Build Time : {import.meta.env.VITE_BUILD_TIME}</p>
  </>      
)
