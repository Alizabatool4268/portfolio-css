import React from 'react';
import styles from "@/app/page.module.css";
import Link from 'next/link';
import {rye} from "@/app/fonts/font";


function Header() {
  return (
    <nav className={styles.header}>
        <div className={`${styles.logo} ${rye.className}`}>Aliza Batool</div>
        <Link href={"/"}> Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/skills"}>Skills</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>
    </nav>
  )
}

export default Header;