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
    text: "티끌 모아 태산",
    author: "공자",
  },
  {
    text: "절대 허송세월 하지마라. 책을 읽든지, 쓰든지, 기도를 하든지, 명상을 하든지, 또는 공익을 위해 노력하든지, 항상 뭔가를 해라.",
    author: "토마스 아 켐피스",
  },
  {
    text: "사람들은 인생이 모든 것이라고 말하지만 나는 독서가 좋다.",
    author: "로건 피어설 스미스",
  },
];

export default function WaveMarquee() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    wrapper.appendChild(clone1);
    wrapper.appendChild(clone2);

    const contentWidth = content.offsetWidth;

    const tween = gsap.to(wrapper, {
      x: -contentWidth,
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    tweenRef.current = tween;

    return () => gsap.killTweensOf(wrapper);
  }, []);

  // ✅ 마우스 오버/아웃 핸들러
  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

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
