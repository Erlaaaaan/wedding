"use client";

import { useEffect, useMemo, useState } from "react";
import { Cinzel, Cormorant_Garamond, Great_Vibes } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const caps = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const WEDDING = new Date(2029, 0, 14, 15, 0, 0);
const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function pad(value) {
  return String(value).padStart(2, "0");
}

function useCountdown(target) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  return useMemo(() => {
    if (now == null) {
      return { days: "--", hours: "--", mins: "--", secs: "--" };
    }
    const diff = Math.max(0, target.getTime() - now);
    return {
      days: String(Math.floor(diff / 86400000)),
      hours: pad(Math.floor((diff % 86400000) / 3600000)),
      mins: pad(Math.floor((diff % 3600000) / 60000)),
      secs: pad(Math.floor((diff % 60000) / 1000)),
    };
  }, [now, target]);
}

function januaryCells() {
  const leading = new Date(2029, 0, 1).getDay();
  return [
    ...Array.from({ length: leading }, () => null),
    ...Array.from({ length: 31 }, (_, index) => index + 1),
  ];
}

function Countdown({ time }) {
  const units = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Mins", time.mins],
    ["Secs", time.secs],
  ];

  return (
    <div className="flex items-end justify-center gap-4 sm:gap-8">
      {units.map(([label, value], index) => (
        <div key={label} className="flex items-end">
          {index > 0 && (
            <span className={`${serif.className} mb-6 px-2 text-3xl text-white/70`} aria-hidden="true">
              ·
            </span>
          )}
          <div className="min-w-[4.5rem] text-center">
            <div className={`${serif.className} text-5xl font-medium leading-none text-white sm:text-7xl`}>
              {value}
            </div>
            <div className={`${caps.className} mt-2 text-[10px] uppercase tracking-[0.28em] text-white/80`}>
              {label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EnvelopeGate({ children }) {
  const [step, setStep] = useState("sealed");
  const time = useCountdown(WEDDING);
  const days = useMemo(() => januaryCells(), []);
  const isDone = step === "done";

  useEffect(() => {
    document.body.style.overflow = isDone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDone]);

  const advance = () => {
    if (step === "sealed") {
      setStep("opening");
      window.setTimeout(() => setStep("countdown"), 1000);
      return;
    }
    if (step === "opening") return;
    if (step === "countdown") {
      setStep("calendar");
      return;
    }
    if (step === "calendar") setStep("done");
  };

  const addToCalendar = (event) => {
    event.stopPropagation();
    const url =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" +
      encodeURIComponent("Erlan & Andrea Wedding") +
      "&dates=20290114T070000Z/20290114T090000Z" +
      "&details=" +
      encodeURIComponent("Ceremony at 3:00 PM · Reception at 5:00 PM");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-700 ${
          isDone ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: "url('/images/hero-watercolor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {step === "sealed" || step === "opening" ? (
          <button
            type="button"
            onClick={advance}
            className="flex h-full w-full items-center justify-center px-6 focus:outline-none"
            aria-label="Open the envelope"
          >
            <div
              className={`envelope-scene relative w-full max-w-3xl transition-transform duration-700 ${
                step === "opening" ? "scale-95" : "scale-100"
              }`}
            >
              <div className="relative h-56 bg-[#e7d5c8] shadow-[0_18px_50px_rgba(80,50,40,0.18)] sm:h-72">
                <div className="absolute inset-0 bg-[#f7f1ea]" />
                <div
                  className={`envelope-flap absolute inset-x-0 top-0 z-10 h-[74%] bg-[#f4ebe4] ${
                    step === "opening" ? "is-open" : ""
                  }`}
                  style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                >
                  <div className="pt-8 text-center sm:pt-12">
                    <p className={`${script.className} text-5xl text-[#5c463c] sm:text-6xl`}>
                      Erlan & Andrea
                    </p>
                    <p className={`${serif.className} mt-1 text-sm tracking-wide text-[#7a6156] sm:text-base`}>
                      January 14, 2029
                    </p>
                  </div>
                </div>
                <div
                  className={`absolute left-1/2 top-[74%] z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#8d3b4a] shadow-md transition-all duration-700 ${
                    step === "opening" ? "-translate-y-16 opacity-0" : ""
                  }`}
                >
                  <span className={`${script.className} text-2xl text-[#f8efe8]`}>E</span>
                </div>
              </div>
            </div>
          </button>
        ) : null}

        {step === "countdown" || step === "calendar" ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative h-full max-w-full">
              <img
                src="/images/eqw.png"
                alt="Erlan and Andrea"
                className="h-full w-auto max-w-full object-contain"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>
          </div>
        ) : null}

        {step === "countdown" ? (
          <button
            type="button"
            onClick={advance}
            className="screen-rise relative flex h-full w-full items-center justify-center px-6 focus:outline-none"
            aria-label="Show the calendar"
          >
            <div className="w-full max-w-sm px-4 py-8 text-center text-white sm:max-w-md">
              <p className={`${script.className} text-6xl leading-none sm:text-7xl`}>EA</p>
              <h1 className={`${serif.className} mt-2 text-4xl font-medium sm:text-5xl`}>
                Erlan <span className={script.className}>&</span> Andrea
              </h1>
              <p className={`${serif.className} mt-3 text-xl italic text-white/90`}>January 14, 2029</p>
              <div className="mt-8">
                <Countdown time={time} />
              </div>
            </div>
          </button>
        ) : null}

        {step === "calendar" ? (
          <button
            type="button"
            onClick={advance}
            className="screen-rise relative flex h-full w-full items-center justify-center px-6 focus:outline-none"
            aria-label="Enter the invitation"
          >
            <div className="mx-auto flex w-full max-w-sm flex-col items-center px-4 py-8 text-center text-white sm:max-w-md">
              <p className={`${caps.className} text-[12px] tracking-[0.5em]`}>Save the date</p>
              <h2 className={`${serif.className} mt-3 text-5xl tracking-[0.18em] sm:text-6xl`}>JANUARY</h2>
              <p className={`${serif.className} tracking-[0.4em] text-white/80`}>2029</p>
              <div className="mt-6 w-full max-w-sm">
                <div className="grid grid-cols-7 gap-y-2 text-sm">
                  {WEEKDAYS.map((day) => (
                    <div key={day} className={`${caps.className} text-[11px] tracking-wider text-white/70`}>
                      {day}
                    </div>
                  ))}
                  {days.map((day, index) => (
                    <div key={`${day ?? "empty"}-${index}`} className="flex justify-center">
                      {day ? (
                        <span
                          className={`${serif.className} flex h-8 w-8 items-center justify-center text-lg ${
                            day === 14 ? "rounded-full border border-white" : ""
                          }`}
                        >
                          {day}
                        </span>
                      ) : (
                        <span className="h-8 w-8" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <span
                role="link"
                tabIndex={0}
                onClick={addToCalendar}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") addToCalendar(event);
                }}
                className={`${serif.className} mt-8 inline-flex items-center gap-2 rounded-full border border-white/80 px-5 py-2 text-base`}
              >
                Add to Calendar
              </span>
            </div>
          </button>
        ) : null}
      </div>

      <div className={isDone ? "opacity-100" : "pointer-events-none opacity-0"}>
        {children}
      </div>
    </div>
  );
}
