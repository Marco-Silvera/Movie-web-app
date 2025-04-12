import styles from "./TopRatedSection.module.scss";
import TopRatedCard from "../TopRatedCard";

const data = [
    {
        title: "El padrino",
        year: "1972",
        genre: "Crimen, Drama",
        synopsis:"Don Vito Corleone, el jefe de una familia de la mafia de Nueva York, se enfrenta a un intento de asesinato y debe proteger a su familia mientras lidia con la traición y la violencia en el mundo del crimen organizado.",
        rating: "9.2",
        image: "https://hips.hearstapps.com/hmg-prod/images/gabz-godfather-1646152137.png",
        link: "/el-padrino",
    },
    {
        title: "Cadena perpetua",
        year: "1994",
        genre: "Drama, Crimen",
        synopsis: "Dos hombres, Andy Dufresne y Ellis 'Red' Redding, forman una amistad en la prisión de Shawshank mientras luchan por sobrevivir y encontrar la esperanza en un lugar oscuro.",
        rating: "9.3",
        image: "https://es.web.img3.acsta.net/medias/nmedia/18/74/26/88/20133359.jpg",
        link: "/cadena-perpetua",
    },
    {
        title: "El caballero oscuro",
        year: "2008",
        genre: "Acción, Crimen, Drama",
        synopsis: "Batman, el fiscal de distrito Harvey Dent y el teniente Jim Gordon unen fuerzas para desmantelar las organizaciones criminales de Gotham, pero se enfrentan al caos que trae el Joker.",
        rating: "9.0",
        image: "https://www.ecartelera.com/carteles/1700/1742/001_m.jpg",
        link: "/el-caballero-oscuro",
    },
]

function TopRatedSection() {
    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Mejor Valoradas</h2>
                    <a href="/peliculas/dune-2">
                        Ver todas
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
                    </a>
                </header>
                <section className={styles.CardContainer}>
                    {data.map((item, index) => (
                        <TopRatedCard
                            key={index}
                            title={item.title}
                            year={item.year}
                            genre={item.genre}
                            synopsis={item.synopsis}
                            rating={item.rating}
                            image={item.image}
                            link={item.link}
                        />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default TopRatedSection;
