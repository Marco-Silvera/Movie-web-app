import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Container}>
                <section className={styles.Content}>
                    <div>
                        <h4>Movie Web App</h4>
                        <p>
                            Tu portal de cine con toda la información sobre
                            películas, estrenos, actores y más.
                        </p>
                        <div className={styles.Social}>
                            <a href="/dune-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#e5ae0d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-facebook-icon lucide-facebook"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="/dune-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#e5ae0d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-twitter-icon lucide-twitter"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>

                            <a href="/dune-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#e5ae0d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram-icon lucide-instagram"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>
                            </a>
                            <a href="/dune-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#e5ae0d"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-youtube-icon lucide-youtube"
                                >
                                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                                    <path d="m10 15 5-3-5-3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4>Explorar</h4>
                        <a href="/dune-2">
                            <p>Películas Populares</p>
                        </a>
                        <a href="/dune-2">
                            <p>Mejores Valoradas</p>
                        </a>
                        <a href="/dune-2">
                            <p>Próximos Estrenos</p>
                        </a>
                        <a href="/dune-2">
                            <p>En Cines</p>
                        </a>
                    </div>
                    <div>
                        <h4>Géneros</h4>
                        <a href="/dune-2">
                            <p>Acción</p>
                        </a>
                        <a href="/dune-2">
                            <p>Comedia</p>
                        </a>
                        <a href="/dune-2">
                            <p>Drama</p>
                        </a>
                        <a href="/dune-2">
                            <p>Terror</p>
                        </a>
                        <a href="/dune-2">
                            <p>Ciencia Ficción</p>
                        </a>
                    </div>
                    <div>
                        <h4>Suscríbete</h4>
                        <p>
                            Recibe notificaciones sobre nuevos estrenos y
                            recomendaciones personalizadas.
                        </p>
                        <form action="submit">
                            <input
                                type="text"
                                placeholder="Tu correo electrónico"
                            />
                            <input type="submit" value="Suscribirse" />
                        </form>
                    </div>
                </section>
                <div className={styles.Copy}>
                    <p>
                        © 2025 CineWeb. Todos los derechos reservados.
                        Desarrollado con TMDb API.
                    </p>
                    <p>
                        Este producto utiliza la API de TMDb pero no está
                        avalado ni certificado por TMDb.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
