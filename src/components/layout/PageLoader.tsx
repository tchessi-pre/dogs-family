"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/data";

const SESSION_KEY = "dfLoaderShown";
const MIN_VISIBLE_MS = 750;
const FADE_MS = 450;

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Storage unavailable (e.g. private browsing) — treat as first visit.
    }

    const minDelay = alreadyShown ? 0 : MIN_VISIBLE_MS;
    const start = Date.now();
    document.body.style.overflow = "hidden";

    let fadeTimeout: number;
    let hideTimeout: number;

    function reveal() {
      const elapsed = Date.now() - start;
      const wait = Math.max(minDelay - elapsed, 0);
      fadeTimeout = window.setTimeout(() => {
        setFading(true);
        document.body.style.overflow = "";
        try {
          sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // Ignore — nothing to persist to.
        }
        hideTimeout = window.setTimeout(() => setVisible(false), FADE_MS);
      }, wait);
    }

    if (document.readyState === "complete") {
      reveal();
    } else {
      window.addEventListener("load", reveal, { once: true });
    }

    return () => {
      window.removeEventListener("load", reveal);
      window.clearTimeout(fadeTimeout);
      window.clearTimeout(hideTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed inset-0 z-100 flex items-center justify-center  transition-opacity ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <span className="sr-only">Chargement de {BRAND.name}…</span>
      <div className="relative flex size-24 items-center justify-center sm:size-28">
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-spin rounded-full border-[3px] border-plum-900/10 border-t-plum-400 motion-reduce:animate-none"
          style={{ animationDuration: "1.1s" }}
        />
        <span
          aria-hidden="true"
          className="flex size-[calc(100%-18px)] items-center justify-center overflow-hidden rounded-full border-2 border-plum-400 bg-white shadow-md motion-reduce:animate-none"
          style={{ animation: "loader-pulse 1.6s ease-in-out infinite" }}
        >
          <Image
            src="/logo2.jpeg"
            alt=""
            width={128}
            height={128}
            className="size-full object-cover"
            priority
            unoptimized
          />
        </span>
      </div>
    </div>
  );
}
