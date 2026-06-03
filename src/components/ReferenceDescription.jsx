import { Link } from '@tanstack/react-router'

export const ReferenceDescription = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <h1 className="text-2xl font-bold" id="出典情報">出典情報 </h1>
            <p><a href="https://www.jma.go.jp/jma/kishou/info/coment.html" className="text-blue-500 hover:underline">
                気象庁ホームページのコンテンツの利用について</a>に基づき、本サイトで引用している気象庁データの引用元URL及び加工方法詳細を記載します。
                <br></br>
                各ページの具体的な引用元情報、引用時刻等は各ページにある「本ページで参照しているデータの引用元情報」のリンクを参照してください。
            </p>
            <h1 className="text-2xl font-bold" id="短期予報解説資料">短期予報解説資料</h1>
            <ul className="list-disc text-wrap px-10">
                <li>
                    <p>短期予報解説資料</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/jma/kishou/know/expert/index.html" className="text-blue-500 hover:underline">
                            気象の専門家向け資料集</a>にある下記リンクよりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>短期予報解説資料 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/jishin/kaisetsu_tanki_latest.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>実況天気図（アジア太平洋域）</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.data.jma.go.jp/yoho/wxchart/quickdaily.html" className="text-blue-500 hover:underline">
                            過去の実況天気図（1日表示）</a> にあるリンク相当の下記URLからsvgデータを取得、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>実況天気図（アジア太平洋域 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/wxchart/quick/&#123;%Y%m&#125;/ASAS_MONO_&#123;%Y%m%D%H%m&#125;.svgz</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>レーダー画像</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/rain/" className="text-blue-500 hover:underline">
                                雨雲の動き(軽量版)
                            </a>
                            の雨雲画像データ、輪郭データを取得、重ね合わせたファイルを生成、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>雨雲画像 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/rain/data/rain/&#123;%Y%m%D%H&#125;0000/rain_&#123;%Y%m%D%H&#125;0000_f00_a00.png</code></li>
                                <li>輪郭データ <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/rain/const/map/border_a00.png</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>可視画像</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/map.html#5/34.5/137/&amp;elem=vis&amp;contents=himawari" className="text-blue-500 hover:underline">
                                気象衛星ひまわり
                            </a>
                            のタイルデータを取得、結合、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>取得URLの詳細は下記「ひまわり画像詳細」を参照。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>赤外画像</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/map.html#5/34.5/137/&amp;elem=ir&amp;contents=himawari" className="text-blue-500 hover:underline">
                                気象衛星ひまわり
                            </a>
                            のタイルデータを取得、結合、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>取得URLの詳細は下記「ひまわり画像詳細」を参照。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>水蒸気画像</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/map.html#5/34.5/137/&amp;elem=vap&amp;contents=himawari" className="text-blue-500 hover:underline">
                                気象衛星ひまわり
                            </a>
                            のタイルデータを取得、結合、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>取得URLの詳細は下記「ひまわり画像詳細」を参照。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>カラー画像</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/map.html#5/34.5/137/&amp;elem=color&amp;contents=himawari" className="text-blue-500 hover:underline">
                                気象衛星ひまわり
                            </a>
                            のタイルデータを取得、結合、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>取得URLの詳細は下記「ひまわり画像詳細」を参照。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>雲頂強調画像</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/map.html#5/34.5/135.022/&amp;elem=strengthen&amp;contents=himawari" className="text-blue-500 hover:underline">
                                気象衛星ひまわり
                            </a>
                            のタイルデータを取得、結合、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>取得URLの詳細は下記「ひまわり画像詳細」を参照。</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>アジア500hPa・300hPa高度・気温・風・等風速線天気図</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=upper" className="text-blue-500 hover:underline">
                                高層天気図
                            </a>
                            の<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                アジア500hPa・300hPa高度・気温・風・等風速線天気図(AUPQ35)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>AUPQ35 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/aupq35_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>アジア850hPa・700hPa高度・気温・風・湿数天気図</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=upper" className="text-blue-500 hover:underline">
                                高層天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                アジア850hPa・700hPa高度・気温・風・湿数天気図(AUPQ78)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>AUPQ35 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/aupq78_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>極東850hPa気温・風、700hPa上昇流／500hPa高度・渦度天気図</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=upper" className="text-blue-500 hover:underline">
                                高層天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                極東850hPa気温・風、700hPa上昇流／500hPa高度・渦度天気図(AXFE578)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>AXFE578 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/axfe578_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>高層断面図（風・気温・露点等）東経130度／140度解析</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=upper" className="text-blue-500 hover:underline">
                                高層天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                高層断面図（風・気温・露点等）東経130度／140度解析(AXJP130/AXJP140)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>AXJP130/AXJP140 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/axjp140_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>アジア太平洋域 24時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/weather_map/" className="text-blue-500 hover:underline">
                                天気図
                            </a>
                            記載の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                最新24時間予想図
                            </code>
                            リンクよりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>アジア太平洋域 24時間 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/wxchart/quick/FSAS24_MONO_ASIA.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>アジア太平洋域 48時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/weather_map/" className="text-blue-500 hover:underline">
                                天気図
                            </a>
                            記載の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                最新48時間予想図
                            </code>
                            リンクよりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>アジア太平洋域 48時間 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/wxchart/quick/FSAS48_MONO_ASIA.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>極東地上気圧・風・降水量／500hPa高度・渦度予想図 12・24時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                極東地上気圧・風・降水量／500hPa高度・渦度予想図 12・24時間(FXFE502)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FXFE502 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fxfe502_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>極東地上気圧・風・降水量／500hPa高度・渦度予想図 36・48時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                極東地上気圧・風・降水量／500hPa高度・渦度予想図 36・48時間(FXFE504)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FXFE504 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fxfe504_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>極東850hPa気温・風、700hPa上昇流／700hPa湿数、500hPa気温予想図 12・24時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                極東850hPa気温・風、700hPa上昇流／700hPa湿数、500hPa気温予想図 12・24時間(FXFE5782)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FXFE5782 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fxfe5782_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>極東850hPa気温・風、700hPa上昇流／700hPa湿数、500hPa気温予想図 36・48時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                極東850hPa気温・風、700hPa上昇流／700hPa湿数、500hPa気温予想図 36・48時間(FXFE5784)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FXFE5784 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fxfe5784_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>日本850hPa相当温位・風予想図 12・24・36・48時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                日本850hPa相当温位・風予想図 12・24・36・48時間(FXJP854)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FXJP854 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fxjp854_&#123;%Y%m%D%H&#125;0000.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <h2 className="text-2xl font-bold" id="ひまわり画像取得詳細">ひまわり画像取得詳細 </h2>
            <ul className="list-disc text-wrap px-10">
                <li>各画像種別毎に、日本周辺のタイル画像を取得。</li>
                <li>輪郭データと各画像データを重ね合わせたファイルを生成、表示。</li>
            </ul>
            <h3 className="text-xl font-bold" id="各画像毎のurl">各画像毎のURL </h3>
            <ul className="list-disc text-wrap px-10">
                <li>可視画像
                    <ul className="list-disc text-wrap px-10">
                        <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/himawari/data/satimg/&#123;utc_str&#125;/fd/&#123;utc_str&#125;/B03/ALBD/5/&#123;a&#125;/&#123;b&#125;.jpg</code></li>
                    </ul>
                </li>
                <li>赤外画像
                    <ul className="list-disc text-wrap px-10">
                        <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/himawari/data/satimg/&#123;utc_str&#125;/fd/&#123;utc_str&#125;/B13/TBB/5/&#123;a&#125;/&#123;b&#125;.jpg</code></li>
                    </ul>
                </li>
                <li>水蒸気画像
                    <ul className="list-disc text-wrap px-10">
                        <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/himawari/data/satimg/&#123;utc_str&#125;/fd/&#123;utc_str&#125;/B08/TBB/5/&#123;a&#125;/&#123;b&#125;.jpg</code></li>
                    </ul>
                </li>
                <li>カラー画像
                    <ul className="list-disc text-wrap px-10">
                        <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/himawari/data/satimg/&#123;utc_str&#125;/fd/&#123;utc_str&#125;/REP/ETC/5/&#123;a&#125;/&#123;b&#125;.jpg</code></li>
                    </ul>
                </li>
                <li>雲頂強調画像
                    <ul className="list-disc text-wrap px-10">
                        <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/himawari/data/satimg/&#123;utc_str&#125;/fd/&#123;utc_str&#125;/SND/ETC/5/&#123;a&#125;/&#123;b&#125;.jpg</code></li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-xl font-bold" id="輪郭データのurl">輪郭データのURL </h3>
            <ul className="list-disc text-wrap px-10">
                <li>全画像共通で用いる輪郭データ
                    <ul className="list-disc text-wrap px-10">
                        <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/tile/jma/sat/5/&#123;a&#125;/&#123;b&#125;.png</code></li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-xl font-bold" id="上記url記載中のパラメータ">上記URL記載中のパラメータ </h3>
            <ul className="list-disc text-wrap px-10">
                <li>utc_str : 観測時刻をUTCで "&#123;%Y%m%D%H%m&#125;0000" 形式の文字列</li>
                <li>a : 衛星画像のタイル座標X [25,...30]</li>
                <li>b : 衛星画像のタイル座標Y [11,...14]</li>
            </ul>
            <h1 className="text-2xl font-bold" id="週間天気予報解説資料">週間天気予報解説資料 </h1>
            <ul className="list-disc text-wrap px-10">
                <li>
                    <p>週間天気予報解説資料</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/jma/kishou/know/expert/index.html" className="text-blue-500 hover:underline">
                                気象の専門家向け資料集
                            </a>
                            にある下記リンクよりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>週間天気予報解説資料 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/jishin/kaisetsu_shukan_latest.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>週間予報支援図（アンサンブル）</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                週間予報支援図（アンサンブル）(FZCX50)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FZCX50 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fzcx50.png</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>週間予報支援図</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/numericmap/#type=nwp" className="text-blue-500 hover:underline">
                                数値予報天気図
                            </a>
                            の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                週間予報支援図(FXXN519)
                            </code>
                            よりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>FXXN519 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.jma.go.jp/bosai/numericmap/data/nwpmap/fxxn519.png</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>アジア太平洋域 24時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/weather_map/" className="text-blue-500 hover:underline">
                                天気図
                            </a>
                            記載の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                最新24時間予想図
                            </code>
                            リンクよりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>アジア太平洋域 24時間 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/wxchart/quick/FSAS24_MONO_ASIA.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>アジア太平洋域 48時間</p>
                    <ul className="list-disc text-wrap px-10">
                        <li><a href="https://www.jma.go.jp/bosai/weather_map/" className="text-blue-500 hover:underline">
                                天気図
                            </a>
                            記載の
                            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                                最新48時間予想図
                            </code>
                            リンクよりpdfデータ取得。svgデータを抽出、表示。
                            <ul className="list-disc text-wrap px-10">
                                <li>アジア太平洋域 48時間 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">https://www.data.jma.go.jp/yoho/data/wxchart/quick/FSAS48_MONO_ASIA.pdf</code></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <h1 className="text-2xl font-bold"id="表記の凡例">表記の凡例 </h1>
            <ul className="list-disc text-wrap px-10">
                <li>&#123;%Y%m%D%H%m&#125;はデータ観測年月日時分を示す</li>
                <li>&#123;%Y%m%D%H&#125;はデータ観測年月日時を示す</li>
                <li>&#123;%Y%m&#125;はデータ観測年月を示す</li>
            </ul>

        </div>

    )
}