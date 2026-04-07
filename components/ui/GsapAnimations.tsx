"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Глобальні GSAP-анімації для всього сайту.
 * Рендериться один раз у layout.tsx і повертає null.
 *
 * Одразу (без скролу): Header, Hero
 * При скролі (ScrollTrigger): About, Music, Contacts
 */
export default function GsapAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── HEADER – зверху вниз ──────────────────────────────────────
      gsap.from('[data-anim="header"]', {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // ── HERO – заголовок зліва, картинка справа ───────────────────
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .from('[data-anim="hero-title"]', {
          x: -150,
          opacity: 0,
          duration: 1.3,
          ease: "power3.out",
        })
        .from(
          '[data-anim="hero-image"]',
          {
            x: 150,
            opacity: 0,
            duration: 1.3,
            ease: "power3.out",
          },
          "<0.2",
        );

      // ── ABOUT – заголовок зліва, текст справа, картинка знизу ─────
      gsap.from('[data-anim="about-title"]', {
        scrollTrigger: { trigger: "#about", start: "top 80%" },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from('[data-anim="about-text"]', {
        scrollTrigger: { trigger: "#about", start: "top 75%" },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from('[data-anim="about-image"]', {
        scrollTrigger: { trigger: "#about", start: "top 65%" },
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
      });

      // ── MUSIC – відео-картки знизу з затримкою ────────────────────
      gsap.from('[data-anim="video-item"]', {
        scrollTrigger: { trigger: "#music", start: "top 80%" },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });

      // ── CONTACTS – колонки знизу, кнопка зліва ───────────────────
      gsap.from('[data-anim="contact-col"]', {
        scrollTrigger: { trigger: "#contact", start: "top 80%" },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from('[data-anim="contact-btn"]', {
        scrollTrigger: { trigger: "#contact", start: "top 75%" },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
