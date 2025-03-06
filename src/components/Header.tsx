"use client"

import { useState } from "react"

import styles from "./Header.module.css"

export default function PrimeTimeHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>
            <span className={styles.prime}>Prime</span>Time
            <span className={styles.version}>v.1.0.0</span>
          </h1>
        </div>

        <nav className={styles.nav}>
          <a href="/about" className={styles.navLink}>
            About
          </a>
          <a href="/contact" className={styles.navLink}>
            Contact
          </a>
          <label className={styles.switch}>
            <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
            <span className={styles.slider}></span>
          </label>
        </nav>
      </div>
    </header>
  )
}

