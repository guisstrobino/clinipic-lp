import { Header } from "./Header";
import styles from "./Intro.module.css";

export function Intro() {
    return (
        <>
            <Header />
            <section className={styles.wrapper}>
                <div className={styles.textsWrapepr}>
                    <p className={styles.title}>
                        Potencialize sua Prática Estética
                    </p>
                    <p className={styles.subtitle}>
                        Transforme sua prática estética com precisão e
                        praticidade - O poder está em suas mãos!
                    </p>
                    <p className={styles.subtitle}>
                        Compatível com iOS e Android.
                    </p>
                </div>
            </section>
        </>
    );
}
