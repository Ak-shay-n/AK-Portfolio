import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Sandbox",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/horizon" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {/* <SecurityLayer /> */}
        {children}
      </body>
    </html>
  );
}
