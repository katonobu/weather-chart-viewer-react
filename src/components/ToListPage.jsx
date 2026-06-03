import { Link } from '@tanstack/react-router'

export function ToListPage() {
    return (
        <Link
            to={`/`}
            className="text-blue-500 hover:underline"
        >
            日付毎一覧ページへ
        </Link>
    )
}
