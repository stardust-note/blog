"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  { index: "01", title: "성간 여행일지", summary: "행성의 궤도를 한 줄로 이어 붙인 여행 스케치.", tag: "Voyage Notes" },
  { index: "02", title: "별빛 수집소", summary: "프리즘을 통과한 빛을 선과 점으로 정리한 기록.", tag: "Spectral Archive" },
  { index: "03", title: "시간층 탐사", summary: "겹겹이 쌓인 시간을 레이어 선으로 정돈한 차트.", tag: "Chrono Layers" },
  { index: "04", title: "감정 파동기록", summary: "감정 진동을 파형으로 남긴 데이터 라벨.", tag: "Pulse Sketch" },
  { index: "05", title: "은하수 정원", summary: "유리 돔에 자라는 식물을 단선으로 묘사한 도감.", tag: "Nebula Flora" },
  { index: "06", title: "신호 해석실", summary: "점과 선으로 연결한 먼 우주의 메시지 차트.", tag: "Signal Lab" },
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
        end: () => `+=${scrollDistance * 12}`,
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
        y: index % 2 === 0 ? -40 : -20,
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          start: "top top",
          end: () => `+=${scrollDistance * 5}`,
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
    <main className="min-h-screen bg-[#f7f5ef] text-[#1b1c1e] overflow-x-hidden">

      <section
        ref={pinSectionRef}
        className="
          w-full flex flex-col justify-center
          md:min-h-[100vh]
          overflow-x-hidden
        "
      >
        <header className="mb-12 w-[min(1024px,94vw)] mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase">SIX TRACKS</span>
          <h3 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold">
            여섯 장의 선 드로잉 기록
          </h3>
          <p className="text-base leading-[1.7] max-w-[60ch]">
            복잡한 색을 덜어내고 핵심만 남긴 선으로 우주의 이야기를 정리했습니다.
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
            px-[10vw]
          "
        >
          {cards.map((card, i) => (
            <article
              key={card.index}
              ref={(el) => (cardRefs.current[i] = el)}
              className="relative w-full md:w-[300px] md:shrink-0"
            >
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

              <div
                className="
                  bg-[#fefdf9] border-2 border-[#111] rounded-[22px]
                  p-6 grid gap-4 relative z-10
                  transition-transform duration-300
                  hover:-translate-x-1 hover:-translate-y-1
                "
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm tracking-[0.28em] uppercase font-semibold">
                    {card.index}
                  </span>
                  <span className="flex-1 h-[2px] bg-[repeating-linear-gradient(
                    90deg,#111_0,#111_8px,transparent_8px,transparent_14px
                  )]"></span>
                  <h4 className="font-semibold text-lg">{card.title}</h4>
                </div>

                <p className="text-[0.98rem] leading-[1.6]">{card.summary}</p>
                <span className="text-[0.75rem] tracking-[0.24em] uppercase">{card.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}
