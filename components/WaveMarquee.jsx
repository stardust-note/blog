"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const QUOTES = [
  { text: "삶은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.", author: "알베르트 아인슈타인" },
  { text: "내일 죽을 것처럼 살아라. 영원히 살 것처럼 배워라.", author: "스티브 잡스" },
  { text: "행동이 모든 성공의 기초다.", author: "파블로 피카소" },
  { text: "네가 세상에서 보고 싶은 변화가 되어라.", author: "마하트마 간디" },
  { text: "티끌 모아 태산", author: "공자" },
  { text: "절대 허송세월 하지마라. 항상 뭔가를 해라.", author: "토마스 아 켐피스" },
  { text: "사람들은 인생이 모든 것이라고 말하지만 나는 독서가 좋다.", author: "로건 피어설 스미스" },
];

export default function WaveMarquee() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const clonesRef = useRef([]); // 클론 추적
  const tweenRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    // ✔ 기존 clone 제거 (중복 생성 방지)
    clonesRef.current.forEach((c) => c.remove());
    clonesRef.current = [];

    // ✔ contentWidth는 브라우저가 완전히 그린 후 계산
    const contentWidth = content.offsetWidth;

    if (contentWidth === 0) return; // 안전장치

    // ✔ clone 2개 생성 (무한 루프)
    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    wrapper.appendChild(clone1);
    wrapper.appendChild(clone2);

    clonesRef.current.push(clone1, clone2);

    // ✔ GSAP 무한 롤링 Tween
    tweenRef.current = gsap.to(wrapper, {
      x: -contentWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    return () => {
      // ✔ cleanup — tween 제거
      tweenRef.current?.kill();
      tweenRef.current = null;

      // ✔ cleanup — clone 제거
      clonesRef.current.forEach((c) => c.remove());
      clonesRef.current = [];

      // ✔ wrapper transform 초기화
      if (wrapper) gsap.set(wrapper, { x: 0 });
    };
  }, []);

  // Hover 이벤트
  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <div
      className="relative flex-1 min-w-0 overflow-hidden h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={wrapperRef} className="flex h-full items-center">
        <div ref={contentRef} className="flex shrink-0 whitespace-nowrap">
          <span className="px-4 flex items-center gap-6">
            {QUOTES.map((q, i) => (
              <span key={i} className="mr-6">
                “{q.text}” — {q.author}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
