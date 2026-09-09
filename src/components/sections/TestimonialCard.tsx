import { ImagePlus, Heart, Sparkles, Star, Quote, MapPin } from "lucide-react";

import type { Testimonial } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { BRAND } from "@/lib/data";
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
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p.charAt(0).toUpperCase()).join("");
}

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const meta = testimonial.authorMeta;
  return (
    <Card className="h-full gap-4 rounded-3xl bg-white p-6 shadow-sm shadow-plum-900/5 ring-1 ring-plum-900/5 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-full font-display text-[0.95rem] font-semibold tracking-wide",
              AVATAR_BG[testimonial.avatarColor],
            )}
          >
            {initials(testimonial.author)}
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-[0.95rem] font-semibold leading-tight text-plum-900">
              {testimonial.author}
            </p>
            {meta && (
              <p className="mt-0.5 flex flex-wrap items-center gap-1 text-[0.72rem] text-plum-500">
                {meta.localGuide && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700 ring-1 ring-emerald-600/10">
                    <MapPin className="size-3" strokeWidth={2} />
                    Local Guide
                  </span>
                )}
                <span>
                  {meta.reviews} avis
                  {meta.photos ? ` · ${meta.photos} photos` : ""}
                </span>
              </p>
            )}
          </div>
        </div>
        <Quote
          className="size-7 shrink-0 fill-plum-100 text-plum-300"
          strokeWidth={1.5}
        />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-0.5" aria-label="Note 5 sur 5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="size-3.5 fill-peach-400 text-peach-400"
              strokeWidth={0}
            />
          ))}
        </div>
        <span className="text-xs text-plum-500">{testimonial.date}</span>
      </div>

      {testimonial.visitedMonth && (
        <div className="inline-flex items-center gap-1.5 rounded-full bg-plum-50 px-2.5 py-1 text-[0.72rem] text-plum-700 ring-1 ring-plum-900/5">
          <Sparkles className="size-3 text-plum-500" strokeWidth={1.75} />
          {testimonial.visitedMonth}
        </div>
      )}

      <p className="text-[0.95rem] leading-relaxed text-plum-800">
        {testimonial.quote}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-3 text-xs text-plum-500">
          {testimonial.photoCount ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-plum-50 px-2 py-1 ring-1 ring-plum-900/5">
              <ImagePlus className="size-3.5" strokeWidth={1.75} />
              {testimonial.photoCount} photo{testimonial.photoCount > 1 ? "s" : ""}
            </span>
          ) : null}
          {testimonial.reactions?.map((r) =>
            r.type === "heart" ? (
              <span
                key={r.type}
                className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-rose-600 ring-1 ring-rose-500/10"
              >
                <Heart className="size-3.5 fill-rose-500 text-rose-500" strokeWidth={1.5} />
                {r.count}
              </span>
            ) : (
              <span
                key={r.type}
                className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-amber-700 ring-1 ring-amber-500/10"
              >
                🤯 <span>{r.count}</span>
              </span>
            ),
          )}
        </div>
        {testimonial.dogHint && (
          <span className="truncate text-[0.72rem] italic text-plum-500">
            · {testimonial.dogHint}
          </span>
        )}
      </div>

      {testimonial.ownerReply && (
        <div className="mt-2 rounded-2xl border-l-2 border-peach-400 bg-plum-50/70 p-4 pl-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-peach-400/85 px-2.5 py-1 text-[0.7rem] font-semibold text-plum-950">
              {BRAND.name.split(" ")[0]}
              <span className="italic">&apos;s Family</span>
              <span className="font-medium">· Propriétaire</span>
            </span>
            <span className="text-[0.72rem] text-plum-500">
              {testimonial.ownerReply.date}
            </span>
          </div>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-plum-700">
            {testimonial.ownerReply.text}
          </p>
        </div>
      )}
    </Card>
  );
}
