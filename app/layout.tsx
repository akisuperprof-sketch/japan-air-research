import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "japanAir-research株式会社 | 空気環境改善技術の研究開発・知財ライセンス",
  description: "次世代の空気環境改善技術（イオン発生・VOC分解）の研究開発、特許ライセンス、海外展開を推進。Airfutureの技術基盤を担う研究開発型企業です。",
  keywords: "空気環境, イオン発生技術, 研究開発, 知財ライセンス, グローバル展開, japanAir-research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}

