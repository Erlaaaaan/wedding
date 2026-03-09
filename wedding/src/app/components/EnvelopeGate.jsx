"use client";

import { useState } from "react";

export default function EnvelopeGate({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 1200);
  };

  return (
    <div className="relative">
      {/* Envelope Overlay - full screen, wedding invitation lace style */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 overflow-hidden ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        style={{ backgroundColor: "#F5E6E8" }}
      >
        {/* Lace / paper-cut style background - floral, vines, butterfly */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="lace-floral" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Small 5-petal flowers */}
                <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.8">
                  <circle cx="30" cy="30" r="8" />
                  <path d="M30 22v-4 M30 38v4 M22 30h-4 M38 30h4 M24 24l-3-3 M36 36l3 3 M24 36l-3 3 M36 24l3-3" />
                </g>
                <g fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.6">
                  <circle cx="100" cy="80" r="5" />
                  <path d="M100 75v-2.5 M100 85v2.5 M95 80h-2.5 M105 80h2.5" />
                </g>
                {/* Vine curves */}
                <path d="M0 100 Q50 80 100 100 T200 100" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" fill="none" />
                <path d="M0 120 Q60 100 120 120 T200 120" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none" />
              </pattern>
              <pattern id="lace-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="0.8" fill="rgba(255,255,255,0.4)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lace-dots)" />
            <rect width="100%" height="100%" fill="url(#lace-floral)" />
            {/* Mandala-style flowers - top left & right */}
            <g fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.7" transform="translate(180, 120)">
              <circle r="12" />
              <circle r="18" />
              <path d="M0 -18 L0 -12 M0 18 L0 12 M-18 0 L-12 0 M18 0 L12 0 M-12.7 -12.7 L-8.5 -8.5 M12.7 12.7 L8.5 8.5 M12.7 -12.7 L8.5 -8.5 M-12.7 12.7 L-8.5 8.5" />
              <path d="M0 -15 L0 -10 M0 15 L0 10 M-15 0 L-10 0 M15 0 L10 0" transform="rotate(45)" />
            </g>
            <g fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.7" transform="translate(1020, 120)">
              <circle r="12" />
              <circle r="18" />
              <path d="M0 -18 L0 -12 M0 18 L0 12 M-18 0 L-12 0 M18 0 L12 0 M-12.7 -12.7 L-8.5 -8.5 M12.7 12.7 L8.5 8.5 M12.7 -12.7 L8.5 -8.5 M-12.7 12.7 L-8.5 8.5" />
            </g>
          </svg>
          {/* Center butterfly - lace / paper-cut style, symmetrical */}
          <svg className="absolute top-[10%] left-1/2 -translate-x-1/2 w-36 h-28 opacity-95" viewBox="0 0 100 70">
            <g fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              {/* Left wing */}
              <path d="M50 35 Q25 15 10 25 Q5 40 20 50 Q40 45 50 35" />
              <path d="M50 35 Q35 25 25 30 Q20 38 30 45 Q42 42 50 35" />
              {/* Right wing */}
              <path d="M50 35 Q75 15 90 25 Q95 40 80 50 Q60 45 50 35" />
              <path d="M50 35 Q65 25 75 30 Q80 38 70 45 Q58 42 50 35" />
              {/* Body */}
              <path d="M50 18 L50 52" strokeWidth="1.2" />
              <ellipse cx="50" cy="35" rx="2.5" ry="4" fill="rgba(255,255,255,0.95)" />
              {/* Antennae */}
              <path d="M50 18 Q45 12 42 10" />
              <path d="M50 18 Q55 12 58 10" />
            </g>
          </svg>
          {/* Corner lace flourishes - ornate curves */}
          <svg className="absolute top-6 left-6 w-40 h-40 opacity-80" viewBox="0 0 100 100">
            <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
              <path d="M0 50 Q20 20 50 0 Q80 25 100 50" />
              <path d="M5 55 Q30 30 55 10 Q75 35 95 55" />
              <path d="M10 60 Q35 40 60 25" />
            </g>
            <circle cx="15" cy="15" r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
            <circle cx="25" cy="35" r="3" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.6" />
          </svg>
          <svg className="absolute top-6 right-6 w-40 h-40 opacity-80 scale-x-[-1]" viewBox="0 0 100 100">
            <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
              <path d="M0 50 Q20 20 50 0 Q80 25 100 50" />
              <path d="M5 55 Q30 30 55 10 Q75 35 95 55" />
              <path d="M10 60 Q35 40 60 25" />
            </g>
            <circle cx="15" cy="15" r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
          </svg>
          <svg className="absolute bottom-6 left-6 w-40 h-40 opacity-80 scale-y-[-1]" viewBox="0 0 100 100">
            <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
              <path d="M0 50 Q20 20 50 0 Q80 25 100 50" />
              <path d="M5 55 Q30 30 55 10 Q75 35 95 55" />
            </g>
            <circle cx="15" cy="15" r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
          </svg>
          <svg className="absolute bottom-6 right-6 w-40 h-40 opacity-80 scale-x-[-1] scale-y-[-1]" viewBox="0 0 100 100">
            <g fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
              <path d="M0 50 Q20 20 50 0 Q80 25 100 50" />
              <path d="M5 55 Q30 30 55 10 Q75 35 95 55" />
            </g>
            <circle cx="15" cy="15" r="4" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
          </svg>
          {/* Side vines - delicate scrolls */}
          <svg className="absolute top-1/2 left-4 -translate-y-1/2 w-20 h-64 opacity-60" viewBox="0 0 40 200">
            <path d="M20 0 Q5 50 20 100 Q35 150 20 200" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
            <path d="M20 20 Q30 60 20 100 Q10 140 20 180" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" fill="none" />
          </svg>
          <svg className="absolute top-1/2 right-4 -translate-y-1/2 w-20 h-64 opacity-60 scale-x-[-1]" viewBox="0 0 40 200">
            <path d="M20 0 Q5 50 20 100 Q35 150 20 200" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
          </svg>
        </div>
        <button
          onClick={handleOpen}
          className="group relative z-10 h-full w-full flex flex-col items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9E1C60] focus:ring-offset-4 rounded-lg"
          aria-label="Open invitation"
        >
          <div
            className={`flex-1 flex items-center justify-center w-full min-h-0 transition-all duration-700 ${
              isAnimating
                ? "scale-125 opacity-0"
                : "scale-100 opacity-100 group-hover:scale-105"
            }`}
          >
            <svg
              viewBox="0 0 280 180"
              className="w-full max-w-4xl h-auto min-h-[50vh] max-h-[70vh] drop-shadow-2xl"
            >
              <path
                d="M 20 160 L 20 40 L 140 100 L 260 40 L 260 160 Z"
                fill="#9E1C60"
                stroke="#811844"
                strokeWidth="2"
              />
              <path
                d="M 20 40 L 140 100 L 260 40"
                fill="#9E1C60"
                stroke="#811844"
                strokeWidth="2"
              />
              <path
                d="M 35 52 L 140 95 L 245 52"
                fill="#9E1C60"
                opacity="0.5"
              />
            </svg>
          </div>
          {!isAnimating && (
            <p
              className="pb-12 sm:pb-16 text-sm uppercase tracking-[0.3em] font-light"
              style={{ color: "#811844" }}
            >
              Click to open
            </p>
          )}
        </button>
      </div>

      {/* Main Content - revealed after envelope opened */}
      <div
        className={`transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
