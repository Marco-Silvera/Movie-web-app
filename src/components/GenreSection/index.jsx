import styles from "./GenreSection.module.scss";

function GenreSection() {
    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Explorar por Género</h2>
                </header>
                <section className={styles.CardContainer}>
                    <article className={styles.Card}>Acción</article>
                    <article className={styles.Card}>Aventura</article>
                    <article className={styles.Card}>Animación</article>
                    <article className={styles.Card}>Comedia</article>
                    <article className={styles.Card}>Crimen</article>
                    <article className={styles.Card}>Drama</article>
                    <article className={styles.Card}>Fantasía</article>
                    <article className={styles.Card}>Terror</article>
                    <article className={styles.Card}>Romance</article>
                    <article className={styles.Card}>Ciencia Ficción</article>
                    <article className={styles.Card}>Thriller</article>
                    <article className={styles.Card}>Bélica</article>
                </section>
            </div>
        </section>
    );
}

export default GenreSection;
