import CalendarioEstrenos from "./CalendarioEstrenos";
import DestacadoProximosEstrenos from "./DestacadoProximosEstrenos";
import HeroProximosEstrenos from "./HeroProximosEstrenos";
import LosMasEsperados from "./LosMasEsperados";
import styles from "./ProximosEstrenos.module.scss";

function ProximosEstrenos() {
    return (
        <section className={styles.SectionProximosEstrenos}>
            <div className={styles.MainContainer}>
                <HeroProximosEstrenos />
                <DestacadoProximosEstrenos />
                <CalendarioEstrenos />
                <LosMasEsperados />
            </div>
        </section>
    );
}

export default ProximosEstrenos;
