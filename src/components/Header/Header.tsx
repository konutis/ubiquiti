import React from "react"
import logo from "./../../img/logo-default.svg"
import logoHover from "./../../img/logo-hover.svg"
import logoActive from "./../../img/logo-active.svg"
import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <a
        href="https://ui.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.headerLink}
      >
        <img src={logoActive} alt="logo" className={`${styles.headerLogo} ${styles.headerLogoActive}`} />
        <img src={logoHover} alt="logo" className={`${styles.headerLogo} ${styles.headerLogoHover}`} />
        <img src={logo} alt="logo" className={`${styles.headerLogo} ${styles.headerLogoDefault}`} />
      </a>
      <span className={styles.headerTitle}>
        Devices
      </span>
      <span className={styles.headerDevName}>
        Author/Developer Name
      </span>
    </header>
  )
}

export default Header
