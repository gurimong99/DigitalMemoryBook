"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const servicePackages = [
  {
    id: "memory",
    label: "디지털 추모관",
    price: "월 9,900원부터",
    description: "사진, 영상, 음성, 추억 글을 가족 단위로 보관합니다.",
    features: ["고인 프로필", "사진/영상 아카이브", "추모글 방명록"],
  },
  {
    id: "ritual",
    label: "49제·기제사 예약",
    price: "상담 후 견적",
    description: "지역 제휴 업체와 연결해 제사 준비 부담을 줄입니다.",
    features: ["제사상 차림", "현장 지원", "지역 파트너 매칭"],
  },
  {
    id: "premium",
    label: "프리미엄 추모 콘텐츠",
    price: "패키지 29만원부터",
    description: "영상 편집, 음성 기록, 스토리텔링으로 기억을 완성합니다.",
    features: ["추모 영상", "디지털북", "플라워 오브제"],
  },
] as const;

const operationPlan = [
  { period: "3-4월", title: "기반 다지기", detail: "SNS 콘텐츠 30개, 예시 추모관 10개, 오프라인 제휴 5곳" },
  { period: "5-6월", title: "확장 및 이벤트", detail: "봄맞이 추모 콘텐츠 캠페인과 고객 후기 공모" },
  { period: "7-8월", title: "구독 안정화", detail: "월 구독 모델 출시와 시즌 기념 콘텐츠 큐레이션" },
];

const partners = ["사찰", "전통 장례식장", "상조회사", "플로리스트", "사진관"];

export default function Home() {
  const [selectedPackage, setSelectedPackage] =
    useState<(typeof servicePackages)[number]["id"]>("ritual");
  const [region, setRegion] = useState("서울·수도권");
  const [ritualDate, setRitualDate] = useState("49제");

  const activePackage = useMemo(
    () => servicePackages.find((item) => item.id === selectedPackage)!,
    [selectedPackage],
  );

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-stone-950">
      <section className="relative min-h-[720px] overflow-hidden bg-stone-950 text-white">
        <Image
          src="/images/memorial-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,25,23,0.92)_0%,rgba(28,25,23,0.68)_42%,rgba(28,25,23,0.16)_100%)]" />

        <div className="relative mx-auto flex min-h-[720px] w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold">복순네</p>
              <p className="text-xs font-semibold text-stone-300">
                Digital Memorial Platform
              </p>
            </div>
            <button className="rounded-md bg-white px-4 py-2 text-sm font-bold text-stone-950 transition hover:bg-amber-100">
              상담 예약
            </button>
          </nav>

          <div className="flex flex-1 items-center py-16">
            <div className="max-w-3xl">
              <p className="text-sm font-bold text-amber-200">
                49제부터 디지털 추모관까지
              </p>
              <h1 className="mt-5 text-5xl font-bold leading-tight tracking-normal sm:text-6xl lg:text-7xl">
                사랑의 기억을 따뜻하게 담아드립니다.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-100">
                복순네는 고인의 사진, 영상, 음성을 보관하는 추모관과
                49제·기제사 준비를 온라인에서 연결하는 원스톱 추모
                플랫폼입니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-md bg-amber-300 px-5 py-3 text-base font-bold text-stone-950 transition hover:bg-amber-200">
                  추모관 만들기
                </button>
                <button className="rounded-md border border-white/60 px-5 py-3 text-base font-bold text-white transition hover:bg-white/10">
                  49제 예약 문의
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-3 pb-5 md:grid-cols-3">
            {["월 구독·영구 보관", "제사 대행 중개", "AI 추모 콘텐츠"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-sm font-semibold text-stone-200">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <p className="text-sm font-bold text-amber-800">CORE SERVICES</p>
          <h2 className="mt-3 text-4xl font-bold tracking-normal">
            필요한 추모 절차를 한 화면에서 선택하세요
          </h2>
          <p className="mt-4 leading-7 text-stone-600">
            보고서의 수익 모델을 화면 기능으로 풀어, 추모관 구독, 제사 예약
            중개, 프리미엄 콘텐츠 제작까지 바로 이어지는 흐름을 만들었습니다.
          </p>
        </div>

        <div className="grid gap-3">
          {servicePackages.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedPackage(item.id)}
              className={`rounded-lg border p-5 text-left transition ${
                selectedPackage === item.id
                  ? "border-stone-950 bg-white shadow-sm"
                  : "border-stone-200 bg-[#fffaf2] hover:border-stone-400"
              }`}
            >
              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <div>
                  <h3 className="text-xl font-bold">{item.label}</h3>
                  <p className="mt-2 leading-7 text-stone-600">
                    {item.description}
                  </p>
                </div>
                <p className="shrink-0 font-bold text-amber-800">
                  {item.price}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
          <div className="rounded-lg border border-stone-200 bg-stone-50 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-amber-800">
                  QUICK REQUEST
                </p>
                <h2 className="mt-2 text-3xl font-bold">예약·상담 요청</h2>
              </div>
              <span className="rounded-md bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
                접수 가능
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-stone-700">
                서비스
                <select
                  value={selectedPackage}
                  onChange={(event) =>
                    setSelectedPackage(
                      event.target.value as typeof selectedPackage,
                    )
                  }
                  className="h-12 rounded-md border border-stone-300 bg-white px-3 text-base font-semibold"
                >
                  {servicePackages.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-stone-700">
                지역
                <select
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                  className="h-12 rounded-md border border-stone-300 bg-white px-3 text-base font-semibold"
                >
                  <option>서울·수도권</option>
                  <option>충청권</option>
                  <option>전라권</option>
                  <option>경상권</option>
                  <option>제주</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-stone-700">
                의식 유형
                <select
                  value={ritualDate}
                  onChange={(event) => setRitualDate(event.target.value)}
                  className="h-12 rounded-md border border-stone-300 bg-white px-3 text-base font-semibold"
                >
                  <option>49제</option>
                  <option>기제사</option>
                  <option>추모식</option>
                  <option>디지털 추모관만 이용</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-bold text-stone-700">
                연락처
                <input
                  placeholder="010-0000-0000"
                  className="h-12 rounded-md border border-stone-300 bg-white px-3 text-base font-semibold"
                />
              </label>
            </div>

            <div className="mt-5 rounded-lg bg-white p-4">
              <p className="text-sm font-bold text-stone-500">요청 요약</p>
              <p className="mt-2 text-lg font-bold">
                {region} · {ritualDate} · {activePackage.label}
              </p>
              <p className="mt-2 leading-7 text-stone-600">
                상담 접수 후 지역 파트너 매칭, 예상 비용, 준비 절차를 안내합니다.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-stone-950 p-6 text-white">
            <p className="text-sm font-bold text-amber-200">MEMORY ROOM</p>
            <h2 className="mt-3 text-3xl font-bold">추모관 샘플</h2>
            <div className="mt-6 rounded-lg bg-white p-4 text-stone-950">
              <div className="aspect-[4/3] rounded-md bg-[linear-gradient(135deg,#fef3c7,#e7e5e4,#bbf7d0)]" />
              <h3 className="mt-4 text-2xl font-bold">오늘은 다정했던 하루를 기록합니다</h3>
              <p className="mt-3 leading-7 text-stone-600">
                사진과 글, 가족의 음성을 모아 고요한 위로가 되는 디지털
                공간으로 보관합니다.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm font-bold">
                <span className="rounded-md bg-stone-100 py-2">사진</span>
                <span className="rounded-md bg-stone-100 py-2">영상</span>
                <span className="rounded-md bg-stone-100 py-2">방명록</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-3 lg:px-10">
        <div className="lg:col-span-1">
          <p className="text-sm font-bold text-amber-800">GROWTH PLAN</p>
          <h2 className="mt-3 text-3xl font-bold">홍보와 운영 계획</h2>
          <p className="mt-4 leading-7 text-stone-600">
            공감형 콘텐츠, 후기 영상, 오프라인 제휴를 중심으로 초기 신뢰를
            확보합니다.
          </p>
        </div>

        <div className="grid gap-4 lg:col-span-2">
          {operationPlan.map((item) => (
            <article
              key={item.period}
              className="rounded-lg border border-stone-200 bg-[#fffaf2] p-5"
            >
              <p className="font-bold text-amber-800">{item.period}</p>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 leading-7 text-stone-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-stone-200 bg-[#eee6da]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="text-sm font-bold text-amber-900">PARTNERSHIP</p>
            <h2 className="mt-3 text-3xl font-bold">지역 파트너 연결 구조</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-lg bg-white px-4 py-5 text-center font-bold shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
