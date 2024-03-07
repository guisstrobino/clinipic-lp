import { FeatureCard } from "./FeatureCard";
import styles from "./Features.module.css";

export function Features() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.textsWrapper}>
                <p className={styles.title}>Funcionalidades</p>
                <p className={styles.subtitle}>
                    Descubra a revolução na prática médica estética com o
                    Clinipic! Nosso aplicativo foi meticulosamente projetado
                    para capacitar médicos em cada etapa dos procedimentos
                    estéticos, oferecendo uma gama completa de funcionalidades
                    que simplificam e aprimoram o processo.
                </p>
            </div>
            <div className={styles.cardsWrapper}>
                <FeatureCard
                    title="Gerenciamento de Pacientes"
                    subtitle="Mantenha um registro detalhado de cada paciente, incluindo
                histórico de procedimentos, preferências e resultados
                anteriores, tudo em um só lugar conveniente."
                    id={0}
                />
                <FeatureCard
                    title="Fotografia Clínica Avançada"
                    subtitle="Capture imagens de alta qualidade antes e após os procedimentos, facilitando a comparação de resultados ao longo do tempo e demonstrando progresso aos pacientes."
                    id={1}
                />
                <FeatureCard
                    title="Privacidade e Segurança"
                    subtitle="Assegurando a privacidade dos usuários, o aplicativo implementa medidas robustas para garantir a confidencialidade das imagens capturadas. O processo de captura de imagens é conduzido com total respeito à privacidade do usuário, com opções claras e explícitas para o consentimento do indivíduo antes que qualquer imagem seja coletada."
                    id={2}
                />
            </div>
        </section>
    );
}
