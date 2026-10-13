import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<"a">, "target" | "rel"> & {
  children: ReactNode;
  href: string;
};

export function GoogleMapsLink({ children, className, href, ...rest }: Props) {
  const external = Boolean(href) && href !== "#";
  return (
    <a
      href={href || "#"}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      aria-label={rest["aria-label"] ?? "Ouvrir la fiche Google Maps"}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
