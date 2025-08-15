"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IconX, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Badge = ({
  text,
  href,
  onDownload,
  onMobileClose,
  ...props
}: {
  text: string;
  href: string;
  onDownload?: (e: React.MouseEvent) => void;
  onMobileClose?: () => void;
  props?: React.ComponentProps<typeof Link>;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const isResumePage = pathname === "/resume";
  const [mounted, setMounted] = useState(false);

  // Fix SSR issues by ensuring component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isMobile() && onMobileClose) {
      onMobileClose();
    }
    router.back();
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onDownload) {
      onDownload(e);
    }
    if (isMobile() && onMobileClose) {
      onMobileClose();
    }
  };

  // Don't render motion components until mounted to prevent SSR issues
  if (!mounted) {
    return (
      <div className="relative flex items-center gap-3">
        <Link
          href={href}
          className="flex items-center gap-2 px-7 py-4 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors shadow-lg"
          {...props}
        >
          {text}
          <IconArrowRight size={16} />
        </Link>
      </div>
    );
  }

  return (
    <div className="relative flex items-center gap-3">
      {/* Main Button */}
      <motion.div
        initial={false}
        animate={{
          width: isResumePage ? "auto" : "auto",
          borderRadius: "9999px",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="overflow-hidden"
      >
        <Link
          href={href}
          onClick={isResumePage ? handleDownload : undefined}
          className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          {...props}
        >
          <motion.span
            initial={false}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap"
          >
            {text}
          </motion.span>
          <motion.div
            initial={false}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {isResumePage ? (
              <IconDownload size={16} />
            ) : (
              <IconArrowRight size={16} />
            )}
          </motion.div>
        </Link>
      </motion.div>

      {/* X Button - Liquid Morph Effect */}
      <AnimatePresence>
        {isResumePage && (
          <motion.button
            initial={{
              scale: 0,
              opacity: 0,
              x: -20,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              x: -20,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            onClick={handleBackClick}
            className="flex items-center justify-center w-10 h-10 text-white bg-gradient-to-r from-red-500 to-red-600 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
            whileHover={{
              scale: 1.1,
              rotate: 90,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <IconX size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
