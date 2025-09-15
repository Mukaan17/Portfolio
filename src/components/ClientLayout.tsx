"use client";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="absolute inset-0 overflow-y-auto">
          {children}
        </div>
      </AnimatePresence>
      <Analytics />
    </>
  );
}
