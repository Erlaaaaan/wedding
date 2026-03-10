 "use client";

import { useState } from "react";

export default function TableSection() {
  const tables = [
    {
      label: "Table 1",
      note: "Immediate Family",
      guests: ["Parents of the Bride", "Parents of the Groom", "Lola & Lolo"],
    },
    {
      label: "Table 2",
      note: "Relatives",
      guests: ["Tita eya", "Tito andrea", "Kuya erlan", "Ate ej"],
    },
    {
        label: "Table 3",
        note: "Relatives",
        guests: ["Tita erlan", "Tito eerl", "Kuya eya", "Ate andrea"],
      },
    {
      label: "Table 4",
      note: "College Friends",
      guests: ["Josh", "Kim", "Paolo", "Jopay"],
    },
    {
        label: "Table 5",
        note: "College Friends",
        guests: ["Josh", "Kim", "Paolo", "Jopay"],
      },
    {
      label: "Table 6",
      note: "Work Friends",
      guests: ["mark", "Neil", "Jason", "Carlo"],
    },
    {
        label: "Table 7",
        note: "Work Friends",
        guests: ["qwe", "asd", "zxc", "dfg"],
      },
    {
      label: "Table 8",
      note: "Childhood Friends",
      guests: ["ella", "jamil", "Nico", "jear"],
    },
    {
      label: "Table 9",
      note: "Special Guests",
      guests: ["Ninong", "Ninang ", "Principal Sponsor"],
    },
  ];

  const [flippedLabel, setFlippedLabel] = useState(null);

  return (
    <section
      id="table"
      className="relative py-16 px-6 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#F9EDF0" }}
    >
      {/* Watercolor background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-watercolor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.02)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div
          className="absolute -left-24 top-10 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 10% 20%, rgba(245,218,167,0.85), transparent 60%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-10 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 90% 80%, rgba(158,28,96,0.18), transparent 55%)",
          }}
        />
        {/* floral edge drawings */}
        <svg
          className="absolute -left-10 bottom-6 w-32 h-32 opacity-35"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#9E1C60"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 80 C28 65, 44 60, 60 60 C48 66, 40 76, 32 86" />
            <circle cx="22" cy="68" r="3.5" />
          </g>
        </svg>
        <svg
          className="absolute -right-10 top-4 w-32 h-32 opacity-35"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#811844"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M110 40 C92 52, 80 64, 72 78 C84 72, 96 68, 106 64" />
            <circle cx="90" cy="50" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl mb-8">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-2"
            style={{ color: "#9E1C60" }}
          >
            Seating plan
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-3"
            style={{ color: "#811844" }}
          >
            Your table for the celebration
          </h2>
          <p className="text-sm" style={{ color: "#811844" }}>
            Here is a simple preview of the tables for the reception. You can
            update the labels later with exact guest names and assignments.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 text-xs sm:text-sm">
          <a
            href="/form"
            className="px-6 py-2.5 rounded-full font-medium shadow-md"
            style={{
              background:
                "linear-gradient(135deg, #9E1C60 0%, #811844 45%, #F5DAA7 100%)",
              color: "#fff",
            }}
          >
            Confirm Your RSVP
          </a>
          <a
            href="/eventflow"
            className="px-5 py-2 rounded-full border bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
            style={{
              borderColor: "rgba(158, 28, 96, 0.35)",
              color: "#811844",
            }}
          >
            View Ceremony Timeline
          </a>
          <a
            href="/nuptials"
            className="px-5 py-2 rounded-full border bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
            style={{
              borderColor: "rgba(210, 83, 83, 0.45)",
              color: "#9E3B3B",
            }}
          >
            Nuptials Info
          </a>
          <a
            href="/attire"
            className="px-5 py-2 rounded-full border bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
            style={{
              borderColor: "rgba(210, 83, 83, 0.45)",
              color: "#9E3B3B",
            }}
          >
            Attire / Dress Code
          </a>
          <a
            href="/table"
            className="px-5 py-2 rounded-full border bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
            style={{
              borderColor: "rgba(158, 28, 96, 0.35)",
              color: "#811844",
            }}
          >
            Check Your Table
          </a>
          <a
            href="/map"
            className="px-5 py-2 rounded-full border bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
            style={{
              borderColor: "rgba(158, 28, 96, 0.35)",
              color: "#811844",
            }}
          >
            See Location Map
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tables.map((table) => {
            const isFlipped = flippedLabel === table.label;
            return (
              <button
                key={table.label}
                type="button"
                onClick={() =>
                  setFlippedLabel(isFlipped ? null : table.label)
                }
                className="relative w-full h-40 sm:h-44 lg:h-48 focus:outline-none"
                style={{ perspective: "1200px" }}
              >
                <div
                  className="w-full h-full rounded-3xl border shadow-md bg-transparent"
                  style={{
                    borderColor: "rgba(158, 28, 96, 0.18)",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s ease",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <div
                    className="absolute inset-0 px-5 py-5 bg-white/90 backdrop-blur-sm"
                    style={{
                      backfaceVisibility: "hidden",
                      borderRadius: "1.5rem",
                      backgroundImage:
                        "radial-gradient(circle at 0 0, rgba(245,218,167,0.45), transparent 55%)",
                    }}
                  >
                    <div
                      className="text-xs uppercase tracking-[0.25em] mb-2"
                      style={{ color: "#9E1C60" }}
                    >
                      {table.label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: "#811844" }}
                    >
                      {table.note}
                    </div>
                    <p
                      className="text-[11px] mt-3"
                      style={{ color: "#9E1C60" }}
                    >
                      Click to view guests for this table.
                    </p>
                  </div>

                  <div
                    className="absolute inset-0 px-5 py-4 bg-white/95 backdrop-blur-sm"
                    style={{
                      backfaceVisibility: "hidden",
                      borderRadius: "1.5rem",
                      transform: "rotateY(180deg)",
                      backgroundImage:
                        "radial-gradient(circle at 100% 0, rgba(245,218,167,0.4), transparent 55%)",
                    }}
                  >
                    <div
                      className="text-xs uppercase tracking-[0.25em] mb-2"
                      style={{ color: "#9E1C60" }}
                    >
                      {table.label} Guests
                    </div>
                    <ul
                      className="text-[11px] space-y-1"
                      style={{ color: "#811844" }}
                    >
                      {table.guests.map((guest) => (
                        <li key={guest}>• {guest}</li>
                      ))}
                    </ul>
                    <p
                      className="text-[10px] mt-3 opacity-70"
                      style={{ color: "#9E1C60" }}
                    >
                      Tap again to flip back.
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
