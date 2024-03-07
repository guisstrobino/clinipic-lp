import styles from "./FeatureCard.module.css";

import { FaUsers, FaCamera, FaLock } from "react-icons/fa";

interface FeatureCardProps {
    title: string;
    subtitle: string;
    id: number;
}

function RenderIcon(id: number) {
    switch (id) {
        case 0:
            return <FaUsers className={styles.icon} size={50} />;
        case 1:
            return <FaCamera className={styles.icon} size={50} />;
        case 2:
            return <FaLock className={styles.icon} size={50} />;
        default:
            return <FaUsers className={styles.icon} size={50} />;
    }
}

export function FeatureCard(props: FeatureCardProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>{RenderIcon(props.id)}</div>
            <p className={styles.title}>{props.title}</p>
            <p className={styles.subtitle}>{props.subtitle}</p>
        </div>
    );
}
