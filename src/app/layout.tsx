import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pitstop - Professional Automotive Services",
  description: "Fast, reliable automotive services with expert mechanics and quality guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
