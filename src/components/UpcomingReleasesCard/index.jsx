import styles from "./UpcomingReleasesCard.module.scss";

function UpcomingReleasesCard({ movie }) {
    const { id, poster_path, title, release_date, genre_names } = movie;

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const date = release_date?.split("-").reverse().join("-");
    const link = `/peliculas/${id}`;

    return (
        <article className={styles.Card}>
            <a href={link}>
                <div className={styles.MaskCard}>
                    <div className={styles.Overlay}>
                        <p>Estreno: {date}</p>
                    </div>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.Content}>
                    <h3>{title}</h3>
                    <div className={styles.Info}>
                        <p>{genre_names.slice(0, 3).join(" - ")}</p>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default UpcomingReleasesCard;
