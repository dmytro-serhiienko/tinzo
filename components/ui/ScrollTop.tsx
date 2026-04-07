"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ScrollTop.module.css";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          if (entry.boundingClientRect.top > 0) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Link
      href="#"
      className={`${styles.btn} ${visible ? styles.isVisible : ""}`}
      aria-label="to top"
      onClick={handleClick}
    >
      <i className="ri-arrow-up-wide-line" aria-hidden="true" />
    </Link>
  );
}
