"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRestoredRef = useRef(false);

  const pageKey = pathname + searchParams.toString();

  // 스크롤 저장
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem("scroll-" + pageKey, window.scrollY);
    };

    // Next.js <Link> 이동 시
    window.addEventListener("pagehide", saveScroll);

    // 브라우저 새로고침 시
    window.addEventListener("beforeunload", saveScroll);

    return () => {
      saveScroll();
      window.removeEventListener("pagehide", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, [pageKey]);

  // 스크롤 복원
  useEffect(() => {
    if (isRestoredRef.current) return;

    const saved = sessionStorage.getItem("scroll-" + pageKey);
    isRestoredRef.current = true;

    // hydration 후 한 프레임 뒤에 복원
    requestAnimationFrame(() => {
      if (saved !== null) {
        window.scrollTo(0, Number(saved));
      }
    });
  }, [pageKey]);

  return null;
}
