"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const QUOTES = [
  {
    text: "삶은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.",
    author: "알베르트 아인슈타인",
  },
  {
    text: "내일 죽을 것처럼 살아라. 영원히 살 것처럼 배워라.",
    author: "스티브 잡스",
  },
  {
    text: "행동이 모든 성공의 기초다.",
    author: "파블로 피카소",
  },
  {
    text: "네가 세상에서 보고 싶은 변화가 되어라.",
    author: "마하트마 간디",
  },
  {
    text: "어둠은 어둠을 몰아낼 수 없다. 오직 빛만이 그럴 수 있다.",
    author: "마틴 루터 킹 주니어",
  },
];

export default function WaveMarquee() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    // 콘텐츠 클론 2개 생성
    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    wrapper.appendChild(clone1);
    wrapper.appendChild(clone2);

    const contentWidth = content.offsetWidth;

    gsap.to(wrapper, {
      x: -contentWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    return () => gsap.killTweensOf(wrapper);
  }, []);

  return (
    <div className="relative flex-1 min-w-0 overflow-hidden h-full">
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
