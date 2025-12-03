import { useEffect, useRef, useState } from "react";

export const useFooterHeight = ()=>{
  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(130);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
        console.log(footerRef.current.offsetHeight)
      } else {
        console.log("Not updated")
      }
    };

    // 初期レンダリング直後に高さを取得
    requestAnimationFrame(updateHeight);

    // ウィンドウサイズ変更時にも再計算
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return {footerRef, footerHeight}
}