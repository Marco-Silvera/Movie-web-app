import styles from "./HeroProximosEstrenos.module.scss";

function HeroProximosEstrenos() {
    return (
        <div className={styles.HeroContainer}>
            <div className={styles.Overlay} />
            <img
                src="https://hips.hearstapps.com/hmg-prod/images/furiosa-mad-max-66509b8fbe4dd.jpg"
                alt=""
                className={styles.BackgroundImage}
            />
            <div className={styles.Content}>
                <h2>Próximos Estrenos</h2>
                <p>
                    Mantente al día con las películas que llegarán pronto a los
                    cines. Descubre fechas de estreno, trailers y toda la
                    información sobre los próximos lanzamientos.
                </p>
            </div>
        </div>
    );
}

export default HeroProximosEstrenos;
