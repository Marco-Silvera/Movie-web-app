import styles from "./HeroHomePage.module.scss";
import Link from "next/link";

export default function HeroHomePage() {
    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <div className={styles.HeroContainer}>
                    {/* Capa de degradado */}
                    <div className={styles.Overlay} />

                    {/* Imagen de fondo */}
                    <img
                        src="https://a.ltrbxd.com/resized/sm/upload/qp/uv/i4/8b/l6b9YZEokZl1nt7q0pprrur6btG-1200-1200-675-675-crop-000000.jpg?v=ed21d71137"
                        alt="Película destacada"
                        className={styles.BackgroundImage}
                    />

                    {/* Contenido */}
                    <div className={styles.Content}>
                        <div className={styles.ContentWrapper}>
                            <div className={styles.Badge}>
                                <span className={styles.Pulse} />
                                Nuevo Estreno
                            </div>
                            <h1 className={styles.Title}>Dune: Parte Dos</h1>
                            <div className={styles.MovieInfo}>
                                <div className={styles.Generopc}>
                                    <div className={styles.Rating}>
                                        {/* <Star className={styles.StarIcon} /> */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="#F5C618"
                                            className="bi bi-star-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        <span>8.7/10</span>
                                    </div>
                                    <span className={styles.Separator}>|</span>
                                    <span className={styles.Text}>2024</span>
                                    <span className={styles.Separator}>|</span>
                                    <span className={styles.Text}>166 min</span>
                                    <span className={styles.Separator}>|</span>
                                    <span className={styles.Text}>
                                        Ciencia Ficción, Aventura
                                    </span>
                                </div>
                                <div className={styles.Generomobile}>
                                    <span className={styles.Text}>
                                        Ciencia Ficción, Aventura
                                    </span>
                                </div>
                            </div>
                            <p className={styles.Description}>
                                Paul Atreides se une a los Fremen y comienza un
                                viaje espiritual y político para convertirse en
                                Muad'Dib, mientras busca venganza contra los
                                conspiradores que destruyeron a su familia.
                            </p>
                            <div className={styles.Buttons}>
                                <Link
                                    href="/pelicula/dune-2"
                                    className={styles.PrimaryButton}
                                >
                                    Ver Detalles
                                </Link>
                                <Link
                                    href="/trailer/dune-2"
                                    className={styles.SecondaryButton}
                                >
                                    Ver Trailer
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
