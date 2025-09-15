"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Custom flowing download icon component
function FlowingDownloadIcon() {
  return (
    <div className="relative w-3 h-3 flex items-center justify-center">
      {/* Base download box */}
      <svg width="12" height="12" viewBox="0 0 16 16" className="absolute">
        {/* Box/container part */}
        <path
          d="M2 12h12v2H2z"
          fill="currentColor"
          opacity="0.8"
        />
        <path
          d="M2 14h12v1H2z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
      
      {/* Animated flowing arrows */}
      {[0, 1, 2].map((index) => (
        <motion.svg
          key={index}
          width="12"
          height="12"
          viewBox="0 0 16 16"
          className="absolute"
          initial={{ y: -8, opacity: 0 }}
          animate={{ 
            y: [-8, 4, 8],
            opacity: [0, 1, 0],
            scale: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut"
          }}
        >
          {/* Arrow part */}
          <path
            d="M8 2v8M5 7l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function LiquidMorphButton() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleMainClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      // Navigate to resume page shortly after expansion begins so animations are visible
      window.setTimeout(() => {
        router.push('/resume');
      }, 150);
    } else if (!isDownloading) {
      // Start download
      setIsDownloading(true);
      setProgress(0);
      
      // Create a link element to trigger the download
      const link = document.createElement('a');
      link.href = '/resume/resume.pdf';
      link.download = 'mukhil-sundararaj-resume.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      
      // Simulate download progress with real download
      const startTime = Date.now();
      const downloadDuration = 2000; // 2 seconds for download simulation
      
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / downloadDuration) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          // Trigger the actual download
          link.click();
          document.body.removeChild(link);
          
          // Reset after download completes
          setTimeout(() => {
            setIsDownloading(false);
            setProgress(0);
          }, 500);
        }
      }, 50); // Update progress every 50ms
    }
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
    setIsDownloading(false);
    setProgress(0);
    // Go back to previous page (e.g., from /resume back to prior route)
    router.back();
  };

  return (
    <div className="relative flex items-center">
      {/* X Button with Liquid Emergence */}
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            initial={{ 
              scale: 0, 
              opacity: 0,
            }}
            animate={{ 
              scale: 1, 
              opacity: 1,
            }}
            exit={{ 
              scale: 0, 
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2,
              duration: 0.6
            }}
            onClick={handleCloseClick}
            disabled={isDownloading}
            className="w-8 h-8 bg-[#2a2d3a] hover:bg-[#3a3d4a] rounded-full flex items-center justify-center text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={!isDownloading ? { 
              scale: 1.05,
              backgroundColor: "#3a3d4a"
            } : {}}
            whileTap={!isDownloading ? { scale: 0.95 } : {}}
          >
            <motion.div
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <X size={12} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Button Container */}
      <div className="relative">
        {/* Single Button */}
        <motion.button
          onClick={handleMainClick}
          disabled={isDownloading}
          className="bg-[#2a2d3a] hover:bg-[#3a3d4a] text-white px-4 py-2 rounded-full flex items-center justify-between transition-colors duration-200 z-10 overflow-hidden text-xs"
          whileHover={!isDownloading ? { scale: 1.02 } : {}}
          whileTap={!isDownloading ? { scale: 0.98 } : {}}
          initial={{ x: 0 }}
          animate={{
            paddingLeft: isExpanded ? "1rem" : "1rem",
            x: isExpanded || isDownloading ? 20 : 0,
            width: isDownloading ? "145px" : isExpanded ? "120px" : "145px",
          }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 300,
            damping: 30,
            restDelta: 0.001,
          }}
        >
          {/* Progress Bar Background */}
          <motion.div
            className="absolute inset-0 bg-green-600 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: isDownloading ? progress / 100 : 0,
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
            style={{ 
              transformOrigin: "left center",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.span
              key={isDownloading ? 'downloading' : isExpanded ? 'download' : 'resume'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 text-center relative z-10 whitespace-nowrap text-xs ml-2"
            >
              {isDownloading 
                ? `${Math.round(progress)}%` 
                : isExpanded 
                ? 'Download' 
                : 'View Resume'}
            </motion.span>
          </AnimatePresence>
          
          <motion.div
            animate={{ 
              rotate: isDownloading ? 0 : isExpanded ? 90 : 0,
              scale: isDownloading ? 1 : isExpanded ? 0 : 1
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="relative z-10 ml-2"
          >
            {isDownloading ? (
              <FlowingDownloadIcon />
            ) : (
              <ChevronRight size={12} />
            )}
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
