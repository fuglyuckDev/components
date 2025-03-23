'use client'

import styles from './ExpandingCards.module.scss'
import {useState} from "react";

const ExpandingCards = () => {
    const [selected, setSelected] = useState(0)

    const items = new Array(5);

    for (let i = 0; i < items.length; i++) {
        items[i] = i
    }

    return (
        <div className={styles.container}>
            {items.map((item, i) => (
                <div key={i} className={`${styles.card} ${selected === i ? styles.grow : styles.unselected}`} onClick={() => setSelected(i)}>
                    <div className={styles.inner}>
                        <div className={styles.content__container}>
                            <p>{`{YOUR_COMPONENTS_HERE}`}</p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpandingCards;