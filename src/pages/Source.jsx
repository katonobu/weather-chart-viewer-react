import { sourceRoute } from '../main'
import { useParams } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { useFooterHeight } from '../hooks/useFooterHeight'
import { ToListPage } from '../components/ToListPage'
import { SourceDescription } from '../components/SourceDescription'
import { Footer } from '../components/Footer'
import { useFetchMetaDataDetail } from '../hooks/useFetchMetaDataDetail'

const ToSpecifiedPage = ({ metadata }) => {
    return (
        <Link
            to={`/viewer/${metadata.id}`}
            className="text-blue-500 hover:underline"
        >{metadata.title} {metadata.released_at_j}ページへ
        </Link>
    )
}

export default function Reference() {
    const { dir } = useParams({ from: sourceRoute.id })
    const {
        footerRef,
        footerHeight
    } = useFooterHeight()

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

    return (
        <div>
            <div
                className="p-4"
                style={{ paddingBottom: footerHeight }}
            >
                <ToListPage id="top"></ToListPage>
                <br></br>
                <ToSpecifiedPage metadata={metadata}></ToSpecifiedPage>
                <SourceDescription metadata={metadata}></SourceDescription>
                <ToSpecifiedPage metadata={metadata}></ToSpecifiedPage>
            </div>
            <div
                ref={footerRef}
                className="fixed bottom-0 w-full bg-white p-4">
                <Footer></Footer>
            </div>
        </div>
    );
}