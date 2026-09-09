"use client";

import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<"a">, "href" | "target" | "rel" | "onClick"> & {
  children: ReactNode;
};

export function GoogleMapsLink({ children, className, ...rest }: Props) {
  const url = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "#";
  const external = url !== "#";
  return (
    <a
      href={url}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      aria-label={rest["aria-label"] ?? "Ouvrir la fiche Google Maps"}
      onClick={(e) => {
        if (!external) e.preventDefault();
      }}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
