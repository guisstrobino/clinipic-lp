import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© Copyright 2024 Clinipic - Todos os direitos reservados.</p>
            <a href="http://dsc.inf.br/clinipic/pp/politica_privacidade_clinipic.pdf">
                Política de privacidade
            </a>
        </footer>
    );
}
