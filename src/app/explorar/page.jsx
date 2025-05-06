"use client";
import styles from "./Explorar.module.scss";
import { useRef } from "react";
import Section from "./Section";
import Paginado from "./Paginado";

function Explorar() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <section className={styles.SectionExplorar}>
            <div className={styles.MainContainer}>
                <header className={styles.HeaderExplorar}>
                    <div className={styles.Container}>
                        <h1>Explorar películas</h1>
                        <p>
                            Descubre nuevas películas y filtra por tus
                            preferencias
                        </p>
                    </div>
                    <form action="">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
                            </svg>
                            Filtros
                        </button>
                        <div className={styles.SearchBar} onClick={handleFocus}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="search"
                                placeholder="Buscar películas..."
                            />
                        </div>
                    </form>
                </header>
                <Section />
                <footer>
                    <Paginado />
                </footer>
            </div>
        </section>
    );
}

export default Explorar;
