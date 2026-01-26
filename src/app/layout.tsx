import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PITSTOP | Nairobi's Premier Grill & Rhumba Lounge",
  description: "Experience the ultimate grill destination in Nairobi. Legendary Nyama Choma, soulful Rhumba sessions, and elite lounge experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
