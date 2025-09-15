"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SkillsScrollerProps {
  skillGroups: Record<string, string[]>;
}

export function SkillsScroller({ skillGroups }: SkillsScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isManualScrolling, setIsManualScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const [animationId, setAnimationId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>(Object.keys(skillGroups)[0]);
  const [isHovered, setIsHovered] = useState(false);

  // Get current skills based on active tab
  const currentSkills = skillGroups[activeTab];
  const multipleSkills = [...currentSkills, ...currentSkills, ...currentSkills];

  const handleScroll = () => {
    setIsManualScrolling(true);

    // Clear existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Stop any running animation
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
    
    // Set a new timeout to resume auto-scroll after 2 seconds of no manual scrolling
    const newTimeout = setTimeout(() => {
      setIsManualScrolling(false);
      startAutoScroll();
    }, 2000);
    
    setScrollTimeout(newTimeout);
  };

  const startAutoScroll = () => {
    if (!scrollRef.current) return;
    
    let startTime = Date.now();
    const scrollDuration = 60000; // 60 seconds for full cycle (slower)
    
    const scroll = () => {
      if (!scrollRef.current || isManualScrolling) return;
      
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % scrollDuration) / scrollDuration;
      
      // Calculate the width of one complete set of skills
      const totalWidth = scrollRef.current.offsetWidth;
      const oneSetWidth = totalWidth / 3;
      
      // Move from 0 to oneSetWidth, then loop back
      const translateX = progress * oneSetWidth;
      
      // Apply smooth transform
      scrollRef.current.style.transform = `translateX(-${translateX}px)`;
      
      const id = requestAnimationFrame(scroll);
      setAnimationId(id);
    };
    
    requestAnimationFrame(scroll);
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    
    setIsManualScrolling(true);
    
    // Stop auto-scroll
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
    
    // Clear timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Calculate scroll distance (one skill width)
    const skillWidth = 120; // Approximate width of one skill bubble + margin
    const currentTransform = scrollRef.current.style.transform;
    const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
    const newX = Math.max(0, currentX - skillWidth);
    
    // Apply smooth transform with transition
    scrollRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    scrollRef.current.style.transform = `translateX(-${newX}px)`;
    
    // Resume auto-scroll after 3 seconds
    const newTimeout = setTimeout(() => {
      setIsManualScrolling(false);
      setIsHovered(false); // Hide buttons when auto-scroll resumes
      // Remove transition for smooth auto-scroll
      if (scrollRef.current) {
        scrollRef.current.style.transition = 'none';
      }
      startAutoScroll();
    }, 3000);
    
    setScrollTimeout(newTimeout);
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    
    setIsManualScrolling(true);
    
    // Stop auto-scroll
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
    
    // Clear timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Calculate scroll distance (one skill width)
    const skillWidth = 120; // Approximate width of one skill bubble + margin
    const currentTransform = scrollRef.current.style.transform;
    const currentX = currentTransform ? parseFloat(currentTransform.match(/-?\d+\.?\d*/)?.[0] || '0') : 0;
    const totalWidth = scrollRef.current.offsetWidth;
    const maxX = totalWidth / 3; // One complete set
    const newX = Math.min(maxX, currentX + skillWidth);
    
    // Apply smooth transform with transition
    scrollRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    scrollRef.current.style.transform = `translateX(-${newX}px)`;
    
    // Resume auto-scroll after 3 seconds
    const newTimeout = setTimeout(() => {
      setIsManualScrolling(false);
      setIsHovered(false); // Hide buttons when auto-scroll resumes
      // Remove transition for smooth auto-scroll
      if (scrollRef.current) {
        scrollRef.current.style.transition = 'none';
      }
      startAutoScroll();
    }, 3000);
    
    setScrollTimeout(newTimeout);
  };

  const switchTab = (tabName: string) => {
    setActiveTab(tabName);
    setIsManualScrolling(false);
    
    // Stop current animation
    if (animationId) {
      cancelAnimationFrame(animationId);
      setAnimationId(null);
    }
    
    // Clear timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Reset scroll position
    if (scrollRef.current) {
      scrollRef.current.style.transform = 'translateX(0px)';
    }
  };

  useEffect(() => {
    if (!isManualScrolling) {
      startAutoScroll();
    }
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isManualScrolling, activeTab]);

  return (
    <div className="my-8">
      {/* Skill Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {Object.keys(skillGroups).map((tabName) => (
          <button
            key={tabName}
            onClick={() => switchTab(tabName)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tabName
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      {/* Skills Scroller */}
      <div 
        className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl py-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Left navigation button */}
      <motion.button
        onClick={scrollLeft}
        className="absolute left-2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 group"
        aria-label="Scroll left"
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: '-50%'
        }}
        style={{ top: '50%' }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft 
          size={20} 
          className="text-gray-700 group-hover:text-gray-900" 
        />
      </motion.button>

      {/* Right navigation button */}
      <motion.button
        onClick={scrollRight}
        className="absolute right-2 z-20 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-2 group"
        aria-label="Scroll right"
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          y: '-50%'
        }}
        style={{ top: '50%' }}
        transition={{ duration: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight 
          size={20} 
          className="text-gray-700 group-hover:text-gray-900" 
        />
      </motion.button>

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
      
      <div
        ref={scrollRef}
        className="flex w-full"
        onScroll={handleScroll}
        style={{ 
          width: 'max-content',
          willChange: 'transform'
        }}
      >
        {multipleSkills.map((skill, index) => (
          <motion.div
            key={`${skill}-${index}`}
            className="flex-shrink-0 mx-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="text-white font-medium text-sm whitespace-nowrap">
                {skill}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      </div>
    </div>
  );
}
