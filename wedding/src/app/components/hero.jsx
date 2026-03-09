"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Hero() {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#F5E6E8" }}
    >
      {/* Watercolor background */}    
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-watercolor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.01)",
        }}
      />
      {/* Soft overlay for readability */}    
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(245, 230, 232, 0.45)",
        }}
      />
      {/* Very subtle vignette */}    
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.15) 0%, rgba(129,24,68,0.06) 55%, rgba(129,24,68,0.10) 100%)",
        }}
      />

      {/* Content wrapper */}    
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-stretch">
        {/* Left Column - Wedding Content */}    
        <div className="lg:basis-1/2 lg:flex-[0_0_50%] px-8 py-16 lg:px-20 flex flex-col justify-center">
          {/* Top Label */}    
          <p
            className={`text-xs sm:text-sm mb-4 uppercase tracking-[0.35em] transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ color: "#811844", transitionDelay: "0.1s" }}
          >
            Save the Date
          </p>

          {/* Invitation line */}    
          <p
            className={`text-lg sm:text-xl mb-2 transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ color: "#811844", transitionDelay: "0.18s" }}
          >
            <span className="italic font-medium">You are Invited!</span>
          </p>

          {/* Names */}    
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4 transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ color: "#9E1C60", transitionDelay: "0.25s" }}
          >
            Erlan Justin{" "}
            <span
              className="inline-block text-3xl sm:text-4xl align-middle mx-2"
              style={{ color: "#811844" }}
            >
              &
            </span>
            Andrea
          </h1>

          {/* Subheading */}    
          <p
            className={`text-sm sm:text-base uppercase tracking-[0.25em] mb-6 transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ color: "#811844", transitionDelay: "0.35s" }}
          >
            Are getting married
          </p>

          {/* Details card */}    
          <div
            className={`max-w-md rounded-2xl border px-6 py-5 mb-8 shadow-sm backdrop-blur-md transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              borderColor: "rgba(158, 28, 96, 0.25)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,232,238,0.9))",
              transitionDelay: "0.45s",
            }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
              style={{ color: "#9E1C60" }}
            >
              Saturday • 14 April 2028
            </div>
            <div className="space-y-2 text-sm" style={{ color: "#811844" }}>
              <p>3:00 PM Ceremony • 5:00 PM Reception</p>
              <p>Manila, Philippines</p>
              <p className="text-xs italic" style={{ color: "#9E1C60" }}>
                Together with their families, they joyfully invite you to share
                in their wedding celebration.
              </p>
            </div>
          </div>

          {/* CTA */}    
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <Link
              href="/form"
              className="px-8 py-3 rounded-full font-medium text-sm tracking-wide shadow-md transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(135deg, #9E1C60 0%, #811844 100%)",
                color: "#fff",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0) scale(1)")
              }
            >
              View Wedding Details
            </Link>
          </div>
        </div>

        {/* Right Column - Photo Area (half-screen) */}    
        <div className="lg:basis-1/2 lg:flex-[0_0_50%] relative flex items-center justify-center px-6 py-14 lg:px-16">
          {/* Glow behind photo */}    
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[70vw] max-w-[520px] h-[70vw] max-h-[520px] rounded-full blur-3xl opacity-35"
              style={{
                background:
                  "radial-gradient(circle, rgba(158,28,96,0.45) 0%, transparent 65%)",
              }}
            />
          </div>

          <div className="relative w-full flex items-center justify-center">
            {/* Larger frame (roughly half the screen on desktop) */}    
            <div
              className="relative w-[88%] max-w-[560px] h-[62vh] sm:h-[70vh] lg:h-[72vh] rounded-[3rem] overflow-hidden shadow-2xl"
              style={{
                background:
                  "linear-gradient(160deg, #9E1C60 0%, #811844 45%, #F5DAA7 100%)",
                padding: "6px",
              }}
            >
              <div className="w-full h-full rounded-[2.65rem] overflow-hidden bg-white">
                <Image
                  src="/images/Erlan.jpg"
                  alt="Erlan"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Overlay label */}    
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
              <div
                className="px-6 py-2 rounded-full text-xs uppercase tracking-[0.25em] shadow-md"
                style={{
                  backgroundColor: "#F5DAA7",
                  color: "#811844",
                }}
              >
                Erlan Justin ♥ Andrea
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
