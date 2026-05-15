import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "복순네 | 디지털 추모관과 49제 예약",
  description: "고인의 기억을 보관하고 49제와 기제사 준비를 연결하는 온라인 추모 플랫폼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
