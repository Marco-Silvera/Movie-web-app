"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./CalendarioEstrenos.module.scss";

const CalendarioEstrenos = () => {
    const [activeMonth, setActiveMonth] = useState("Mayo 2024");

    const months = ["Mayo 2024", "Junio 2024", "Julio 2024", "Agosto 2024"];

    const moviesByMonth = {
        "Mayo 2024": [
            {
                title: "1111111111111",
                genres: ["Acción", "Aventura", "Ciencia Ficción"],
                releaseDate: "24 May 2024",
                link: "/furiosa",
            },
            {
                title: "2222222222222",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "3333333333333333",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "44444444444444444",
                genres: ["Animación", "Comedia", "Familiar"],
                releaseDate: "24 May 2024",
                link: "/garfield",
            },
        ],
        "Junio 2024": [
            {
                title: "J111111111111111111",
                genres: ["Acción", "Comedia", "Crimen"],
                releaseDate: "7 Jun 2024",
                link: "/bad-boys",
            },
            {
                title: "J22222222222222222",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "J33333333333333333",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "J4444444444444444444",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
        ],
        "Julio 2024": [
            {
                title: "JJ111111111111111111",
                genres: ["Acción", "Comedia", "Crimen"],
                releaseDate: "7 Jun 2024",
                link: "/bad-boys",
            },
            {
                title: "JJ22222222222222222",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "JJ33333333333333333",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "JJ4444444444444444444",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
        ],
        "Agosto 2024": [
            {
                title: "A111111111111111111",
                genres: ["Acción", "Comedia", "Crimen"],
                releaseDate: "7 Jun 2024",
                link: "/bad-boys",
            },
            {
                title: "A22222222222222222",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "A33333333333333333",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
            {
                title: "A4444444444444444444",
                genres: ["Terror", "Ciencia Ficción", "Thriller"],
                releaseDate: "31 May 2024",
                link: "/quiet-place-day-one",
            },
        ],
    };

    return (
        <section className={styles.calendario}>
            <h2 className={styles.title}>Calendario de Estrenos</h2>

            <div className={styles.tabs}>
                {months.map((month) => (
                    <button
                        key={month}
                        className={`${styles.tab} ${
                            activeMonth === month ? styles.active : ""
                        }`}
                        onClick={() => setActiveMonth(month)}
                    >
                        {month}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {moviesByMonth[activeMonth]?.map((movie) => (
                    <article key={movie.title} className={styles.card}>
                        <div className={styles.imagePlaceholder}>
                            <span className={styles.release}>
                                Estreno: {movie.releaseDate}
                            </span>
                        </div>
                        <h3 className={styles.movieTitle}>{movie.title}</h3>
                        <p className={styles.genres}>
                            {movie.genres.join(", ")}
                        </p>

                        <div className={styles.links}>
                            <Link href={movie.link} className={styles.details}>
                                Detalles
                            </Link>
                            <Link
                                href={`${movie.link}#trailer`}
                                className={styles.trailer}
                            >
                                Trailer
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default CalendarioEstrenos;
