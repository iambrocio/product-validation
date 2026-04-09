const events = [
  { name: "Sacramento Artisan Market", date: "Apr 12", fee: "$75" },
  { name: "Midtown Makers Fair", date: "Apr 19", fee: "$90" },
  { name: "Old Town Craft Bazaar", date: "May 3", fee: "$60" },
  { name: "East Sac Spring Market", date: "May 10", fee: "$85" },
  { name: "Rancho Cordova Art Fair", date: "May 17", fee: "$70" },
];

export default function PhoneMockup() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Phone frame */}
      <div className="relative w-72 rounded-[2.5rem] bg-zinc-900 p-2 shadow-2xl ring-1 ring-zinc-700">
        {/* Screen */}
        <div className="rounded-[2rem] bg-white overflow-hidden">
          {/* Notch */}
          <div className="flex justify-center pt-3 pb-1">
            <div className="w-20 h-1.5 rounded-full bg-zinc-900" />
          </div>

          {/* App bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-100">
            <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">V</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-900 leading-none">VendorFind AI</p>
              <p className="text-[10px] text-green-500 font-medium">● Online</p>
            </div>
          </div>

          {/* Chat area */}
          <div className="px-3 py-3 space-y-3 bg-zinc-50 min-h-[420px]">
            {/* User message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-indigo-600 px-3 py-2">
                <p className="text-white text-[11px] leading-relaxed">
                  Find me ceramic vendor markets in Sacramento this spring
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white border border-zinc-200 px-3 py-2 shadow-sm">
                <p className="text-zinc-700 text-[11px] leading-relaxed">
                  Found <span className="font-semibold text-indigo-600">5 matches</span> near Sacramento this spring ✨
                </p>
              </div>
            </div>

            {/* Event cards */}
            <div className="space-y-2">
              {events.map((event) => (
                <div
                  key={event.name}
                  className="rounded-xl bg-white border border-zinc-200 px-3 py-2 shadow-sm flex items-center justify-between gap-2"
                >
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-zinc-900 truncate leading-snug">
                      {event.name}
                    </p>
                    <p className="text-[9px] text-zinc-500">
                      {event.date} · Booth fee: {event.fee}
                    </p>
                  </div>
                  <button className="flex-shrink-0 rounded-lg bg-indigo-600 px-2 py-1 text-[9px] font-semibold text-white">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-t border-zinc-100 bg-white">
            <div className="flex-1 rounded-full bg-zinc-100 px-3 py-1.5">
              <p className="text-[10px] text-zinc-400">Message VendorFind AI…</p>
            </div>
            <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8M5 1l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Text overlay pill */}
      <div className="mt-5 rounded-full bg-zinc-900 px-5 py-2 shadow-lg">
        <p className="text-white text-sm font-medium text-center">
          Your next market is one message away.
        </p>
      </div>
    </div>
  );
}
