import Image from "next/image";
import css from "./Hero.module.css";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { AiOutlineSpotify } from "react-icons/ai";
import { RiSoundcloudFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div
        className={css.decorLinks}
        data-anim="reveal"
        data-reveal="left"
      >
        <Link
          className={css.decor1}
          href="https://www.instagram.com/tin.zo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </Link>
        <Link
          className={css.decor2}
          href="https://open.spotify.com/artist/0GJISdfop8sLeaYGimeSoG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineSpotify />
        </Link>
        <Link
          className={css.decor3}
          href="https://soundcloud.com/tin_zo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiSoundcloudFill />
        </Link>
      </div>
      <section className={css.heroSection} id="home">
        <div className={css.heroContainer}>
          <h1 className={css.heroTitle} data-anim="hero-title">
            TINZO
          </h1>
          <div className={css.heroImageWrap} data-anim="hero-image">
            <Image
              src="/hero.png"
              alt="Tinzo"
              width={500}
              height={500}
              className={css.heroImage}
            />
          </div>
        </div>
      </section>
    </>
  );
}
