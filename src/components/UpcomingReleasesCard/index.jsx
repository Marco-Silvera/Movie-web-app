import styles from "./UpcomingReleasesCard.module.scss";

function UpcomingReleasesCard({ title, year, month, day, genre, image, link }) {
    return (
        <article className={styles.Card}>
            <a href={link}>
                <div className={styles.MaskCard}>
                    <div className={styles.Overlay}>
                        <p>
                            Estreno: {day} {month} {year}
                        </p>
                    </div>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.Content}>
                    <h3>{title}</h3>
                    <div className={styles.Info}>
                        <p>{genre}</p>
                    </div>
                </div>
            </a>
        </article>
    );
}

export default UpcomingReleasesCard;
