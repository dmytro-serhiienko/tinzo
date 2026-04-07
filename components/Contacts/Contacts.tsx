"use client";

import { useState } from "react";
import { BookingModal } from "@/components/Modal/Modal";
import css from "./Contacts.module.css";
import { FaInstagram, FaSoundcloud, FaSpotify } from "react-icons/fa";

export function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={css.contactsSection}>
      <div className={css.container}>
        <div className={css.infoGrid}>
          <div className={css.column}>
            <h3 className={css.contactsName}>MANAGEMENT</h3>
            <p className={css.contactsMenager}>Michael Kaufman</p>
            <a href="mailto:mk@trax-ent.com" className={css.contactLink}>
              mk@trax-ent.com <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          <div className={css.column}>
            <h3 className={css.contactsName}>BOOKING</h3>
            <p className={css.contactsMenager}>Jake Bernstein</p>
            <a
              href="mailto:jake.bernstein@the.team"
              className={css.contactLink}
            >
              jake.bernstein@the.team <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>

          <div className={css.column}>
            <h3 className={css.contactsName}>INTERNATIONAL</h3>
            <p className={css.contactsMenager}>Cris Hearn</p>
            <a
              href="mailto:cris.hearn@teamwass.com"
              className={css.contactLink}
            >
              cris.hearn@teamwass.com <i className="ri-arrow-right-up-line"></i>
            </a>
          </div>
        </div>

        <div className={css.footerRow}>
          <button
            className={css.reserveBtn}
            onClick={() => setIsModalOpen(true)}
          >
            RESERVE NOW
          </button>

          <div className={css.socialLinks}>
            <a
              href="https://www.instagram.com/tin.zo/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://soundcloud.com/tin_zo"
              target="_blank"
              rel="noreferrer"
            >
              <FaSoundcloud />
            </a>
            <a
              href="https://open.spotify.com/artist/0GJISdfop8sLeaYGimeSoG"
              target="_blank"
              rel="noreferrer"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
