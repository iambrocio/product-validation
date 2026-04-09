"use client";

import { useActionState } from "react";
import { submitWaitlist } from "./actions";

type State = { success: boolean; error?: string } | null;

export default function WaitlistForm() {
  const [state, action, isPending] = useActionState(submitWaitlist, null);

  if (state?.success) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          You&apos;re on the list!
        </h3>
        <p className="text-green-700">
          We&apos;ll reach out as soon as early access is ready. Keep an eye on
          your inbox.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-zinc-700">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="rounded-xl border border-zinc-300 px-4 py-3 text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="vendorType" className="text-sm font-medium text-zinc-700">
          What do you sell?
        </label>
        <select
          id="vendorType"
          name="vendorType"
          className="rounded-xl border border-zinc-300 px-4 py-3 text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
        >
          <option value="">Select a category…</option>
          <option value="food-beverage">Food &amp; Beverage</option>
          <option value="handmade-crafts">Handmade &amp; Crafts</option>
          <option value="clothing-accessories">Clothing &amp; Accessories</option>
          <option value="art">Art &amp; Photography</option>
          <option value="plants-flowers">Plants &amp; Flowers</option>
          <option value="vintage-antiques">Vintage &amp; Antiques</option>
          <option value="health-wellness">Health &amp; Wellness</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="painPoint" className="text-sm font-medium text-zinc-700">
          What&apos;s your biggest challenge finding events?
        </label>
        <textarea
          id="painPoint"
          name="painPoint"
          rows={3}
          placeholder="e.g. I spend hours Googling, events are last-minute, hard to know if it's worth the booth fee…"
          className="rounded-xl border border-zinc-300 px-4 py-3 text-base text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />
      </div>

      {state?.error && (
        <p className="text-sm text-red-600">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? "Starting…" : "Try the AI Agent — Starting at $19"}
      </button>

      <p className="text-xs text-zinc-500 text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
