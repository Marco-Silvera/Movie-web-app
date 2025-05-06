import styles from "./DestacadoProximosEstrenos.module.scss";

function DestacadoProximosEstrenos() {
    return (
        <section className={styles.SectionDestacado}>
            <img
                src="https://pics.filmaffinity.com/Furiosa_De_la_saga_Mad_Max-943403371-large.jpg"
                alt="caratula pelicula destacada"
            />
            <div className={styles.Container}>
                <span className={styles.Destacado}>Destacado</span>
                <div className={styles.ContainerText}>
                    <h3>Furiosa: Una Saga de Mad Max</h3>
                    <div className={styles.Details}>
                        <div className={styles.Fecha}>
                            <svg
                                className={styles.IconCalendar}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M8 2v4" />
                                <path d="M16 2v4" />
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="4"
                                    rx="2"
                                />
                                <path d="M3 10h18" />
                            </svg>
                            <p>24 Mayo 2024</p>
                        </div>
                        <p className={styles.Separator}>|</p>
                        <div className={styles.Duration}>
                            <svg
                                className={styles.IconClock}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <p>150 min (estimado)</p>
                        </div>
                    </div>
                    <p className={styles.Description}>
                        Mientras el mundo cae, la joven Furiosa es arrebatada
                        del Lugar Verde de las Muchas Madres y cae en manos de
                        una gran horda de motoristas liderada por el Señor de la
                        Guerra Dementus. Atravesando el Páramo, se topan con la
                        Ciudadela presidida por El Inmortan Joe. Mientras los
                        dos tiranos luchan por el dominio, Furiosa debe
                        sobrevivir a muchas pruebas y reunir los medios para
                        encontrar el camino de vuelta a casa.
                    </p>
                    <div className={styles.Categorias}>
                        <span>Acción</span>
                        <span>Aventura</span>
                        <span>Ciencia Ficción</span>
                    </div>
                    <div className={styles.Buttons}>
                        <button>Ver trailer</button>
                        <button>Recordármelo</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DestacadoProximosEstrenos;
