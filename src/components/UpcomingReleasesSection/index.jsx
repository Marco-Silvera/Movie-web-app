import UpcomingReleasesCard from "../UpcomingReleasesCard";
import styles from "./UpcomingReleasesSection.module.scss";

function UpcomingRealeasesSection({ movies }) {
    if (!movies || movies.length === 0) return null;

    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Próximos Estrenos</h2>
                    <a href="/peliculas/dune-2">
                        Ver todos
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
                        <UpcomingReleasesCard key={movie.id} movie={movie} />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default UpcomingRealeasesSection;
