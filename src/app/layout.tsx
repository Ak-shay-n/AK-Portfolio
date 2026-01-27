import type { Metadata } from "next";
import "./globals.css";
import TopLoader from "@/components/TopLoader";

export const metadata: Metadata = {
  title: "Akshay's Sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&family=Audiowide&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/horizon" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* <SecurityLayer /> */}
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
