"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../styles/styles.module.css";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>Anam Anwer</h1>
        {/* Hamburger icon for mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* Navigation list with active class toggle */}
        <ul className={`${styles.navList} ${menuActive ? styles.active : ""}`}>
          <li onClick={() => setMenuActive(false)}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li onClick={() => setMenuActive(false)}>
            <Link href="/contact-us" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
