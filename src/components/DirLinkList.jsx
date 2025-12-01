import { Link } from '@tanstack/react-router'

export const DirLinkList = ({directories}) => {
  return (
    <ul className="list-disc text-wrap px-10">
    {directories.filter(dir => /^\d{8}_\d{4}$/.test(dir)).map((dir) => {
      // 年月日・時分を抽出
      const year = dir.slice(0, 4);
      const month = dir.slice(4, 6);
      const day = dir.slice(6, 8);
      const hour = dir.slice(9, 11);
      const min = dir.slice(11, 13);

      // タイムスタンプ文字列
      const timeStampStr = `${year}年${month}月${day}日 ${hour}時${min}分`;

      // タイトル判定
      let title;
      if (dir.endsWith("00")) {
          title = `${timeStampStr} 週間天気予報解説資料`;
      } else {
          title = `${timeStampStr} 短期予報解説資料`;
      }
      return (
        <li key={dir}>
          <Link
            to={`/viewer/${dir}`}
            className="text-blue-500 hover:underline"
          >
            {title}
          </Link>
        </li>
      )
    })}
    </ul>
  )
}
