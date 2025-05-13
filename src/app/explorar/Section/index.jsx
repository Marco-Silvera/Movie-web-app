import styles from "./Section.module.scss";
import Card from "./Card";

function Section({ items }) {
    return (
        <section className={styles.Container}>
            {items.map((movie, index) => (
                <Card
                    key={index}
                    link={movie.link}
                    image={movie.image}
                    rating={movie.rating}
                    title={movie.title}
                    year={movie.year}
                />
            ))}
            <footer></footer>
        </section>
    );
}

export default Section;
