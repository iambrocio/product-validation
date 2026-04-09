import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-full bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-4xl">
          🎉
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-zinc-900">
            You&apos;re on the list!
          </h1>
          <p className="text-zinc-500 leading-relaxed">
            We&apos;ll reach out as soon as early access is ready. Keep an eye
            on your inbox.
          </p>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-white px-6 py-5 text-sm text-zinc-600 leading-relaxed shadow-sm">
          In the meantime, think about what markets you&apos;d love to sell at
          — our AI will find them for you.
        </div>

        <Link
          href="/"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
