"use client";

import React from "react";
import StardustLog from './StardustLog.jsx'


export default function LineArtPage() {
  return (
    <main className="min-h-screen flex flex-col gap-[clamp(2rem,4vw,3rem)] pb-[clamp(4rem,8vw,6rem)] bg-[#f7f5ef] text-[#1b1c1e]">
      {/* HERO */}
      <section className="w-[min(960px,92vw)] mx-auto mt-[clamp(2rem,5vw,3.5rem)] p-[clamp(2.5rem,6vw,4rem)] border-2 border-[#111] rounded-[clamp(24px,4vw,36px)] bg-gradient-to-br from-white/90 to-[#f7f5ef]/90 shadow-[12px_12px_0_#111] flex flex-col gap-[clamp(1.2rem,2vw,1.8rem)] text-center">
        <div className="inline-flex self-center px-6 py-2 border-2 border-[#111] rounded-full text-xs tracking-[0.32em] uppercase">
          STARDUST LOG
        </div>
        <h2 className="text-[clamp(2.4rem,6vw,3.8rem)] font-bold tracking-[0.18em]">별먼지 일기</h2>
        <p className="text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.7] max-w-[54ch] mx-auto">
          우주선 창가에서 스케치한 듯한 간결한 선으로 감성을 기록합니다.
        </p>
      </section>

      {/* CATALOG */}
        <StardustLog />

        {/* mobile일때 */}
      {/* <section className="w-[min(1024px,94vw)] mx-auto mt-[clamp(3rem,6vw,4rem)] grid gap-[clamp(2rem,4vw,3rem)]">
        <header className="grid gap-3 border-l-2 border-[#111] pl-[clamp(1.5rem,4vw,2.4rem)]">
          <span className="text-xs tracking-[0.3em] uppercase">SIX TRACKS</span>
          <h3 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold">여섯 장의 선 드로잉 기록</h3>
          <p className="text-base leading-[1.7] max-w-[60ch]">
            복잡한 색을 덜어내고 핵심만 남긴 선으로 우주의 이야기를 정리했습니다.
          </p>
        </header>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(1.5rem,3vw,2.2rem)] relative isolate">
          {cards.map((card) => (
          <article key={card.index} className="relative">
            <div
                className="
                absolute top-2 left-2 
                w-full h-full 
                rounded-[22px] 
                bg-[rgba(17,17,17,0.85)]
                -z-10
                "
            />

            <div
                className="
                bg-[#fefdf9] border-2 border-[#111] rounded-[22px]
                p-[clamp(1.6rem,3.5vw,2.4rem)] grid gap-4
                transition-transform duration-300
                hover:-translate-x-1 hover:-translate-y-1
                relative z-10
                "
            >
                <div className="flex items-center gap-3">
                <span className="text-sm tracking-[0.28em] uppercase font-semibold">
                    {card.index}
                </span>
                <span className="flex-1 h-[2px] bg-[repeating-linear-gradient(90deg,#111_0,#111_8px,transparent_8px,transparent_14px)]"></span>
                <h4 className="font-semibold text-lg">{card.title}</h4>
                </div>

                <p className="text-[0.98rem] leading-[1.6]">{card.summary}</p>
                <span className="text-[0.75rem] tracking-[0.24em] uppercase">
                {card.tag}
                </span>
            </div>
            </article>
          ))}
        </div>
      </section> */}

      {/* COLLAB */}
      <section className="w-[min(960px,92vw)] mx-auto mt-[clamp(3rem,7vw,4.2rem)] p-[clamp(2.4rem,5vw,3.2rem)] border-2 border-[#111] rounded-[clamp(24px,4vw,32px)] bg-[#fefdf9] shadow-[12px_12px_0_rgba(17,17,17,0.85)] flex flex-wrap gap-[clamp(1.5rem,3vw,2.5rem)] items-center justify-between">
        <div className="grid gap-3 max-w-[520px]">
          <h3 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold">함께 남기는 단선 기록</h3>
          <p className="text-base leading-[1.7]">
            간결한 선 위에 새로운 감각을 더할 창작자를 기다립니다. 스케치처럼
            가벼운 제안도 환영해요.
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

const cards = [
  {
    index: "01",
    title: "성간 여행일지",
    summary: "행성의 궤도를 한 줄로 이어 붙인 여행 스케치.",
    tag: "Voyage Notes",
  },
  {
    index: "02",
    title: "별빛 수집소",
    summary: "프리즘을 통과한 빛을 선과 점으로 정리한 기록.",
    tag: "Spectral Archive",
  },
  {
    index: "03",
    title: "시간층 탐사",
    summary: "겹겹이 쌓인 시간을 레이어 선으로 정돈한 차트.",
    tag: "Chrono Layers",
  },
  {
    index: "04",
    title: "감정 파동기록",
    summary: "감정 진동을 파형으로 남긴 데이터 라벨.",
    tag: "Pulse Sketch",
  },
  {
    index: "05",
    title: "은하수 정원",
    summary: "유리 돔에 자라는 식물을 단선으로 묘사한 도감.",
    tag: "Nebula Flora",
  },
  {
    index: "06",
    title: "신호 해석실",
    summary: "점과 선으로 연결한 먼 우주의 메시지 차트.",
    tag: "Signal Lab",
  },
];