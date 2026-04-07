"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import css from "./About.module.css";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      //? Anim. 5 elements
      const timeLine = gsap.timeline();
      timeLine
        .from(`.${css.decor1}`, {
          opacity: 0,
          x: -50,
          duration: 5,
          ease: "power2.out",
        })
        .from(
          `.${css.decor2}`,
          {
            opacity: 0,
            x: 50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.3",
        )
        .from(
          `.${css.decor3}`,
          {
            opacity: 0,
            x: -50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.4",
        )
        .from(
          `.${css.decor4}`,
          {
            opacity: 0,
            x: 50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.5",
        )
        .from(
          `.${css.decor5}`,
          {
            opacity: 0,
            x: -50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.6",
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={css.aboutSection} id="about">
      <div className={css.decorWrap}>
        <div className={css.decor1}>TINZO</div>
        <div className={css.decor2}>TINZO</div>
        <div className={css.decor3}>TINZO</div>
        <div className={css.decor4}>TINZO</div>
        <div className={css.decor5}>TINZO</div>
      </div>
      <div className={css.aboutContainer}>
        <h1 className={css.aboutTitle} data-anim="about-title">
          About
        </h1>
        <p className={css.aboutText} data-anim="about-text">
          A Brooklyn-based DJ, producer, and curator who has become a true
          phenomenon in the world of contemporary electronic music. She is the
          founder of Book Club Radio — a music platform and event series that
          transforms the listening of selective house and techno into an
          intimate, intellectual experience.
        </p>
      </div>
      <div className={css.imageWrap} data-anim="about-image">
        <Image
          className={css.imageAbout}
          src="/about.png"
          alt="About Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
