"use client";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-gray-100"
        )}
      >
        <div className="flex w-full h-full">
          <Sidebar />
          <div className="flex-1 lg:pl-2 lg:pt-2 bg-gray-100 overflow-hidden">
            <div className="relative h-full bg-white lg:rounded-tl-xl border border-transparent lg:border-neutral-200">
              <AnimatePresence mode="wait">
                <div className="absolute inset-0 overflow-y-auto">
                  {children}
                  <Footer />
                </div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
