"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WaveMarquee() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;

    // 콘텐츠를 2개 복제 (빈 공간 방지)
    const clone1 = content.cloneNode(true);
    const clone2 = content.cloneNode(true);
    wrapper.appendChild(clone1);
    wrapper.appendChild(clone2);

    const contentWidth = content.offsetWidth;

    // 자연스러운 무한 루프
    gsap.to(wrapper, {
      x: -contentWidth,
      duration: 25, // 속도 조절 (작을수록 빠름)
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % contentWidth),
      },
    });

    return () => gsap.killTweensOf(wrapper);
  }, []);

  return (
    // ✅ overflow-hidden은 오직 이 div 하나에만
    <div className="relative flex-1 min-w-0 overflow-hidden">
      <div ref={wrapperRef} className="flex">
        <div ref={contentRef} className="flex shrink-0 whitespace-nowrap">
          <span className="px-4">
            🌊 wave 내용이 들어갑니다 wave 내용이 들어갑니다 wave 내용이 들어갑니다 wave 내용이 들어갑니다 wave 내용이 들어갑니다 wave 내용이 들어갑니다
          </span>
        </div>
      </div>
    </div>
  );
}
