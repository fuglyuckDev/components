'use client'

import styles from './Flip.module.scss'
import {useEffect, useRef, useState} from "react";

const Flip = ({initialText, textArray}) => {

    // Which index in the textArray is targeted
    const [targetString, setTargetString] = useState(0);

    // The width of the string for the orange container to set to (for transition)
    const [width, setWidth] = useState(null);

    // Listens to the last item in the individual string's array to finish animating, using onAnimationEnd
    const [toggle, setToggle] = useState(false);

    // Target the orange text container
    const containerRef = useRef(null);

    // Target the hidden text container (to parse width)
    const ref = useRef();

    // Cycle Strings
    useEffect(() => {
           const arrayLength = textArray.length;
           const maxIndex = arrayLength - 1;
             setTargetString(prev => {
                 if (prev === maxIndex) {
                     return 0;
                 } else {
                     return prev + 1;
                 }
             })
    }, [toggle]);
    // Whenever the last frame of animation is complete, run this effect.

    // When the target string index changes, re-set the width state to the hidden text width.
    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth+20);
        }
    }, [targetString])


    return (
        <div className={styles.container}>
            <p>{initialText}</p>
            <div className={styles.child__container} ref={containerRef} style={{ width: `${width}px` }} >
                {textArray.map((text, index) => {
                    if (targetString === index) {
                        return (
                            <span key={index} className={styles.span__container}>{
                                text.split("").map((letter, index) => (
                                    <p key={index} className={styles.testing}
                                       onAnimationEnd={()=> {
                                           index === text.split("").length - 1 ? setToggle(prev=>!prev) : null;
                                       }}
                                       style={{animationDelay: `${(index + 1) / 20}s`}}>{letter === " " ? "\xa0" : letter}</p>
                                ))
                            }

                            </span>
                        )
                    }
                })}
            </div>
            <span ref={ref} className={styles.hiddenMeasure}>
                {textArray[targetString]}
            </span>
        </div>
    );
};

export default Flip;