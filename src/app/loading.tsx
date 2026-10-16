export default function Loading() {
  return (
    <div
      className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Loading page…</span>

      <div className="mb-10 flex justify-end">
        <div className="h-4 w-44 animate-pulse rounded bg-line" />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        <div className="panel h-80 animate-pulse md:col-span-4" />
        <div className="panel h-80 animate-pulse md:col-span-2" />
        <div className="panel h-64 animate-pulse md:col-span-4" />
        <div className="panel h-64 animate-pulse md:col-span-2" />
        <div className="panel h-72 animate-pulse md:col-span-2" />
        <div className="panel h-72 animate-pulse md:col-span-4" />
      </div>
    </div>
  );
}
