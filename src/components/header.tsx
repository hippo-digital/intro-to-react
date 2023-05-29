import Link from "next/link";
import React from "react"
import Logo from "./logo"
import styles from "./header.module.scss"



const Header = () => {
    return (
      <header className={styles.mainHeader}>
        <Link href="/" className={styles.logo}>
          <Logo className={styles.logoImage} hasUnderline={true} />
          Introduction to React
        </Link>
      </header>
    );
}

export default Header
