import PhoneMockup from "./PhoneMockup";
import WaitlistForm from "./WaitlistForm";

const steps = [
  {
    number: "01",
    title: "Describe your business",
    description:
      "Tell the AI what you sell, where you're based, and which weekends you're free. Takes about 30 seconds.",
  },
  {
    number: "02",
    title: "Get matched events instantly",
    description:
      "The agent searches hundreds of markets and craft fairs and returns only the ones that fit your product, location, and schedule.",
  },
  {
    number: "03",
    title: "Apply with everything you need",
    description:
      "Each result comes with the event name, date, booth fee, and an Apply button. No more hunting for the organizer's contact info.",
  },
];

const painPoints = [
  "Scrolling Facebook groups for hours with no clear results",
  "Finding an event after its application deadline already closed",
  "Paying booth fees for events that attract the wrong crowd",
  "Keeping track of applications across a dozen different websites",
];

export default function Home() {
  return (
    <div className="min-h-full bg-white font-sans">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                Your personal AI event scout
              </span>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                An AI agent that finds{" "}
                <span className="text-indigo-600">vendor markets and events</span>{" "}
                for you
              </h1>

              <p className="text-lg text-zinc-600 leading-relaxed">
                Tell our AI what you sell, where you&apos;re based, and what
                weekends you&apos;re free — and it surfaces the best vendor
                markets and craft fairs for you.
              </p>

              <p className="text-base font-medium text-zinc-700">
                No more digging through Facebook groups or outdated event sites.
                Just events that match your business.
              </p>

              <p className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">
                Built for vendors who are serious about growing.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#try"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-base font-semibold text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
                >
                  Try the AI Agent — Starting at $19
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-zinc-400">
                Free during beta · No credit card required
              </p>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain points ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-20">
        {/* Background orbs */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-900 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-900 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400">
              Sound familiar?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Finding events shouldn&apos;t be a second job.
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Vendors spend 5–10 hours a month hunting for the right markets.
              That&apos;s time you could spend making, selling, or resting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 px-5 py-5 backdrop-blur-sm"
              >
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500/15 ring-1 ring-red-500/25">
                  <span className="text-[11px] font-bold text-red-400">✕</span>
                </div>
                <span className="text-sm text-zinc-300 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">
              How it works
            </h2>
            <p className="text-zinc-500">
              One conversation. Five matched events. Done.
            </p>
          </div>

          <div className="relative flex flex-col gap-0">
            {/* Connector line */}
            <div className="absolute left-6 top-12 bottom-12 w-px bg-indigo-100 hidden sm:block" />

            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-6 items-start py-6">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm z-10">
                  {i + 1}
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / signup ─────────────────────────────────── */}
      <section
        id="try"
        className="px-6 py-20 bg-gradient-to-b from-indigo-50 to-white"
      >
        <div className="mx-auto max-w-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 mb-3">
              Try the AI agent free
            </h2>
            <p className="text-zinc-500">
              We&apos;re onboarding vendors in small batches. Join the list and
              be among the first to use it.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 px-6 py-8 text-center text-sm text-zinc-400">
        <p>
          Your personal AI event scout — built for vendors serious about
          growing.
        </p>
      </footer>
    </div>
  );
}
