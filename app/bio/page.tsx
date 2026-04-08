"use client";
// import { useEffect } from "react";
// import { gsap } from "gsap";
import css from "./Bio.module.css";
import Image from "next/image";

export default function Bio() {
  return (
    <>
      <section className={css.aboutIntro}>
        <div>
          <h1 className={css.introTitle}>ABOUT </h1>
        </div>
      </section>

      <section className={css.aboutSection} id="about">
        <div className={css.aboutContainer}>
          <p className={css.aboutText} data-anim="about-text">
            A Brooklyn-based DJ, producer, and curator who has become a true
            phenomenon in the world of contemporary electronic music. She is the
            founder of Book Club Radio — a music platform and event series that
            transforms the listening of selective house and techno into an
            intimate, intellectual experience.
          </p>
        </div>
      </section>
    </>
  );
}
