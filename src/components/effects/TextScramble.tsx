"use client";

import React, { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  triggerOnScroll?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#________";

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = "",
  speed = 30,
  triggerOnScroll = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const startScramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    if (!triggerOnScroll) {
      startScramble();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startScramble();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [text, speed, triggerOnScroll]);

  return (
    <span
      ref={elementRef}
      onMouseEnter={() => startScramble()}
      className={`cursor-default ${className}`}
    >
      {displayText}
    </span>
  );
};
