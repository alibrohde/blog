"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { StarButton } from "@/components/ui/star-button";

function useTypewriter(text: string, speed = 40, startTyping = false) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!startTyping) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayed, done };
}

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const { displayed: tagline, done: typingDone } = useTypewriter("Subscribe to receive my newsletter.", 35, inView);

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
        <p className="text-sm text-[#6366f1] dark:text-[#6BADA3]">
          You're subscribed.
        </p>
      </div>
    );
  }

  return (
    <div className="my-12" ref={ref}>
      <p className="text-sm text-stone-500 dark:text-stone-400 mb-4 min-h-[1.25rem]">
        {tagline}
        {!typingDone && (
          <span className="inline-block w-[2px] h-[0.9em] bg-stone-400 dark:bg-stone-500 ml-0.5 align-text-bottom animate-pulse" />
        )}
      </p>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-grow text-sm bg-transparent border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-2 focus:outline-none focus:border-[#6366f1] dark:focus:border-[#6BADA3] transition-colors placeholder:text-stone-400 dark:placeholder:text-stone-500"
        />
        <StarButton
          lightColor="#9ca3af"
          className="rounded-lg cursor-pointer"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </StarButton>
      </form>
      {status === "error" && (
        <p className="text-xs text-stone-500 mt-2">Something went wrong.</p>
      )}
    </div>
  );
}
