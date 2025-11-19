"use client";

import React from "react";
import StardustLog from './StardustLog.jsx'


export default function LineArtPage() {
  return (
    <main className="min-h-screen flex flex-col pb-[clamp(4rem,8vw,6rem)]  text-[#1b1c1e]">
      {/* HERO */}
      <section className="w-[min(1340px,92vw)] mx-auto mt-[clamp(2rem,5vw,3.5rem)] mb-[clamp(2rem,5vw,3.5rem)] p-[clamp(2.5rem,6vw,4rem)] border-1 border-[#111] rounded-[clamp(24px,4vw,36px)] from-white/90 to-[#f7f5ef]/90 flex flex-col gap-[clamp(1.2rem,2vw,1.8rem)] text-center">
        <div className="inline-flex self-center px-6 py-2 border-1 border-[#111] rounded-full text-xs tracking-[0.32em] uppercase">
          STARDUST NOTE
        </div>
        <h2 className="text-[clamp(2.4rem,6vw,3.8rem)] font-bold ">별먼지 일기</h2>
        <p className="
          text-[clamp(1.05rem,2vw,1.25rem)]
          leading-[1.7]
          max-w-[80ch]
          mx-0 md:mx-auto
          text-left md:text-center
          break-all
        ">
          일상의 기록을 간결하고 명확하게 전달하는 콘텐츠 컬렉션입니다. <br />
          수시로 도출되는 새로운 아이디어와 인사이트를 체계적으로 정리해 제공하는 브랜드 저널입니다.
        </p>
      </section>

      {/* CATALOG */}
      <StardustLog />

      {/* COLLAB */}
      <section className="w-[min(960px,92vw)] mx-auto mt-[clamp(3rem,7vw,4.2rem)] p-[clamp(2.4rem,5vw,3.2rem)] border-2 border-[#111] rounded-[clamp(24px,4vw,32px)] bg-[#fff] shadow-[12px_12px_0_rgba(17,17,17,0.85)] flex flex-wrap gap-[clamp(1.5rem,3vw,2.5rem)] items-center justify-between">
        <div className="grid gap-3 max-w-[520px]">
          <h3 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold">연락을 기다립니다.</h3>
          <p className="text-base leading-[1.7]">
            디자이너, 개발자 협업 언제나 환영입니다. 
          </p>
        </div>

        <a
          href="https://www.instagram.com/direct/t/"
          target="_blank"
          rel="noreferrer noopener"
          className="px-6 py-3 rounded-full border-2 border-[#111] bg-[#111] text-[#f7f5ef] font-semibold tracking-[0.12em] uppercase transition-transform duration-300 hover:-translate-y-1"
        >
          DM으로 콜라보 제안하기
        </a>
      </section>
    </main>
  );
}