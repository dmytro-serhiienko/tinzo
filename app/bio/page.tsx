import css from "./Bio.module.css";

export default function Bio() {
  return (
    <>
      <section className={css.aboutIntro}>
        <div className={css.introBgLayer} data-anim="page-visual" aria-hidden />
        <div className={css.introInner}>
          <h1 className={css.introTitle} data-anim="page-title">
            ABOUT
          </h1>
        </div>
      </section>

      <section className={css.aboutSection} id="about">
        <div className={css.aboutContainer}>
          <p
            className={css.aboutText}
            data-anim="reveal"
            data-reveal="left"
          >
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
