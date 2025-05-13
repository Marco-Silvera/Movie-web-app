// import { useState } from "react";
// import styles from "./Paginado.module.scss";

// function getPageNumbers(totalPages, currentPage) {
//     const delta = 1;
//     const range = [];
//     const rangeWithDots = [];
//     let lastPage;

//     for (let i = 1; i <= totalPages; i++) {
//         if (
//             i === 1 ||
//             i === 2 ||
//             i === totalPages ||
//             i === totalPages - 1 ||
//             (i >= currentPage - delta && i <= currentPage + delta)
//         ) {
//             range.push(i);
//         }
//     }

//     for (let i of range) {
//         if (lastPage !== undefined) {
//             if (i - lastPage === 2) {
//                 rangeWithDots.push(lastPage + 1);
//             } else if (i - lastPage > 2) {
//                 rangeWithDots.push("...");
//             }
//         }
//         rangeWithDots.push(i);
//         lastPage = i;
//     }

//     return rangeWithDots;
// }

// function Paginado({ currentPage, totalPages, onPageChange }) {
//     const pages = getPageNumbers(totalPages, currentPage);

//     return (
//         <nav className={styles.pagination}>
//             <button
//                 className={styles.pagination__btn}
//                 aria-label="Anterior"
//                 onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
//                 disabled={currentPage === 1}
//             >
//                 &lt;
//             </button>

//             <ul className={styles.pagination__list}>
//                 {pages.map((page, index) => (
//                     <li key={index}>
//                         {page === "..." ? (
//                             <span className={styles.pagination__ellipsis}>
//                                 ...
//                             </span>
//                         ) : (
//                             <button
//                                 className={`${styles.pagination__page} ${
//                                     currentPage === page
//                                         ? styles["pagination__page--active"]
//                                         : ""
//                                 }`}
//                                 onClick={() => onPageChange(page)}
//                             >
//                                 {page}
//                             </button>
//                         )}
//                     </li>
//                 ))}
//             </ul>

//             <button
//                 className={styles.pagination__btn}
//                 aria-label="Siguiente"
//                 onClick={() =>
//                     onPageChange(Math.min(currentPage + 1, totalPages))
//                 }
//                 disabled={currentPage === totalPages}
//             >
//                 &gt;
//             </button>
//         </nav>
//     );
// }

// export default Paginado;

import styles from "./Paginado.module.scss";

// function getFixedPageNumbers(totalPages, currentPage) {
//     const maxButtons = 7;
//     const pages = [];

//     if (totalPages <= maxButtons) {
//         for (let i = 1; i <= totalPages; i++) pages.push(i);
//         return pages;
//     }

//     const left = Math.max(currentPage - 1, 2);
//     const right = Math.min(currentPage + 1, totalPages - 1);

//     if (currentPage <= 3) {
//         pages.push(1, 2, 3, "...", totalPages - 1, totalPages);
//     } else if (currentPage >= totalPages - 2) {
//         pages.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
//     } else {
//         pages.push(1, "...", left, currentPage, right, "...", totalPages);
//     }

//     return pages;
// }

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
