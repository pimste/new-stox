"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export function PageLoadingIndicator() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Show loading state on route change
    setIsLoading(true);
    
    // Hide loading state after animation has time to complete
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    
    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);
  
  return (
    <>
      {/* Top loading indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-primary"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={isLoading ? { scaleX: 1 } : { scaleX: 0 }}
        transition={isLoading ? { duration: 0.6, ease: "easeInOut" } : { duration: 0.2, ease: "easeOut" }}
      />
      
      {/* Full page loading overlay - only visible briefly during navigation */}
      <motion.div
        className="fixed inset-0 z-[9998] bg-background/50 backdrop-blur-sm flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoading ? 1 : 0, y: isLoading ? 0 : 10 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <div className="relative h-16 w-16">
            <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary/30"></div>
            <motion.div
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-primary border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <p className="mt-2 text-sm font-medium text-muted-foreground">Laden...</p>
        </motion.div>
      </motion.div>
    </>
  );
} 