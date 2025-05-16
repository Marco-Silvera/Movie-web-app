import styles from "./GenreSection.module.scss";

function GenreSection({ movies }) {
    if (!movies || movies.length === 0) return null;

    // Extracción de todos los nombres de géneros
    const allGenreNames = movies.flatMap((movie) => movie.genre_names);

    // Filtrar géneros únicos
    const uniqueGenres = Array.from(new Set(allGenreNames));

    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Explorar por Género</h2>
                </header>
                <section className={styles.CardContainer}>
                    {uniqueGenres.map((genre) => (
                        <a href={`/${genre}`}>
                            <article key={genre} className={styles.Card}>
                                {genre}
                            </article>
                        </a>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default GenreSection;
