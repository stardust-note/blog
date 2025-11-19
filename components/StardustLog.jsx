"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link"

const cards = [
  { index: "01", title: "2D 아트 모음 - 더보기", link: "/2d",summary: "이모티콘, 일러스트, 인스타툰 등 다양한 2D 그림을 저장한 공간입니다.", tag: "Collection of 2D Illustrations" },
  { index: "02", title: "3D 아트 모음 - 더보기", link: "/3d",summary: "블렌더로 만드는 3D 아트 모음 공간입니다.", tag: "3D Artwork Collection" },
  { index: "03", title: "Pixel 아트 모음 - 더보기", link: "/pixel",summary: "Aseprite로 만드는 픽셀 아트 모음 공간입니다.", tag: "Pixel Artwork Collection" },
  { index: "04", title: "그림 학습 - 더보기", link: "/artstudy",summary: "그림 관련 학습에 대한 모음 공간입니다.", tag: "Art Study" },
  { index: "05", title: "개인 일지 - 더보기", link: "/notes", summary: "일상생활에서 떠오른 이야기 모음 공간입니다.", tag: "Notes" },
  { index: "06", title: "프론트개발 기술 모음 - 더보기", link: "/frontend", summary: "React로 만드는 프론트 개발 공간입니다.", tag: "Front End" },
  { index: "07", title: "인터렉션 웹 기술 모음 - 더보기", link: "/motion", summary: "인터렉션 웹을 다루는 공간입니다.", tag: "Motion Web" },
  { index: "08", title: "앱개발 기술 - 더보기", link: "/app", summary: "앱개발을 다루는 공간입니다.", tag: "App Develop" },
  { index: "09", title: "게임 개발 기술 모음 - 더보기", link: "/game", summary: "HTML5로 Game을 만드는 공간입니다.", tag: "Game Develop" },
  { index: "10", title: "백엔드개발 기술 모음 - 더보기", link: "/backend", summary: "Node.js와 Express, DB를 공부하는 공간입니다.", tag: "Back End" },
];

gsap.registerPlugin(ScrollTrigger);

export default function StardustLog() {
  const pinSectionRef = useRef(null);
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const triggers = useRef([]); // ⭐ 자신이 만든 ScrollTrigger만 관리하는 배열


  /* -------------------------------------------------
   * GSAP 가로 스크롤 + 카드 효과 (반응형)
   * ------------------------------------------------- */
  const initGsap = useCallback(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // ⭐ 이전에 만든 Trigger만 제거
    triggers.current.forEach((st) => st.kill());
    triggers.current = [];

    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("height");

    // 모바일은 가로스크롤 비활성화
    if (isMobile) return;

    const pinSection = pinSectionRef.current;
    const scroll = scrollRef.current;
    const items = cardRefs.current;

    if (!pinSection || !scroll) return;

    const totalScrollWidth = scroll.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollDistance = totalScrollWidth - windowWidth;

    /* ------------------------------
     * 가로 스크롤
     * ---------------------------- */
    const scrollTween = gsap.to(scroll, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: pinSection,
        start: "top top",
        end: () => `+=${scrollDistance * 6}`,
        scrub: 1,
        pin: true,
      },
    });

    triggers.current.push(scrollTween.scrollTrigger);

    /* ------------------------------
     * 카드 패럴랙스
     * ---------------------------- */
    items.forEach((card, index) => {
      const tween = gsap.to(card, {
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          start: "top top",
          end: () => `+=${scrollDistance * 10}`,
          scrub: 1,
        },
      });

      triggers.current.push(tween.scrollTrigger);
    });

    ScrollTrigger.refresh();
  }, []);


  /* -------------------------------------------------
   * mount + resize 반응형
   * ------------------------------------------------- */
  useEffect(() => {
    initGsap();

    const resizeHandler = () => initGsap();

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("orientationchange", resizeHandler);

    const mq = window.matchMedia("(max-width: 768px)");
    mq.addEventListener("change", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("orientationchange", resizeHandler);
      mq.removeEventListener("change", resizeHandler);

      // ⭐ 자신이 만든 Trigger만 제거
      triggers.current.forEach((st) => st.kill());
      triggers.current = [];
    };
  }, [initGsap]);


  /* -------------------------------------------------
   * JSX
   * ------------------------------------------------- */
  return (
    <main className="min-h-screen border-t border-b border-black text-[#1b1c1e] overflow-x-hidden">

      <section
        ref={pinSectionRef}
        className="
          w-full flex flex-col justify-center
          md:min-h-[100vh]
          overflow-x-hidden
        "
      >
        <header className="mb-12 w-[min(1340px,94vw)] mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase">TRACKS</span>
          <h3 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold mt-[1ch]">
            카테고리 셀렉션
          </h3>
          <p className="text-base leading-[1.7] mt-[3ch] max-w-[60ch]">
            디자인과 개발 기술과 관련된 기록들을 카테고리별로 정리해 모았습니다.
          </p>
        </header>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="
            flex flex-col md:flex-row
            w-full md:w-auto 
            overflow-visible
            gap-[clamp(1.5rem,3vw,2.2rem)]
            px-[15vw]
          "
        >
          {cards.map((card, i) => (
              <article
                key={card.index}
                ref={(el) => (cardRefs.current[i] = el)}
                className="relative w-full md:w-[360px] md:shrink-0"
              >
                {/* Shadow layer */}
                <div
                  className="
                    absolute top-2 left-2 
                    w-full h-full 
                    rounded-[22px]
                    bg-[rgba(17,17,17,0.85)]
                    -z-10
                    hidden md:block
                  "
                />

                {/* Link wrapper */}
                <Link
                  href={card.link} // 👉 Next.js 라우팅
                  className="
                    bg-[#fff] border-2 border-[#111] rounded-[22px] h-[300px]
                    p-6 grid gap-4 relative z-10
                    transition-transform duration-300
                    hover:-translate-x-1 hover:-translate-y-1
                    block
                  "
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm tracking-[0.28em] uppercase font-semibold">
                      {card.index}
                    </span>
                    <span
                      className="flex-1 h-[2px] bg-[repeating-linear-gradient(
                        90deg,#111_0,#111_8px,transparent_8px,transparent_14px
                      )]"
                    ></span>
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                  </div>

                  <p className="text-[0.98rem] leading-[1.6]">{card.summary}</p>
                  <span className="text-[0.75rem] tracking-[0.24em] uppercase">
                    {card.tag}
                  </span>
                </Link>
              </article>
          ))}
        </div>
      </section>

    </main>
  );
}
