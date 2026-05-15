const memoryCards = [
  {
    title: "오늘의 기억",
    description: "사진, 장소, 감정을 한 장의 기록으로 남겨보세요.",
  },
  {
    title: "가족 앨범",
    description: "함께한 순간을 시간순으로 모아 따뜻하게 보관합니다.",
  },
  {
    title: "기념일 타임라인",
    description: "생일, 여행, 졸업식 같은 특별한 날을 다시 꺼내봅니다.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-zinc-950">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between">
          <p className="text-lg font-bold">Digital Memory Book</p>
          <button className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800">
            새 기억 추가
          </button>
        </nav>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-amber-700">
              PRIVATE MEMORY ARCHIVE
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight tracking-normal sm:text-6xl">
              소중한 기억을 한 권의 디지털 책으로
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              사진, 글, 날짜, 장소를 모아 나만의 메모리북을 만들어보세요.
              가족과 친구, 그리고 다시 만나고 싶은 순간을 오래 보관할 수
              있습니다.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#f8fafc_0%,#e7e5e4_45%,#fde68a_100%)] p-5">
              <div className="flex h-full flex-col justify-between rounded-md border border-white/70 bg-white/75 p-5 backdrop-blur">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    2026.05.15
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">첫 번째 페이지</h2>
                </div>
                <p className="max-w-sm text-base leading-7 text-zinc-700">
                  오늘 만든 이 앱이 앞으로 많은 기억을 담는 책장이 됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-4 pb-8 md:grid-cols-3">
          {memoryCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="mt-3 leading-7 text-zinc-600">
                {card.description}
              </p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
