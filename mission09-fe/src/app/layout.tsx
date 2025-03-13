import "./globals.css";
import { pretendard } from "@/fonts/font";

import ScrollToTop from "@/layouts/ScrollToTop";
import { Providers } from "../contexts/tanstack-query-providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} font-pretendard`}>
      <body className="relative">
        <Providers>{children}</Providers>
        <ScrollToTop />
      </body>
    </html>
  );
}
