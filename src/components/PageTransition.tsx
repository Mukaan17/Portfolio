"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  reverse?: boolean;
}

export const PageTransition = ({ children, reverse = false }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: reverse ? 20 : -20 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.4
      }}
      className="min-h-full w-full"
    >
      {children}
    </motion.div>
  );
}; 