export default function EventFlowSection() {
  const steps = [
    {
      time: "2:00 PM",
      title: "Guest Arrival",
      detail: "Welcome, registration, and light refreshments.",
    },
    {
      time: "3:00 PM",
      title: "Wedding Ceremony",
      detail: "Exchange of vows and rings.",
    },
    {
      time: "4:00 PM",
      title: "Photo Session",
      detail: "Family and friends photos with the couple.",
    },
    {
      time: "5:00 PM",
      title: "Reception Begins",
      detail: "Dinner, speeches, and toasts.",
    },
    {
      time: "7:00 PM",
      title: "First Dance",
      detail: "Couple’s first dance followed by open dance floor.",
    },
  ];

  return (
    <section
      id="eventflow"
      className="relative py-16 px-6 lg:px-20 overflow-hidden"
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
          transform: "scale(1.02)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div
          className="absolute -left-32 top-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(245,218,167,0.9), transparent 60%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 70% 80%, rgba(158,28,96,0.25), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.7) 0%, transparent 55%)",
          }}
        />
        {/* floral accents */}
        <svg
          className="absolute -left-12 bottom-4 w-32 h-32 opacity-35"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#9E1C60"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 80 C25 60, 40 55, 58 52 C45 60, 38 72, 30 84" />
            <circle cx="20" cy="60" r="3.5" />
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
            <path d="M112 40 C94 52, 84 64, 74 80 C86 73, 98 68, 108 64" />
            <circle cx="90" cy="50" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-2"
            style={{ color: "#9E1C60" }}
          >
            Wedding day timeline
          </p>
          <h2
            className="text-2xl sm:text-3xl font-semibold mb-3"
            style={{ color: "#811844" }}
          >
            A gentle flow of the celebration
          </h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: "#811844" }}>
            So you can comfortably plan your day and be present with us in each
            moment that matters.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 justify-center text-xs sm:text-sm">
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

        <div className="relative">
          <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#F5DAA7] via-[#9E1C60] to-[#F5DAA7] opacity-60 hidden sm:block" />
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.time}
                className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="sm:w-1/2">
                  <div
                    className="rounded-3xl border px-5 py-5 bg-white/90 shadow-md"
                    style={{ borderColor: "rgba(158, 28, 96, 0.2)" }}
                  >
                    <div
                      className="text-xs uppercase tracking-[0.25em] mb-1"
                      style={{ color: "#9E1C60" }}
                    >
                      {step.time}
                    </div>
                    <div
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#811844" }}
                    >
                      {step.title}
                    </div>
                    <p className="text-xs" style={{ color: "#811844" }}>
                      {step.detail}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex sm:w-1/2 justify-center">
                  <div
                    className="w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: "#9E1C60",
                      backgroundColor: "#F5DAA7",
                      marginTop: "2px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
