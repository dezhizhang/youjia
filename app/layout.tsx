/*
 * :file description: 
 * :name: /youjia/app/layout.tsx
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-08-15 12:36:38
 * :last editor: 张德志
 * :date last edited: 2023-08-15 21:59:33
 */
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "有家";
let description = "生成您的梦想房间 in seconds.";
let ogimage = "https://roomgpt-demo.vercel.app/og-image.png";
let sitename = "http://youjia.xiaozhi.shop/";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "http://youjia.xiaozhi.shop/",
    siteName: sitename,
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#17181C] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
