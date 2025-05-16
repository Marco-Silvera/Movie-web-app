import styles from "./TopRatedCard.module.scss";

function TopRatedCard({ movie }) {
    const {
        id,
        poster_path,
        title,
        vote_average,
        release_date,
        overview,
        genre_names,
    } = movie;

    const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const rating = Math.floor(vote_average * 10) / 10;
    const year = release_date?.split("-")[0];
    const link = `/peliculas/${id}`;

    return (
        <article className={styles.Card}>
            <div className={styles.MaskCard}>
                <img src={image} alt={`Caratula de ${title}`} />
            </div>
            <div className={styles.Content}>
                <div className={styles.Rating}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="#F5C618"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p>{rating}</p>
                </div>
                <h3>{title}</h3>
                <div className={styles.Info}>
                    <p>
                        {year} • {genre_names.slice(0, 3).join(" - ")}
                    </p>
                </div>
                <p className={styles.Synopsis}>{overview}</p>
                <span>
                    Detalles
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
                </span>
            </div>
        </article>
    );
}

export default TopRatedCard;
