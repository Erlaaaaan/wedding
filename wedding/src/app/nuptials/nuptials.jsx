export default function NuptialsSection() {
  const theme = {
    blush: "#EA7B7B",
    coral: "#D25353",
    wine: "#9E3B3B",
    cream: "#FFEAD3",
  };

  const entourage = [
    {
      title: "Parents of the Groom",
      names: ["Mr. Groom Father (placeholder)", "Mrs. Groom Mother (placeholder)"],
    },
    {
      title: "Parents of the Bride",
      names: ["Mr. Bride Father (placeholder)", "Mrs. Bride Mother (placeholder)"],
    },
    {
      title: "Principal Sponsors",
      names: [
        "Principal Sponsor 1 (placeholder)",
        "Principal Sponsor 2 (placeholder)",
        "Principal Sponsor 3 (placeholder)",
        "Principal Sponsor 4 (placeholder)",
      ],
    },
    {
      title: "Secondary Sponsors",
      names: [
        "Secondary Sponsor 1 (placeholder)",
        "Secondary Sponsor 2 (placeholder)",
        "Secondary Sponsor 3 (placeholder)",
        "Secondary Sponsor 4 (placeholder)",
      ],
    },
    {
      title: "Best Men",
      names: ["Best Man 1 (placeholder)", "Best Man 2 (placeholder)"],
    },
    {
      title: "Maid of Honor",
      names: ["Maid of Honor (placeholder)"],
    },
    {
      title: "Groomsmen",
      names: [
        "Groomsman 1 (placeholder)",
        "Groomsman 2 (placeholder)",
        "Groomsman 3 (placeholder)",
        "Groomsman 4 (placeholder)",
      ],
    },
    {
      title: "Bridesmaids",
      names: [
        "Bridesmaid 1 (placeholder)",
        "Bridesmaid 2 (placeholder)",
        "Bridesmaid 3 (placeholder)",
        "Bridesmaid 4 (placeholder)",
      ],
    },
    {
      title: "Flower Girl",
      names: ["Flower Girl (placeholder)"],
    },
    {
      title: "Ring Bearer",
      names: ["Ring Bearer (placeholder)"],
    },
  ];

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
        <div className="max-w-2xl mb-10">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-2"
            style={{ color: theme.wine }}
          >
            Nuptials
          </p>
          <h1
            className="text-3xl sm:text-4xl font-semibold mb-3"
            style={{ color: theme.coral }}
          >
            Entourage (placeholder list)
          </h1>
          <p className="text-sm" style={{ color: theme.wine }}>
            Replace the placeholders with the real names anytime.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entourage.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border shadow-lg p-6 bg-white/85 backdrop-blur-sm"
              style={{
                borderColor: "rgba(158,59,59,0.22)",
                backgroundImage: `radial-gradient(circle at 0% 0%, rgba(255,234,211,0.55), rgba(255,255,255,0.0) 60%)`,
              }}
            >
              <p
                className="text-[11px] uppercase tracking-[0.3em] mb-2"
                style={{ color: theme.wine }}
              >
                {group.title}
              </p>
              <ul className="space-y-1.5 text-sm" style={{ color: theme.wine }}>
                {group.names.map((name) => (
                  <li key={name} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: theme.blush }}
                    />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
