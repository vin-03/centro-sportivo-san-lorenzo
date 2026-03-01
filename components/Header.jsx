"use client";

import { useState } from "react";
import styles from "../style/Header.module.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/chi-siamo", label: "Chi Siamo" },
        { href: "/corsi", label: "Corsi" },
        { href: "/contatti", label: "Contatti" },
    ];

    return (
        <header className={styles.header}>
            <div className={styles.container}>

                {/* Logo */}
                <div className={styles.brand}>
                    <span className={`material-icons ${styles.icon}`}>
                        sports_volleyball
                    </span>
                    <div className={styles.brandText}>
                        <h2 className={styles.brandTitle}>SAN LORENZO</h2>
                        <p className={styles.brandSubtitle}>CENTRO SPORTIVO</p>
                    </div>
                </div>

                {/* Link nav desktop */}
                <nav className={styles.navDesktop}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Hamburger button */}
                <button
                    className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="toggle menu"
                >
                    <span className={styles.burgerIcon}></span>
                </button>
            </div>

            {/* NavMobile */}
            <nav className={styles.navMobile}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
