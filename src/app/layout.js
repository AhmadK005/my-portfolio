"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ScrollToTop from "../components/ScrollToTop"; // Ensure correct path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden flex flex-col`}>
        <ScrollToTop />
        <div className="pt-16"> {/* Fixes navbar cutting content */}
          {children}
        </div>
      </body>
    </html>
  );
}
