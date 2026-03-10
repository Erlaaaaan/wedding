export default function AttireSection() {
  const theme = {
    blush: "#EA7B7B",
    coral: "#D25353",
    wine: "#213C51",
    cream: "#FFEAD3",
  };

  const swatches = [
    { label: "Blush", hex: theme.blush },
    { label: "Coral", hex: theme.coral },
    { label: "Wine", hex: theme.wine },
    { label: "Cream", hex: theme.cream },
  ];

  const miniLineup = [
    { type: "Gown", primary: theme.blush, accent: theme.cream },
    { type: "Gown", primary: theme.blush, accent: theme.cream },
    { type: "Gown", primary: theme.blush, accent: theme.cream },
    { type: "Suit", primary: theme.wine, accent: theme.cream },
    { type: "Suit", primary: theme.wine, accent: theme.cream },
  ];

  const groupLineup = [
    { type: "Gown", primary: theme.blush, accent: theme.cream },
    { type: "Gown", primary: theme.blush, accent: theme.cream },
    { type: "Gown", primary: theme.blush, accent: theme.cream },
    { type: "Suit", primary: theme.wine, accent: theme.cream },
    { type: "Suit", primary: theme.wine, accent: theme.cream },
    { type: "Suit", primary: theme.wine, accent: theme.cream },
   
  ];

  const Figure = ({
    type,
    primary,
    accent,
    size = "md",
    variant = 0,
    formality = "formal",
  }) => {
    const sizes = {
      sm: { wrap: "w-[58px] h-[92px]", viewBox: "0 0 70 110" },
      md: { wrap: "w-[82px] h-[128px]", viewBox: "0 0 70 110" },
      lg: { wrap: "w-[96px] h-[150px]", viewBox: "0 0 70 110" },
    };
    const s = sizes[size] ?? sizes.md;

    const isSemi = formality === "semi";
    const hair = ["#3B2A2A", "#2B2323", "#4A2F2F"][variant % 3];
    const skin = accent;
    const shadow = "rgba(0,0,0,0.10)";
    const highlight = "rgba(255,255,255,0.22)";

    return (
      <div className={`relative ${s.wrap}`}>
        <svg
          viewBox={s.viewBox}
          className="w-full h-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`cloth-${type}-${variant}-${primary}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={highlight} />
              <stop offset="18%" stopColor={primary} />
              <stop offset="100%" stopColor={primary} />
            </linearGradient>
            <linearGradient id={`shine-${type}-${variant}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.26)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <filter id={`softShadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor={shadow} />
            </filter>
          </defs>

          {/* ground shadow */}
          <ellipse cx="35" cy="104" rx="18" ry="4.5" fill="rgba(0,0,0,0.08)" />

          {/* head */}
          <circle cx="35" cy="16" r="7.2" fill={skin} />
          {/* hair */}
          <path
            d="M28 14 C29 8, 33 6, 35 6 C40 6, 44 9, 45 14 C44 12, 41 12, 38 13 C35 14, 32 14, 28 14 Z"
            fill={hair}
            opacity="0.95"
          />

          {/* neck */}
          <rect x="32" y="22" width="6" height="6" rx="2.5" fill={skin} opacity="0.95" />

          {/* arms */}
          <path
            d="M22 40 C18 46, 17 54, 18 62 C19 68, 23 72, 25 70 C22 60, 24 48, 29 42 Z"
            fill={skin}
            opacity="0.95"
          />
          <path
            d="M48 40 C52 46, 53 54, 52 62 C51 68, 47 72, 45 70 C48 60, 46 48, 41 42 Z"
            fill={skin}
            opacity="0.95"
          />

          {type === "Gown" ? (
            <>
              {/* bodice */}
              <path
                d="M28 28 C30 26, 32 25, 35 25 C38 25, 40 26, 42 28
                   C43 33, 42 40, 41 44
                   C39 46, 37 47, 35 47
                   C33 47, 31 46, 29 44
                   C28 40, 27 33, 28 28 Z"
                fill={`url(#cloth-${type}-${variant}-${primary})`}
                filter={`url(#softShadow-${variant})`}
              />

              {/* skirt */}
              {isSemi ? (
                /* cocktail / semi-formal dress (shorter) */
                <path
                  d="M24 44 C28 50, 31 54, 35 54 C39 54, 42 50, 46 44
                     C49 54, 51 62, 50 76
                     C45 79, 40 81, 35 81
                     C30 81, 25 79, 20 76
                     C19 62, 21 54, 24 44 Z"
                  fill={primary}
                  filter={`url(#softShadow-${variant})`}
                />
              ) : (
                /* formal gown (long) */
                <path
                  d="M20 44 C25 50, 29 55, 35 55 C41 55, 45 50, 50 44
                     C55 58, 58 74, 56 98
                     C49 101, 42 103, 35 103
                     C28 103, 21 101, 14 98
                     C12 74, 15 58, 20 44 Z"
                  fill={primary}
                  filter={`url(#softShadow-${variant})`}
                />
              )}

              {/* drape highlight */}
              {isSemi ? (
                <>
                  <path
                    d="M32 48 C31 58, 31 68, 32 78"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M30 48 C28 62, 29 80, 31 98"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                  <path
                    d="M40 48 C42 62, 41 80, 39 98"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </>
              )}

              {/* neckline shine */}
              <path
                d="M28 30 C30 29, 32 28, 35 28 C38 28, 40 29, 42 30"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.4"
                strokeLinecap="round"
                opacity="0.7"
              />

              {/* hem */}
              {isSemi ? (
                <path
                  d="M20 76 C26 80, 30 81, 35 81 C40 81, 44 80, 50 76"
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="1.2"
                  opacity="0.55"
                  fill="none"
                />
              ) : (
                <path
                  d="M14 98 C22 102, 29 104, 35 104 C41 104, 48 102, 56 98"
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="1.2"
                  opacity="0.6"
                  fill="none"
                />
              )}
            </>
          ) : (
            <>
              {/* jacket */}
              <path
                d="M22 30 C26 28, 30 27, 35 27 C40 27, 44 28, 48 30
                   C52 38, 52 50, 50 66
                   C47 70, 42 72, 35 72
                   C28 72, 23 70, 20 66
                   C18 50, 18 38, 22 30 Z"
                fill={primary}
                filter={`url(#softShadow-${variant})`}
              />

              {/* shirt opening / lapels */}
              <path
                d="M28 32 C31 34, 33 38, 35 42 C37 38, 39 34, 42 32
                   C41 44, 40 56, 41 70
                   C38 71, 36 72, 35 72
                   C34 72, 32 71, 29 70
                   C30 56, 29 44, 28 32 Z"
                fill={skin}
                opacity="0.92"
              />

              {/* tie (formal only) */}
              {!isSemi && (
                <>
                  <path
                    d="M35 36 L38 42 L35 48 L32 42 Z"
                    fill={theme.coral}
                    opacity="0.95"
                  />
                  <rect
                    x="33.6"
                    y="48"
                    width="2.8"
                    height="18"
                    rx="1.4"
                    fill={theme.coral}
                    opacity="0.95"
                  />
                </>
              )}

              {/* open collar hint (semi-formal) */}
              {isSemi && (
                <path
                  d="M31 36 C33 38, 34 40, 35 43 C36 40, 37 38, 39 36"
                  stroke="rgba(0,0,0,0.18)"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  opacity="0.55"
                  fill="none"
                />
              )}

              {/* pants */}
              <path
                d="M24 72 C28 74, 32 75, 35 75 C38 75, 42 74, 46 72
                   C46 84, 45 94, 44 103
                   L38 103 C38 95, 37 86, 35 78
                   C33 86, 32 95, 32 103
                   L26 103 C25 94, 24 84, 24 72 Z"
                fill={primary}
                filter={`url(#softShadow-${variant})`}
              />

              {/* suit shine */}
              <path
                d="M23 34 C28 33, 32 32, 35 32 C38 32, 42 33, 47 34
                   C45 52, 44 62, 45 70
                   C42 71, 39 72, 35 72
                   C31 72, 28 71, 25 70
                   C26 62, 25 52, 23 34 Z"
                fill={`url(#shine-${type}-${variant})`}
                opacity="0.55"
              />
            </>
          )}
        </svg>
      </div>
    );
  };

  return (
    <section
      className="relative py-16 px-6 lg:px-20 overflow-hidden"
      style={{ backgroundColor: theme.cream }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-watercolor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
          transform: "scale(1.02)",
        }}
      />
      {/* Soft overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,234,211,0.78) 0%, rgba(234,123,123,0.16) 45%, rgba(255,234,211,0.70) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          className="max-w-3xl mx-auto rounded-[2.25rem] border shadow-2xl overflow-hidden"
          style={{
            borderColor: "rgba(158,59,59,0.22)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.78) 100%)",
          }}
        >
          <div className="px-7 sm:px-12 py-10 sm:py-12">
            <div className="text-center">
              <p
                className="text-[11px] uppercase tracking-[0.35em] mb-2"
                style={{ color: theme.wine }}
              >
                Attire Guide
              </p>
              <h1
                className="text-3xl sm:text-4xl font-semibold tracking-[0.12em]"
                style={{ color: theme.wine }}
              >
                Dress Code
              </h1>
              <p className="text-sm mt-3" style={{ color: theme.wine }}>
                Palette-inspired. Replace rules later if needed.
              </p>

              <div
                className="mx-auto mt-5 h-px w-44"
                style={{ backgroundColor: "rgba(158,59,59,0.25)" }}
              />
            </div>

            {/* Small lineup (like top photo) */}
            <div className="mt-10 text-center">
              <p
                className="text-[11px] uppercase tracking-[0.35em] mb-4"
                style={{ color: theme.coral }}
              >
                Guests • Semi-formal
              </p>
              <div className="flex items-end justify-center gap-4 sm:gap-5 flex-wrap">
                {miniLineup.map((p, idx) => (
                  <div
                    key={idx}
                    className="px-1"
                  >
                    <Figure
                      type={p.type}
                      primary={p.primary}
                      accent={p.accent}
                      size="sm"
                      variant={idx}
                      formality="semi"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Big lineup (like middle photo) */}
            <div className="mt-10 text-center">
              <p
                className="text-[11px] uppercase tracking-[0.35em] mb-4"
                style={{ color: theme.coral }}
              >
                Entourage • Formal
              </p>
              <div className="flex items-end justify-center gap-4 sm:gap-5 flex-wrap">
                {groupLineup.map((p, idx) => (
                  <div
                    key={idx}
                    className="px-1"
                  >
                    <Figure
                      type={p.type}
                      primary={p.primary}
                      accent={p.accent}
                      size="md"
                      variant={idx}
                      formality="formal"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Palette strip */}
            <div className="mt-10 text-center">
              <div className="flex items-center justify-center gap-2">
                {swatches.map((s) => (
                  <div
                    key={s.hex}
                    className="w-10 h-6 rounded-md border"
                    style={{
                      backgroundColor: s.hex,
                      borderColor: "rgba(158,59,59,0.25)",
                    }}
                    aria-label={s.label}
                    title={`${s.label} ${s.hex}`}
                  />
                ))}
              </div>
              <p className="text-[11px] mt-3" style={{ color: theme.wine }}>
                Color palette: {swatches.map((s) => s.hex).join(" • ")}
              </p>
            </div>

           


            {/* Bottom actions */}
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="/form"
                className="px-7 py-3 rounded-full text-xs font-medium shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #D25353 0%, #9E3B3B 60%, #FFEAD3 100%)",
                  color: "#fff",
                }}
              >
                RSVP Form
              </a>
              <a
                href="/nuptials"
                className="px-7 py-3 rounded-full text-xs font-medium border bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                style={{
                  borderColor: "rgba(158,59,59,0.28)",
                  color: theme.wine,
                }}
              >
                Nuptials
              </a>
              <a
                href="/map"
                className="px-7 py-3 rounded-full text-xs font-medium border bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-colors"
                style={{
                  borderColor: "rgba(158,59,59,0.28)",
                  color: theme.wine,
                }}
              >
                Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
