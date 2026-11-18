"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "view">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      if (typeof window !== "undefined") {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
      }
      return true;
    };

    setIsTouchDevice(checkTouch());

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactive) {
        const type = interactive.getAttribute("data-cursor");
        if (type === "view" || type === "project") {
          setCursorVariant("view");
          setCursorText("VISIT");
          return;
        }
        setCursorVariant("hover");
        setCursorText("");
        return;
      }

      if (target.closest("a, button, input, [role='button']")) {
        setCursorVariant("hover");
        setCursorText("");
        return;
      }

      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={cursorVariant}
        variants={{
          default: {
            width: 8,
            height: 8,
            backgroundColor: "#2563EB",
            boxShadow: "0 0 10px 1px rgba(37, 99, 235, 0.4)",
          },
          hover: {
            width: 32,
            height: 32,
            backgroundColor: "rgba(37, 99, 235, 0.12)",
            border: "1.5px solid rgba(37, 99, 235, 0.6)",
            boxShadow: "0 0 16px 2px rgba(37, 99, 235, 0.2)",
          },
          view: {
            width: 72,
            height: 72,
            backgroundColor: "#2563EB",
            boxShadow: "0 8px 25px -4px rgba(37, 99, 235, 0.5)",
          },
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className="rounded-full flex items-center justify-center text-white font-mono text-[9px] tracking-widest uppercase font-bold"
      >
        {cursorText}
      </motion.div>
    </div>
  );
};
