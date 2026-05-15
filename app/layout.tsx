import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Memory Book",
  description: "소중한 기억을 기록하고 보관하는 디지털 메모리북",
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
