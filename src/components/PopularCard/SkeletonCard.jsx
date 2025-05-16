import styles from "./SkeletonCard.module.scss";

function SkeletonCard() {
    return (
        <div className={styles.SkeletonCard}>
            <div className={styles.Image}></div>
            <div className={styles.Content}>
                <div className={styles.Title}></div>
                <div className={styles.Year}></div>
                <div className={styles.Details}></div>
            </div>
        </div>
    );
}

export default SkeletonCard;
