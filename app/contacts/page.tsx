"use client";

import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <>
      <section className={css.introContacts}>
        <h1 className={css.introTitle}>Contact</h1>
      </section>

      <section className={css.sectionContacts}>
        <div className={css.formWrap}>
          <h2 className={css.formTitle}>Book Tinzo</h2>

          <form className={css.form}>
            <div className={css.field}>
              <label className={css.label} htmlFor="name">
                Your Name
              </label>
              <input
                className={css.input}
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>

            <div className={css.field}>
              <label className={css.label} htmlFor="email">
                Your Email
              </label>
              <input
                className={css.input}
                id="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={css.field}>
              <label className={css.label} htmlFor="eventType">
                Event Type
              </label>
              <select className={css.select} id="eventType" required>
                <option value="" disabled selected>
                  Select event type
                </option>
                <option value="club">Club Night</option>
                <option value="festival">Festival</option>
                <option value="private">Private Event</option>
                <option value="corporate">Corporate</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={css.field}>
              <label className={css.label} htmlFor="city">
                City
              </label>
              <input
                className={css.input}
                id="city"
                type="text"
                placeholder="New York, NY"
                required
              />
            </div>

            <div className={css.field}>
              <label className={css.label} htmlFor="date">
                Approximate Date
              </label>
              <input className={css.input} id="date" type="date" required />
            </div>

            <button className={css.submitBtn} type="submit">
              Send Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
