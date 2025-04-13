'use client'

import styles from './PopUpModal.module.scss'
import {useState} from "react";

const PopUpModal = () => {

    const [open, setOpen] = useState(false)


    return (
        <div className={styles.container}>
            <button onClick={()=>setOpen(true)} className={styles.button}>Show Pop-up</button>
            {open? <div className={styles.modal__container}>
                <div className={styles.inner__container}>
                    <div className={styles.card__container__back}>
                        <p>Notification tooltip, something you'd want to alert the user of</p>
                    </div>
                    <div className={styles.card__container__front}>
                        <p>
                            {`It looks like you've clicked the button`}
                        </p>
                        <div className={styles.controls__container}>
                            <button onClick={()=>setOpen(false)} className={styles.close__button}>Close Pop-up</button>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
    );
};

export default PopUpModal;