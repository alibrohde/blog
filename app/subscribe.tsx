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
      <div className="my-12">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          You're subscribed.
        </p>
      </div>
    );
  }

  return (
    <div className="my-12">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Subscribe via email"
          required
          className="flex-grow text-sm bg-transparent border-b border-neutral-300 dark:border-neutral-600 py-2 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 disabled:opacity-50 transition-colors"
        >
          {status === "loading" ? "..." : "→"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-neutral-500 mt-2">Something went wrong.</p>
      )}
    </div>
  );
}
