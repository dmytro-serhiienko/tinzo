"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

type TypewriterOpts = { charDuration?: number; stagger?: number };

function typewriterChars(el: HTMLElement, opts?: TypewriterOpts) {
  const charDuration = opts?.charDuration ?? 0.04;
  const stagger = opts?.stagger ?? 0.068;
  const text = (el.textContent ?? "").trim();
  el.textContent = "";
  el.style.opacity = "1";
  const spans: HTMLSpanElement[] = [];
  for (const char of text) {
    const s = document.createElement("span");
    s.textContent = char === " " ? "\u00A0" : char;
    s.style.display = "inline-block";
    s.style.opacity = "0";
    el.appendChild(s);
    spans.push(s);
  }
  return gsap.timeline().to(spans, {
    opacity: 1,
    duration: charDuration,
    stagger,
    ease: "none",
  });
}

function bindScrollReveals() {
  const nodes = gsap.utils.toArray<HTMLElement>("[data-anim='reveal']");
  nodes.forEach((el, i) => {
    const side = el.dataset.reveal;
    const xFrom =
      side === "right" ? 72 : side === "left" ? -72 : i % 2 === 0 ? -56 : 56;
    gsap.fromTo(
      el,
      { x: xFrom, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      },
    );
  });
}

function runHome() {
  const header = document.querySelector<HTMLElement>("[data-anim='header']");
  const heroTitle = document.querySelector<HTMLElement>(
    "[data-anim='hero-title']",
  );
  const heroImage = document.querySelector<HTMLElement>(
    "[data-anim='hero-image']",
  );

  const tl = gsap.timeline();
  if (header) {
    tl.to(
      header,
      { y: 0, autoAlpha: 1, duration: 0.65, ease: "power3.out" },
      0,
    );
  }

  if (heroTitle) {
    tl.add(
      typewriterChars(heroTitle, {
        charDuration: 0.09,
        stagger: 0.16,
      }),
      0.12,
    );
  }

  if (heroImage) {
    tl.to(
      heroImage,
      { opacity: 1, duration: 1.2, ease: "power2.out" },
      heroTitle ? "+=0.55" : 0.2,
    );
  }

  bindScrollReveals();
}

function runInnerPage() {
  const header = document.querySelector<HTMLElement>("[data-anim='header']");
  const pageTitle = document.querySelector<HTMLElement>(
    "[data-anim='page-title']",
  );
  const pageVisual = document.querySelector<HTMLElement>(
    "[data-anim='page-visual']",
  );

  const tl = gsap.timeline();
  if (header) {
    tl.to(
      header,
      { y: 0, autoAlpha: 1, duration: 0.62, ease: "power3.out" },
      0,
    );
  }
  if (pageTitle) {
    tl.add(typewriterChars(pageTitle), 0.12);
  }
  if (pageVisual) {
    tl.to(
      pageVisual,
      { opacity: 1, duration: 1.15, ease: "power2.out" },
      pageTitle ? ">-0.12" : 0.15,
    );
  }

  bindScrollReveals();
}

export function SiteGsapAnimations() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;
    gsap.ticker.lagSmoothing(0);
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    return () => {
      gsap.ticker.remove(ticker);
    };
  }, [lenis]);

  useLayoutEffect(() => {
    if (!lenis) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const header = document.querySelector<HTMLElement>("[data-anim='header']");
      if (header) {
        gsap.set(header, { y: -56, autoAlpha: 0 });
      }

      if (pathname === "/") {
        runHome();
      } else {
        runInnerPage();
      }

      ScrollTrigger.refresh();
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.revert();
    };
  }, [pathname, lenis]);

  return null;
}
