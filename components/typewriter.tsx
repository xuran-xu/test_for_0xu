"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Typewriter({ text, speed = 10, className = "" }: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showSecondPart, setShowSecondPart] = useState(false);

  const firstPart = "0xU";
  const secondPart = " Hong Kong Blockchain Club";

  useEffect(() => {
    if (currentIndex < firstPart.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + firstPart[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === firstPart.length && !showSecondPart) {
      // 等待一下然后显示第二部分
      const timeout = setTimeout(() => {
        setShowSecondPart(true);
        setShowCursor(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, firstPart, speed, showSecondPart]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-white">
        {displayText}
        {showSecondPart && (
          <span className="animate-fade-in">
            {secondPart}
          </span>
        )}
        {!showSecondPart && (
          <span 
            className={`inline-block w-0.5 h-6 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}
            style={{ animation: 'none' }}
          />
        )}
      </span>
    </div>
  );
} 