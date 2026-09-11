import { Quote, Star } from "lucide-react";

import type { Testimonial } from "@/lib/data";
import { cn } from "@/lib/utils";

const AVATAR_BG: Record<NonNullable<Testimonial["avatarColor"]>, string> = {
  plum: "bg-plum-900 text-cream",
  peach: "bg-peach-400 text-plum-950",
  rose: "bg-rose-400 text-white",
  cream: "bg-cream text-plum-900 ring-1 ring-plum-900/10",
  indigo: "bg-indigo-600 text-white",
  moss: "bg-emerald-700 text-white",
};

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join("");
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-plum-900/5 sm:p-7">
      <Quote
        className="mb-4 size-7 shrink-0 fill-plum-100 text-plum-200"
        strokeWidth={1.5}
      />

      <p className="flex-1 text-[0.95rem] leading-relaxed text-plum-800">
        {testimonial.quote}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-plum-900/5 pt-5">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold",
            AVATAR_BG[testimonial.avatarColor],
          )}
        >
          {initials(testimonial.author)}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-sm font-semibold text-plum-900">
            {testimonial.author}
          </p>
          {testimonial.dogHint && (
            <p className="truncate text-xs italic text-plum-400">
              {testimonial.dogHint}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <div className="flex gap-0.5" aria-label="Note 5 sur 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3 fill-peach-400 text-peach-400"
                strokeWidth={0}
              />
            ))}
          </div>
          <span className="text-[0.68rem] text-plum-400">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
}
