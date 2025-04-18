import styles from "./Paginado.module.scss";

function Paginado() {
    return (
        <nav className={styles.pagination}>
            <button className={styles.pagination__btn} aria-label="Anterior">
                &lt;
            </button>

            <ul className={styles.pagination__list}>
                <li>
                    <button
                        className={`${styles.pagination__page} ${styles["pagination__page--active"]}`}
                    >
                        1
                    </button>
                </li>
                <li>
                    <button className={styles.pagination__page}>2</button>
                </li>
                <li>
                    <button className={styles.pagination__page}>3</button>
                </li>
                <li>
                    <button className={styles.pagination__page}>4</button>
                </li>
                <li>
                    <button className={styles.pagination__page}>5</button>
                </li>
            </ul>

            <button className={styles.pagination__btn} aria-label="Siguiente">
                &gt;
            </button>
        </nav>
    );
}

export default Paginado;
