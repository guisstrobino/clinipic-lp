import { PriceCard } from "./PriceCard";
import styles from "./Prices.module.css";

export function Prices() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.textsWrapper}>
                <p className={styles.title}>Planos e preços</p>
            </div>
            <div className={styles.cardsWrapper}>
                <PriceCard
                    title="Grátis"
                    description="Experimente as características essenciais do aplicativo sem qualquer custo."
                    topic1="Cadastro de 10 pacientes."
                    topic2="2 procedimentos por paciente."
                />
                <PriceCard
                    title="Básico"
                    price="R$20/mês"
                    description="Desbloqueie recursos essenciais para uma experiência mais completa."
                    topic1="Cadastro de 100 pacientes."
                    topic2="2 procedimentos por paciente."
                />
                <PriceCard
                    title="Premium"
                    price="R$45/mês"
                    description="Desbloqueie todas as funcionalidades premium para uma experiência sem restrições."
                    topic1="Pacientes ilimitados."
                    topic2="Procedimentos ilimitados."
                    topic3="Possibilidade de customização das fotos comparativas."
                />
            </div>
        </section>
    );
}
