export default function NuptialsSection() {
  const theme = {
    blush: "#EA7B7B",
    coral: "#D25353",
    wine: "#9E3B3B",
    cream: "#FFEAD3",
  };

  const parentsGroom = [
    "Mr. Groom Father (placeholder)",
    "Mrs. Groom Mother (placeholder)",
  ];
  const parentsBride = [
    "Mr. Bride Father (placeholder)",
    "Mrs. Bride Mother (placeholder)",
  ];

  const principalSponsors = [
    "Principal Sponsor 1 (placeholder)",
    "Principal Sponsor 2 (placeholder)",
    "Principal Sponsor 3 (placeholder)",
    "Principal Sponsor 4 (placeholder)",
    "Principal Sponsor 5 (placeholder)",
    "Principal Sponsor 6 (placeholder)",
  ];

  const secondarySponsors = [
    "Secondary Sponsor 1 (placeholder)",
    "Secondary Sponsor 2 (placeholder)",
    "Secondary Sponsor 3 (placeholder)",
    "Secondary Sponsor 4 (placeholder)",
  ];

  const bestMan = ["Best Man (placeholder)"];
  const maidOfHonor = ["Maid of Honor (placeholder)"];

  const groomsmen = [
    "Groomsman 1 (placeholder)",
    "Groomsman 2 (placeholder)",
    "Groomsman 3 (placeholder)",
    "Groomsman 4 (placeholder)",
    "Groomsman 5 (placeholder)",
    "Groomsman 6 (placeholder)",
  ];

  const bridesmaids = [
    "Bridesmaid 1 (placeholder)",
    "Bridesmaid 2 (placeholder)",
    "Bridesmaid 3 (placeholder)",
    "Bridesmaid 4 (placeholder)",
    "Bridesmaid 5 (placeholder)",
    "Bridesmaid 6 (placeholder)",
  ];

  const flowerGirl = ["Flower Girl (placeholder)"];
  const ringBearer = ["Ring Bearer (placeholder)"];

  const splitTwoCols = (arr) => {
    const mid = Math.ceil(arr.length / 2);
    return [arr.slice(0, mid), arr.slice(mid)];
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

      <div className="relative max-w-3xl mx-auto">
        <div
          className="rounded-[2.25rem] border shadow-2xl overflow-hidden"
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            background: "#FBF9F5",
          }}
        >
          <div className="px-8 sm:px-10 py-10 sm:py-12">
            {/* Header */}
            <div className="text-center mb-10">
              <p
                className="text-[13px] tracking-[0.28em] mb-2 uppercase"
                style={{ color: theme.wine }}
              >
                Erlan Justin & Andrea
              </p>
              <h1
                className="text-3xl sm:text-4xl tracking-[0.18em] uppercase"
                style={{ color: theme.wine }}
              >
                Nuptials
              </h1>
              <div
                className="mx-auto mt-4 h-px w-40"
                style={{ backgroundColor: "rgba(0,0,0,0.18)" }}
              />
            </div>

            {/* Parents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
              <div className="text-center">
                <div
                  className="text-[11px] tracking-[0.28em] uppercase mb-4"
                  style={{ color: theme.wine }}
                >
                  Parents of the Groom
                </div>
                <div className="space-y-1 text-sm" style={{ color: theme.wine }}>
                  {parentsGroom.map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-[11px] tracking-[0.28em] uppercase mb-4"
                  style={{ color: theme.wine }}
                >
                  Parents of the Bride
                </div>
                <div className="space-y-1 text-sm" style={{ color: theme.wine }}>
                  {parentsBride.map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Principal Sponsors */}
            <div className="text-center mb-10">
              <div
                className="text-xs tracking-[0.32em] uppercase mb-4"
                style={{ color: theme.wine }}
              >
                Principal Sponsors
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {splitTwoCols(principalSponsors).map((col, idx) => (
                  <div key={idx} className="space-y-1" style={{ color: theme.wine }}>
                    {col.map((n) => (
                      <div key={n}>{n}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Sponsors */}
            <div className="text-center mb-10">
              <div
                className="text-xs tracking-[0.32em] uppercase mb-4"
                style={{ color: theme.wine }}
              >
                Secondary Sponsors
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {splitTwoCols(secondarySponsors).map((col, idx) => (
                  <div key={idx} className="space-y-1" style={{ color: theme.wine }}>
                    {col.map((n) => (
                      <div key={n}>{n}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Best Man / Maid of Honor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 text-center text-sm">
              <div>
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: theme.wine }}
                >
                  Best Man
                </div>
                {bestMan.map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <div>
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: theme.wine }}
                >
                  Maid of Honor
                </div>
                {maidOfHonor.map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
            </div>

            {/* Groomsmen / Bridesmaids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10 text-center text-sm">
              <div>
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: theme.wine }}
                >
                  Groomsmen
                </div>
                <div className="space-y-1" style={{ color: theme.wine }}>
                  {groomsmen.map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
              </div>
              <div>
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: theme.wine }}
                >
                  Bridesmaids
                </div>
                <div className="space-y-1" style={{ color: theme.wine }}>
                  {bridesmaids.map((n) => (
                    <div key={n}>{n}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Flower girl / ring bearer */}
            <div className="text-center space-y-8 text-sm" style={{ color: theme.wine }}>
              <div>
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: theme.wine }}
                >
                  Flower Girl
                </div>
                {flowerGirl.map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <div>
                <div
                  className="text-[11px] tracking-[0.3em] uppercase mb-2"
                  style={{ color: theme.wine }}
                >
                  Ring Bearer
                </div>
                {ringBearer.map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 rounded-3xl border shadow-lg p-6 bg-white/85 backdrop-blur-sm"
          style={{
            borderColor: "rgba(158,59,59,0.22)",
            backgroundImage: `radial-gradient(circle at 10% 10%, ${theme.cream} 0%, rgba(255,255,255,0.0) 55%)`,
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p
                className="text-xs uppercase tracking-[0.3em]"
                style={{ color: theme.wine }}
              >
                Quick actions
              </p>
              <p className="text-sm mt-1" style={{ color: theme.wine }}>
                Next: replace placeholders with real names.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/eventflow"
                className="px-6 py-2.5 rounded-full text-xs font-medium shadow-md"
                style={{ backgroundColor: theme.coral, color: "#fff" }}
              >
                View Timeline
              </a>
              <a
                href="/attire"
                className="px-6 py-2.5 rounded-full text-xs font-medium border bg-white/80"
                style={{
                  borderColor: "rgba(158,59,59,0.28)",
                  color: theme.wine,
                }}
              >
                Dress Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
