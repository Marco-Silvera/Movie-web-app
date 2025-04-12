import UpcomingReleasesCard from "../UpcomingReleasesCard";
import styles from "./UpcomingReleasesSection.module.scss";

const data = [
    {
        title: "Deadpool & Wolverine",
        year: "2024",
        month: "Jul",
        day: "26",
        genre: "Acción, Comedia",
        image: "https://m.media-amazon.com/images/I/810zZ6ger0L._AC_SL1500_.jpg",
        link: "/el-padrino",
    },
    {
        title: "Furiosa: Una Saga de Mad Max",
        year: "2024",
        month: "May",
        day: "24",
        genre: "Acción, Aventura",
        image: "https://es.web.img3.acsta.net/pictures/24/01/10/16/35/0136216.jpg",
        link: "/el-padrino",
    },
    {
        title: "Inside Out 2",
        year: "2024",
        month: "Jun",
        day: "14",
        genre: "Animación, Comedia",
        image: "https://www.ecartelera.com/carteles/18100/18190/002_m.jpg",
        link: "/el-padrino",
    },
    {
        title: "Alien: Romulus",
        year: "2024",
        month: "Ago",
        day: "15",
        genre: "Ciencia Ficción, Terror",
        image: "https://lumiere-a.akamaihd.net/v1/images/1_preview_alienromulus_latam_1sht_048_v2_simp_cmyk_c04c_74c20d70.jpeg?region=0%2C0%2C1240%2C1772",
        link: "/el-padrino",
    },
];

function UpcomingRealeasesSection() {
    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <header className={styles.Header}>
                    <h2>Próximos Estrenos</h2>
                    <a href="/peliculas/dune-2">
                        Ver todos
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
                        <UpcomingReleasesCard
                            key={index}
                            title={item.title}
                            year={item.year}
                            month={item.month}
                            day={item.day}
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

export default UpcomingRealeasesSection;
