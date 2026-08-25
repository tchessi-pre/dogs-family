import { Quote, Star } from "lucide-react";

import type { Testimonial } from "@/lib/data";
import { Card } from "@/components/ui/card";

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <Card className="h-full gap-4 rounded-3xl bg-white p-8 shadow-sm shadow-plum-900/5">
      <Quote
        className="size-8 fill-rose-100 text-rose-300"
        strokeWidth={1.5}
      />

      <p className="text-[0.95rem] leading-relaxed text-plum-700">
        {testimonial.quote}
      </p>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-display text-base font-semibold text-plum-900">
          — {testimonial.author}
        </span>
        <div
          className="flex items-center gap-0.5"
          aria-label={`Note : ${testimonial.rating} sur 5`}
        >
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="size-3.5 fill-peach-400 text-peach-400"
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
