import PopularCard from "../PopularCard";
import SkeletonCard from "../PopularCard/SkeletonCard";
import styles from "./PopularSection.module.scss";

function PopularSection({ movies }) {
    if (!movies || movies.length === 0) return null;

    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Películas Populares</h2>
                    <a href="/explorar">
                        Ver todas
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
                        >
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <polyline points="14 6 20 12 14 18" />
                        </svg>
                    </a>
                </header>
                <section className={styles.CardContainer}>
                    {movies.map((movie) => (
                        <PopularCard key={movie.id} movie={movie} />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default PopularSection;
