import styles from "./Paginado.module.scss";

function getFixedPageNumbers(totalPages, currentPage) {
    const pages = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        return pages;
    }

    if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages - 1, totalPages);
    } else if (currentPage >= totalPages - 2) {
        pages.push(
            1,
            2,
            "...",
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
        );
    } else {
        pages.push(
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages
        );
    }

    return pages;
}

function Paginado({ currentPage, totalPages, onPageChange }) {
    const pages = getFixedPageNumbers(totalPages, currentPage);

    return (
        <nav className={styles.pagination}>
            <button
                className={styles.pagination__btn}
                onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            <ul className={styles.pagination__list}>
                {pages.map((page, i) => (
                    <li key={i}>
                        {page === "..." ? (
                            <span className={styles.pagination__ellipsis}>
                                …
                            </span>
                        ) : (
                            <button
                                className={`${styles.pagination__page} ${
                                    currentPage === page ? styles.active : ""
                                }`}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            <button
                className={styles.pagination__btn}
                onClick={() =>
                    onPageChange(Math.min(currentPage + 1, totalPages))
                }
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </nav>
    );
}

export default Paginado;
