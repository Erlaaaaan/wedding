"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export default function Form() {
  const [status, setStatus] = useState("attending"); // attending | not_attending
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isAttending = status === "attending";

  const summary = useMemo(() => {
    return {
      statusLabel: isAttending ? "Attending" : "Not attending",
    };
  }, [isAttending]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="relative min-h-[calc(100vh-72px)] overflow-hidden"
      style={{ backgroundColor: "#F5E6E8" }}
    >
      {/* Background */}
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
        className="absolute inset-0"
        style={{ background: "rgba(245, 230, 232, 0.7)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div
          className="absolute -left-24 top-10 w-72 h-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(245,218,167,0.85), transparent 60%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-0 w-80 h-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 85% 85%, rgba(158,28,96,0.18), transparent 55%)",
          }}
        />
        {/* soft floral line art corners */}
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

      <div className="relative z-10 px-6 py-16 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-3"
              style={{ color: "#811844" }}
            >
              RSVP Confirmation
            </p>
            <h1
              className="text-3xl sm:text-4xl font-semibold"
              style={{ color: "#9E1C60" }}
            >
              You are invited to celebrate with us
            </h1>
            <p className="mt-3 text-sm" style={{ color: "#811844" }}>
              Please confirm your attendance so we can prepare your seat.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form Card */}    
            <div
              className="lg:col-span-3 rounded-3xl border shadow-lg overflow-hidden"
              style={{
                borderColor: "rgba(158, 28, 96, 0.22)",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,232,238,0.92))",
              }}
            >
              <div
                className="px-6 sm:px-8 py-6 border-b"
                style={{ borderColor: "rgba(158, 28, 96, 0.14)" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2
                      className="text-lg sm:text-xl font-semibold"
                      style={{ color: "#811844" }}
                    >
                      RSVP Form
                    </h2>
                    <p className="text-xs mt-1" style={{ color: "#9E1C60" }}>
                      Andrea ♥ Erlan
                    </p>
                  </div>
                  
                </div>
              </div>

              <form onSubmit={onSubmit} className="px-6 sm:px-8 py-8">
                {/* Status */}    
                <div className="mb-6">
                  <label
                    className="block text-xs uppercase tracking-[0.25em] mb-3"
                    style={{ color: "#811844" }}
                  >
                    Will you attend?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setStatus("attending")}
                      className="w-full px-4 py-3 rounded-2xl border text-left transition-colors"
                      style={{
                        borderColor:
                          status === "attending"
                            ? "rgba(158, 28, 96, 0.8)"
                            : "rgba(158, 28, 96, 0.22)",
                        backgroundColor:
                          status === "attending"
                            ? "rgba(158, 28, 96, 0.10)"
                            : "rgba(255,255,255,0.6)",
                        color: "#811844",
                      }}
                    >
                      <div className="font-medium">Yes, I will attend</div>
                      <div className="text-xs opacity-80">
                        We can’t wait to celebrate with you.
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus("not_attending")}
                      className="w-full px-4 py-3 rounded-2xl border text-left transition-colors"
                      style={{
                        borderColor:
                          status === "not_attending"
                            ? "rgba(129, 24, 68, 0.9)"
                            : "rgba(158, 28, 96, 0.22)",
                        backgroundColor:
                          status === "not_attending"
                            ? "rgba(129, 24, 68, 0.08)"
                            : "rgba(255,255,255,0.6)",
                        color: "#811844",
                      }}
                    >
                      <div className="font-medium">Sorry, I can’t make it</div>
                      <div className="text-xs opacity-80">
                        We’ll miss you—thank you for letting us know.
                      </div>
                    </button>
                  </div>
                </div>

                {/* Fields */}    
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-[0.25em] mb-2"
                      style={{ color: "#811844" }}
                    >
                      Full Name
                    </label>
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-2xl border bg-white/70 outline-none focus:ring-2"
                      style={{
                        borderColor: "rgba(158, 28, 96, 0.22)",
                        color: "#811844",
                        boxShadow: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-[0.25em] mb-2"
                      style={{ color: "#811844" }}
                    >
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="name@email.com"
                      className="w-full px-4 py-3 rounded-2xl border bg-white/70 outline-none focus:ring-2"
                      style={{
                        borderColor: "rgba(158, 28, 96, 0.22)",
                        color: "#811844",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-[0.25em] mb-2"
                      style={{ color: "#811844" }}
                    >
                      Phone
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Optional"
                      className="w-full px-4 py-3 rounded-2xl border bg-white/70 outline-none focus:ring-2"
                      style={{
                        borderColor: "rgba(158, 28, 96, 0.22)",
                        color: "#811844",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-[0.25em] mb-2"
                      style={{ color: "#811844" }}
                    >
                     Note
                   </label>
                   <p className="text-xs" style={{ color: "#9E1C60" }}>
                     Leave a message for the couple below.
                   </p>
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    className="block text-xs uppercase tracking-[0.25em] mb-2"
                    style={{ color: "#811844" }}
                  >
                    Message for the couple
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Write your wishes..."
                    className="w-full px-4 py-3 rounded-2xl border bg-white/70 outline-none focus:ring-2 resize-none"
                    style={{
                      borderColor: "rgba(158, 28, 96, 0.22)",
                      color: "#811844",
                    }}
                  />
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
                  <button
                    type="submit"
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
                    Submit RSVP
                  </button>
                  <p className="text-xs" style={{ color: "#811844" }}>
                    By submitting, you confirm the details are correct.
                  </p>
                </div>

                {submitted && (
                  <div
                    className="mt-6 rounded-2xl border px-5 py-4"
                    style={{
                      borderColor: "rgba(129, 24, 68, 0.25)",
                      background: "rgba(255,255,255,0.7)",
                      color: "#811844",
                    }}
                  >
                    <div className="font-semibold" style={{ color: "#9E1C60" }}>
                      Thank you, {fullName || "Guest"}!
                    </div>
                    <div className="text-sm mt-1">
                      Status: <span className="font-medium">{summary.statusLabel}</span>
                    </div>
                    <div className="text-xs mt-2 opacity-80">
                      (Note: This is a front-end only form for now—no data is sent
                      to a server yet.)
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Side details card */}    
            <div className="lg:col-span-2">
              <div
                className="rounded-3xl border shadow-lg p-6 sm:p-8"
                style={{
                  borderColor: "rgba(158, 28, 96, 0.18)",
                  background: "rgba(255,255,255,0.65)",
                }}
              >
                <h3 className="text-lg font-semibold" style={{ color: "#811844" }}>
                  Wedding Details
                </h3>
                <div className="mt-4 space-y-3 text-sm" style={{ color: "#811844" }}>
                  <div>
                    <div
                      className="text-xs uppercase tracking-[0.25em]"
                      style={{ color: "#9E1C60" }}
                    >
                      Date
                    </div>
                    <div>Saturday • 10 January 2026</div>
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-[0.25em]"
                      style={{ color: "#9E1C60" }}
                    >
                      Time
                    </div>
                    <div>3:00 PM Ceremony • 5:00 PM Reception</div>
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-[0.25em]"
                      style={{ color: "#9E1C60" }}
                    >
                      Location
                    </div>
                    <div>Manila, Philippines</div>
                  </div>
                  <div className="pt-2">
                    <div
                      className="text-xs uppercase tracking-[0.25em]"
                      style={{ color: "#9E1C60" }}
                    >
                      Note
                    </div>
                    <div className="text-xs opacity-90">
                      Please arrive a little early. We can’t wait to celebrate
                      with you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edge navigation arrows */}
     
     
    </section>
  );
}

