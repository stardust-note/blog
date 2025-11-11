// app/stardust-log/page.tsx
// Next.js (App Router) + Tailwind CSS
// 선화 감성 3번째 탭의 구조만 그대로 옮긴 페이지 컴포넌트입니다.
// - 섹션: Hero → Catalog(여섯 갈래) → Collaboration CTA
// - 텍스트는 원문을 최대한 유지했고, 시맨틱 태그와 접근성 고려(aria-label 등)를 추가했습니다.

import Link from "next/link";

export default function Page() {
  const tracks = [
    {
      no: "01",
      ko: "성간 여행일지",
      en: "Voyage Notes",
      desc:
        "행성의 궤도를 한 줄로 이어 붙인 여행 스케치.",
    },
    {
      no: "02",
      ko: "별빛 수집소",
      en: "Spectral Archive",
      desc:
        "프리즘을 통과한 빛을 선과 점으로 정리한 기록.",
    },
    {
      no: "03",
      ko: "시간층 탐사",
      en: "Chrono Layers",
      desc:
        "겹겹이 쌓인 시간을 레이어 선으로 정돈한 차트.",
    },
    {
      no: "04",
      ko: "감정 파동기록",
      en: "Pulse Sketch",
      desc:
        "감정 진동을 파형으로 남긴 데이터 라벨.",
    },
    {
      no: "05",
      ko: "은하수 정원",
      en: "Nebula Flora",
      desc:
        "유리 돔에 자라는 식물을 단선으로 묘사한 도감.",
    },
    {
      no: "06",
      ko: "신호 해석실",
      en: "Signal Lab",
      desc:
        "점과 선으로 연결한 먼 우주의 메시지 차트.",
    },
  ];

  return (
    <main className="min-h-dvh bg-white text-gray-900 selection:bg-gray-900 selection:text-white">
      {/* HERO */}
      <section id="hero" className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:py-24">
          <p className="text-xs tracking-widest uppercase text-gray-500">STARDUST LOG</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">별먼지 일기</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
            우주선 창가에서 스케치한 듯한 간결한 선으로 감성을 기록합니다.
          </p>
        </div>
      </section>

      {/* CATALOG INTRO */}
      <section id="catalog" aria-label="여섯 장의 선 드로잉 기록" className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
          <p className="text-xs tracking-widest uppercase text-gray-500">SIX TRACKS</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">여섯 장의 선 드로잉 기록</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
            복잡한 색을 덜어내고 핵심만 남긴 선으로 우주의 이야기를 정리했습니다.
          </p>

          {/* GRID: 6 CARDS */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((t) => (
              <article
                key={t.no}
                className="group relative rounded-2xl border border-gray-200 p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono tracking-widest text-gray-400">{t.no}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold">{t.ko}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{t.desc}</p>
                <p className="mt-6 text-xs tracking-wider text-gray-500">{t.en}</p>
                <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-[ring,transform] group-hover:ring-gray-300 group-hover:-translate-y-0.5" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COLLAB CTA */}
      <section id="collaboration" className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <p className="text-xs tracking-widest uppercase text-gray-500">STARDUST LOG</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">함께 남기는 단선 기록</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-700">
            간결한 선 위에 새로운 감각을 더할 창작자를 기다립니다. 스케치처럼 가벼운 제안도 환영해요.
          </p>
          <div className="mt-8">
            <Link
              href="https://www.instagram.com/direct/inbox/"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium hover:bg-white/60"
            >
              DM으로 콜라보 제안하기
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
