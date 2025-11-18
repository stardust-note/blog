"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname(); // 페이지별로 분리해서 저장

  useEffect(() => {
    // 브라우저 기본 스크롤 복원 끄기
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const storageKey = `scroll:${pathname}`;

    // ✅ 첫 렌더 시 저장된 위치로 스크롤 복구
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      // DOM이 다 그려진 다음에 스크롤 이동
      requestAnimationFrame(() => {
        window.scrollTo(0, Number(saved));
      });
    }

    // ✅ 스크롤 이벤트에서 위치 저장
    const handleScroll = () => {
      localStorage.setItem(storageKey, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ 페이지 벗어나기 직전에 한 번 더 저장
    const handleBeforeUnload = () => {
      localStorage.setItem(storageKey, window.scrollY.toString());
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}
