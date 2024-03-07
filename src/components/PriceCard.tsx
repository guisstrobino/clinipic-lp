import styles from "./PriceCard.module.css";

interface PriceCardProps {
    title: string;
    price?: string;
    description: string;
    topic1: string;
    topic2: string;
    topic3?: string;
}

export function PriceCard(props: PriceCardProps) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textsWrapper}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.price}>{props.price}</p>
            </div>
            <div className={styles.descriptionWrapper}>
                <p className={styles.description}>{props.description}</p>
                <div className={styles.topicWrapper}>
                    <p className={styles.topic}>●</p>
                    <p className={styles.topicText}>{props.topic1}</p>
                </div>
                <div className={styles.topicWrapper}>
                    <p className={styles.topic}>●</p>
                    <p className={styles.topicText}>{props.topic2}</p>
                </div>
                {props.topic3 ? (
                    <div className={styles.topicWrapper}>
                        <p className={styles.topic}>●</p>
                        <p className={styles.topicText}>{props.topic3}</p>
                    </div>
                ) : (
                    <div className={styles.topicWrapper}></div>
                )}
            </div>
            {props.title !== "Grátis" && (
                <div className={styles.buttonWrapper}>
                    <button>Adquirir</button>
                </div>
            )}
        </div>
    );
}
