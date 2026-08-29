"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, PawPrint } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "@/components/layout/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

const HASH_SECTION_IDS = ["accueil", "temoignages"] as const;
type SectionId = (typeof HASH_SECTION_IDS)[number];

function hrefToKey(href: string): string {
  if (href.startsWith("#")) return href.slice(1);
  return href;
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const initialActive = pathname !== "/" ? pathname : "accueil";
  const [activeKey, setActiveKey] = useState<string>(initialActive);
  const [hydrated, setHydrated] = useState(false);

  useEffect(function markHydrated() {
    setHydrated(true);
  }, []);

  useEffect(function trackScrollShadow() {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return function cleanupScrollListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(
    function syncActiveFromHash() {
      if (!hydrated) return;
      if (pathname !== "/") {
        setActiveKey(pathname);
        return;
      }
      function onHashChange() {
        const hash = window.location.hash.replace("#", "");
        if (hash && (HASH_SECTION_IDS as readonly string[]).includes(hash)) {
          setActiveKey(hash);
        } else if (!hash) {
          setActiveKey("accueil");
        }
      }
      onHashChange();
      window.addEventListener("hashchange", onHashChange);
      return function cleanup() {
        window.removeEventListener("hashchange", onHashChange);
      };
    },
    [pathname, hydrated],
  );

  useEffect(
    function scrollSpySections() {
      if (!hydrated || pathname !== "/") return;
      if (typeof IntersectionObserver === "undefined") return;

      const elements = HASH_SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => el !== null,
      );
      if (elements.length === 0) return;

      const visible = new Map<SectionId, number>();

      const observer = new IntersectionObserver(
        (entries) => {
          let best: { id: SectionId; ratio: number } | null = null;
          for (const entry of entries) {
            const id = entry.target.id as SectionId;
            const ratio = entry.intersectionRatio;
            if (ratio > 0) visible.set(id, ratio);
            else visible.delete(id);
          }
          for (const [id, ratio] of visible) {
            if (!best || ratio > best.ratio) best = { id, ratio };
          }
          if (best) setActiveKey(best.id);
        },
        {
          rootMargin: "-40% 0px -50% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      );

      elements.forEach((el) => observer.observe(el));
      return function cleanupObserver() {
        observer.disconnect();
      };
    },
    [pathname],
  );

  const handleNavClick = useCallback(
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      setOpen(false);
      if (href.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1) as SectionId;
        if (pathname !== "/") {
          router.push(`/${href}`);
          return;
        }
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 76;
          window.scrollTo({ top: y, behavior: "smooth" });
          if (typeof history !== "undefined") {
            history.replaceState(null, "", `#${id}`);
          }
          setActiveKey(id);
        }
      }
    },
    [pathname, router],
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-plum-900/10 bg-cream/90 shadow-[0_1px_0_rgba(61,25,61,0.06),0_8px_24px_-12px_rgba(61,25,61,0.15)] backdrop-blur-md"
          : "border-transparent bg-cream",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const key = hrefToKey(link.href);
            const isActive = activeKey === key;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className={cn(
                  "group relative rounded-full px-4 py-2 font-sans text-[0.95rem] transition-all duration-200",
                  isActive
                    ? "bg-plum-900/5 text-plum-950"
                    : "text-plum-800 hover:bg-plum-900/5 hover:text-plum-950",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-peach-400 transition-all duration-300",
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/contact"
            onClick={handleNavClick("/contact")}
            className={cn(
              buttonVariants({ variant: "default" }),
              "btn-shine hidden h-11 gap-2 rounded-full bg-plum-900 px-5 text-[0.95rem] text-cream transition-all duration-200 hover:bg-plum-800 hover:shadow-lg hover:shadow-plum-900/20 active:scale-[0.98] sm:inline-flex",
            )}
          >
            Prendre rendez-vous
            <PawPrint className="size-4" strokeWidth={1.75} />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[85%] max-w-sm gap-0 border-l border-plum-900/10 bg-cream p-0 shadow-2xl"
            >
              <SheetHeader className="flex flex-row items-center justify-between border-b border-plum-900/10 p-5">
                <SheetTitle className="text-base">
                  <Logo />
                </SheetTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="rounded-full text-plum-900 hover:bg-plum-900/10"
                >
                  <X className="size-5" strokeWidth={1.75} />
                </Button>
              </SheetHeader>
              <nav aria-label="Navigation mobile" className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link) => {
                  const key = hrefToKey(link.href);
                  const isActive = activeKey === key;
                  return (
                    <SheetClose
                      key={link.href}
                      nativeButton={false}
                      render={
                        <a
                          href={link.href}
                          onClick={handleNavClick(link.href)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "group flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg transition-all duration-200",
                            isActive
                              ? "bg-plum-900 text-cream shadow-md shadow-plum-900/20"
                              : "text-plum-900 hover:bg-plum-900/5 active:bg-plum-900/10",
                          )}
                        >
                          <span>{link.label}</span>
                          <PawPrint
                            className={cn(
                              "size-4 transition-all duration-200",
                              isActive
                                ? "text-peach-300 opacity-100"
                                : "text-plum-900/30 opacity-0 group-hover:opacity-100",
                            )}
                            strokeWidth={1.75}
                          />
                        </a>
                      }
                    >
                      {link.label}
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-auto p-5">
                <SheetClose
                  nativeButton={false}
                  render={
                    <a
                      href="/contact"
                      onClick={handleNavClick("/contact")}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "h-12 w-full gap-2 rounded-full bg-plum-900 text-[0.95rem] text-cream transition-all duration-200 hover:bg-plum-800 hover:shadow-lg hover:shadow-plum-900/20 active:scale-[0.98]",
                      )}
                    />
                  }
                >
                  Prendre rendez-vous
                  <PawPrint className="size-4" strokeWidth={1.75} />
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <Button
            variant="ghost"
            size="icon-lg"
            className="relative rounded-full lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Menu
              className={cn(
                "size-5 transition-all duration-300",
                open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
              strokeWidth={1.75}
            />
            <X
              className={cn(
                "absolute size-5 transition-all duration-300",
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
              )}
              strokeWidth={1.75}
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
