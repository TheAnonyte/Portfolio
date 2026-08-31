"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      setIsVisible(true);
    };

    const animate = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 16}px, ${outerPos.current.y - 16}px)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleEnter);
    document.addEventListener("mousedown", handleDown);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("mouseleave", handleLeave);

    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mousedown", handleDown);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: isHovering ? "1px solid #e63946" : "1px solid rgba(230,57,70,0.5)",
          transition: "width 0.2s, height 0.2s, border-color 0.2s, background 0.2s",
          transform: "translate(-16px, -16px)",
          opacity: isVisible ? 1 : 0,
          background: isHovering ? "rgba(230,57,70,0.1)" : "transparent",
          scale: isClicking ? "0.8" : "1",
        }}
      />
      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#e63946",
          transform: "translate(-4px, -4px)",
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 8px rgba(230,57,70,0.8)",
        }}
      />
    </>
  );
}
