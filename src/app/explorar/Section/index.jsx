import styles from "./Section.module.scss";
import Card from "./Card";

const data = [
    {
        title: "Dune: Parte Dos",
        year: "2024",
        rating: "8.7",
        image: "https://preview.redd.it/us45ml1x7ehc1.jpeg?auto=webp&s=c2e39b5259557054cd9268bbc84172f2a347e008",
        link: "/dune-2",
    },
    {
        title: "Oppenheimer",
        year: "2023",
        rating: "8.5",
        image: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        link: "/oppenheimer",
    },
    {
        title: "Pobres Criaturas",
        year: "2023",
        rating: "8.1",
        image: "https://es.web.img3.acsta.net/pictures/23/11/07/13/22/3612461.jpg",
        link: "/pobres-criaturas",
    },
    {
        title: "Los Asesinos de la Luna",
        year: "2023",
        rating: "7.7",
        image: "https://www.lahiguera.net/cinemania/pelicula/10653/los_asesinos_de_la_luna-cartel-11387.jpg",
        link: "/pobres-criaturas",
    },
    {
        title: "Godzilla y Kong: El Nuevo imperio",
        year: "2024",
        rating: "7.2",
        image: "https://www.ecartelera.com/carteles/18200/18251/002_m.jpg",
        link: "/godzilla",
    },
    {
        title: "Kung Fu Panda 4",
        year: "2024",
        rating: "7.0",
        image: "https://www.uvk.pe/images/movie/1709047518.jpg",
        link: "/godzilla",
    },
    {
        title: "Madame Web",
        year: "2024",
        rating: "5.2",
        image: "https://www.ecartelera.com/carteles/17100/17174/001_m.jpg",
        link: "/godzilla",
    },
    {
        title: "Aquaman y El Reino perdido",
        year: "2023",
        rating: "6.8",
        image: "https://cartelera.elpais.com/assets/uploads/2023/12/20030108/C_25936.jpg",
        link: "/godzilla",
    },
];

function Section() {
    return (
        <section className={styles.Container}>
            {data.map((movie, index) => (
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
