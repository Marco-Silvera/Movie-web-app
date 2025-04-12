import styles from "./Contact.module.scss";

function Contact() {
    return (
        <section className={styles.Section}>
            <div className={styles.Container}>
                <h3>Mantente Actualizado</h3>
                <p>
                    Suscríbete para recibir notificaciones sobre nuevos estrenos
                    y recomendaciones personalizadas.
                </p>
                <form action="submit">
                    <input type="text" placeholder="Tu correo electrónico" />
                    <input type="submit" value="Suscribirse" />
                </form>
            </div>
        </section>
    );
}

export default Contact;
