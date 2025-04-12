"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Cierra el menú si se hace clic fuera del nav
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    // Cierra el menú si la pantalla se agranda
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMenuOpen]);

    const iconColor = "#F5C618";

    return (
        <header className={styles.Header}>
            <div className={styles.Container}>
                <Link href={"/"}>
                    <img
                        className={styles.Logo}
                        src="https://cdn2.steamgriddb.com/logo_thumb/a1913547ffc34d483ab9003a967b35da.png"
                        alt="Logo"
                    />
                </Link>
                <nav
                    ref={menuRef}
                    className={`${isMenuOpen ? styles.NavOpen : styles.Nav}`}
                >
                    <ul>
                        <li>
                            <Link href={"/"}>Inicio</Link>
                        </li>
                        <li>
                            <Link href={"/peliculas"}>Peliculas</Link>
                        </li>
                        <li>
                            <Link href={"/series"}>Series</Link>
                        </li>
                        <li>
                            <Link href={"/contacto"}>Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <form className={styles.SearchForm} role="search">
                    <label htmlFor="header-search" className={styles.SrOnly}>
                        Buscar
                    </label>
                    <input
                        type="search"
                        id="header-search"
                        placeholder="Buscar..."
                        className={styles.SearchInput}
                    />
                    <button type="submit" className={styles.SearchButton}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-search-icon lucide-search"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                </form>
                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className={styles.MenuButton}
                    aria-label="Menu"
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={iconColor}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
}
