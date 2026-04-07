"use client";

import { useState } from "react";
import Link from "next/link";
import css from "./Header.module.css"; // Імпорт ваших стилів

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "https://bookclubstore.com/", label: "Store", target: "_blank" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Logo */}
        <div className={css.logo}>TINZO</div>

        {/* Desktop Menu */}
        <nav className={css.desktopNav}>
          <ul className={css.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={css.navLink}
                  target={link.target}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Controls */}
        <div className={css.mobileControls}>
          <button type="button" onClick={toggleMenu} className={css.menuButton}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <nav className={css.mobileNav}>
            <ul className={css.mobileList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={css.mobileNavLink}
                    target={link.target}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
