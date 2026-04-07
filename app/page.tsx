import Image from "next/image";
import css from "./Hero.module.css";

export default function Home() {
  return (
    <section className={css.heroSection} id="home">
      <div className={css.heroContainer}>
        <h1 className={css.heroTitle} data-anim="hero-title">
          TINZO
        </h1>
        <div className={css.heroImageWrap} data-anim="hero-image">
          <Image
            src="/3000x3000bb-Photoroom_upscayl_6x_upscayl-standard-4x.png"
            alt="Tinzo"
            width={500}
            height={500}
            className={css.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
