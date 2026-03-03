import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Navbar";
import { WatchedProvider } from "./context/AnimeContext";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AniTrack",
  description: "Track your anime",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] flex`}>
        <Sidebar />
        <main className="ml-56 flex-1">
          <WatchedProvider>
          {children}
          </WatchedProvider>
        </main>
      </body>
    </html>
  );
}