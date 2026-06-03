import { useCallback, useState } from "react";

export const useFooterHeight = ()=>{
  const [footerHeight, setFooterHeight] = useState(0);

  const footerRef = useCallback((node) => {
    if (node) {
      const observer = new ResizeObserver(([entry]) => {
        console.log(`val = ${entry.contentRect.height}`);
        if (0 < entry.contentRect.height) {
          const style = getComputedStyle(node);

          const pt = parseFloat(style.paddingTop);
          const pb = parseFloat(style.paddingBottom);

          const fullHeight = entry.contentRect.height + pt + pb;

          console.log(`Update to ${fullHeight} = ${entry.contentRect.height} + ${pt} + ${pb}`);
          setFooterHeight(fullHeight)
        }
      });
      observer.observe(node);
    }
    return
  }, []);

  return {footerRef, footerHeight}
}