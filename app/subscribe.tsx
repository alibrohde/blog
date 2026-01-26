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
      <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 my-8">
        <p className="text-center text-neutral-600 dark:text-neutral-400">
          Thanks for subscribing!
        </p>
      </div>
    );
  }

  return (
    <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 my-8">
      <h3 className="font-semibold mb-2 dark:text-gray-100">Subscribe</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
        Get new posts delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-grow px-3 py-2 text-sm border border-neutral-200 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-4 py-2 text-sm bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 disabled:opacity-50 transition-colors"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-sm text-red-500 mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
