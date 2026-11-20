"use client";

export default function Error({ reset }) {
  return (
    <div className="container-x section-y text-center">
      <h1 className="font-display text-4xl font-extrabold">Something went wrong</h1>
      <p className="mt-3 text-[#524673]">Please try again.</p>
      <button type="button" onClick={reset} className="btn-primary mt-6">Try again</button>
    </div>
  );
}
