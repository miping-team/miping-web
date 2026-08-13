import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "미핑 — 우리 사이, 딱 좋은 중간",
    description: "각자의 실제 이동시간을 비교해 모두에게 공평한 중간지점을 찾아주는 모임 앱, 미핑.",
    icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
    openGraph: {
      title: "미핑 — 우리, 어디서 만날까?",
      description: "이동시간이 공평한 중간지점을 찾아드려요.",
      type: "website",
      locale: "ko_KR",
      images: [{ url: `${origin}/og.png`, width: 1792, height: 1024, alt: "미핑 앱 소개" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "미핑 — 우리, 어디서 만날까?",
      description: "이동시간이 공평한 중간지점을 찾아드려요.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
