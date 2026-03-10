export default function MapSection() {
  return (
    <section
      id="map"
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
          className="absolute -left-24 top-8 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 10% 10%, rgba(245,218,167,0.9), transparent 60%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-8 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 90% 90%, rgba(158,28,96,0.22), transparent 60%)",
          }}
        />
        {/* subtle floral corners */}
        <svg
          className="absolute -left-10 top-6 w-32 h-32 opacity-40"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#9E1C60"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 80 C25 55, 40 45, 60 40 C45 50, 38 65, 32 80" />
            <path d="M18 88 C30 76, 46 72, 60 70" />
            <circle cx="26" cy="60" r="4" />
          </g>
        </svg>
        <svg
          className="absolute -right-10 bottom-4 w-32 h-32 opacity-40"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#811844"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M110 40 C90 55, 80 70, 70 85 C82 78, 96 75, 106 72" />
            <circle cx="88" cy="58" r="4" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-start">
        <div
          className="rounded-3xl border shadow-lg overflow-hidden"
          style={{
            borderColor: "rgba(158, 28, 96, 0.18)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,232,238,0.94))",
          }}
        >
          <div className="px-6 py-5 border-b" style={{ borderColor: "rgba(158, 28, 96, 0.18)" }}>
            <h2 className="text-lg font-semibold" style={{ color: "#811844" }}>
              Ceremony & Reception Venue
            </h2>
            <p className="text-xs mt-1" style={{ color: "#9E1C60" }}>
              Manila, Philippines
            </p>
          </div>
          <div className="px-4 pb-5 pt-3">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[420px]">
              <iframe
                title="Wedding venue map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61909.14523055968!2d120.91878404806513!3d14.11717637210372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%20City%2C%20Cavite!5e0!3m2!1sen!2sph!4v1773053520984!5m2!1sen!2sph"
                className="w-full h-full border-2 border-blue-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-500 hover:border-blue-400 hover:shadow-2xl hover:scale-105"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] mb-2"
              style={{ color: "#9E1C60" }}
            >
              How to get there
            </p>
            <p className="text-sm" style={{ color: "#811844" }}>
              We lovingly invite you to arrive a little early to settle in, take
              photos, and share the anticipation with us.
            </p>
          </div>
          <div
            className="rounded-2xl border px-4 py-3 text-xs space-y-2 bg-white/85"
            style={{
              borderColor: "rgba(158, 28, 96, 0.18)",
              color: "#811844",
            }}
          >
            <p className="font-semibold" style={{ color: "#9E1C60" }}>
              Suggested arrival
            </p>
            <p>Doors open at 2:00 PM • Ceremony begins at 3:00 PM.</p>
            <p>Please allow time for traffic and parking.</p>
          </div>

          {/* compact navigation + quick links */}
          <div className="space-y-3">
           

            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <a
                href="/eventflow"
                className="px-3 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                style={{
                  borderColor: "rgba(158, 28, 96, 0.3)",
                  color: "#811844",
                }}
              >
                View Ceremony Timeline
              </a>
              <a
                href="/nuptials"
                className="px-3 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                style={{
                  borderColor: "rgba(210, 83, 83, 0.45)",
                  color: "#9E3B3B",
                }}
              >
                Nuptials Info
              </a>
              <a
                href="/attire"
                className="px-3 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                style={{
                  borderColor: "rgba(210, 83, 83, 0.45)",
                  color: "#9E3B3B",
                }}
              >
                Attire
              </a>
              <a
                href="/table"
                className="px-3 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                style={{
                  borderColor: "rgba(158, 28, 96, 0.3)",
                  color: "#811844",
                }}
              >
                Check Your Table
              </a>
            </div>

            <a
              href="https://maps.app.goo.gl/gCBkJxxFTHMKc7Fy5"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-medium tracking-wide shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #9E1C60 0%, #811844 50%, #F5DAA7 100%)",
                color: "#fff",
              }}
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Edge navigation arrows */}
      
    
    </section>
  );
}
