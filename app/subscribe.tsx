"use client";

import { useState } from "react";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="my-14 rounded-xl border border-stone-200 dark:border-stone-700 p-6">
        <p className="text-sm text-[#B8614A] dark:text-[#6BADA3]">
          You&rsquo;re subscribed.
        </p>
      </div>
    );
  }

  return (
    <div className="my-14 rounded-xl border border-stone-200 dark:border-stone-700 p-6">
      <p className="text-sm font-medium text-stone-800 dark:text-stone-100 mb-1">Stay in the loop</p>
      <p className="text-xs text-stone-500 dark:text-stone-500 mb-4">Occasional posts on investing, AI, and building.</p>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
          className="flex-grow text-sm bg-transparent border-b border-stone-300 dark:border-stone-600 py-2 focus:outline-none focus:border-[#B8614A] dark:focus:border-[#6BADA3] transition-colors placeholder:text-stone-400 dark:placeholder:text-stone-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-sm px-4 py-1.5 rounded-full border border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 hover:border-[#B8614A] hover:text-[#B8614A] dark:hover:border-[#6BADA3] dark:hover:text-[#6BADA3] disabled:opacity-50 transition-colors"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-stone-500 mt-2">Something went wrong.</p>
      )}
    </div>
  );
}
