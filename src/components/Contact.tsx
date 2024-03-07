import styles from "./Contact.module.css";

export function Contact() {
    return (
        <section className={styles.wrapper}>
            <p className={styles.title}>Entre em contato</p>
            <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                    <p className={styles.description}>Telefone</p>
                    <p className={styles.content}>(99) 99999-9999</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.description}>Email</p>
                    <p className={styles.content}>clinipic@clinipic.com.br</p>
                </div>
            </div>
        </section>
    );
}
