'use client'

import styles from './MovingCell.module.scss';
import {useEffect, useState} from "react";

const MovingCell = ({cells}) => {
    const [selectedCellIndex, setSelectedCellIndex] = useState(0);
    const [cellData, setCellData] = useState(null);
    const [initialCellWrapperRect, setInitialCellWrapperRect] = useState(null);
    const [transformData, setTransformData] = useState(-15);

    // set selected cell on load
    useEffect(() => {
        const selectedCellElement = document.getElementById(`${selectedCellIndex}`);
        const selectedCellRect = selectedCellElement.getBoundingClientRect();
        setCellData({idx: selectedCellIndex, innerText: cells[selectedCellIndex], cellRect: selectedCellRect});
    }, [selectedCellIndex]);

    useEffect(() => {
        if (initialCellWrapperRect) {
            const transformLogic = ( cellData?.cellRect?.x - initialCellWrapperRect?.x ) -30;
            setTransformData(transformLogic);
        }
    }, [cellData]);

    // get initial cell wrapper x co-ord
    useEffect(() => {
        const cellWrapper = document.getElementById('cell-wrapper');
        const cellWrapperRect = cellWrapper.getBoundingClientRect();
        setInitialCellWrapperRect(cellWrapperRect);
    }, []);

    //

    return (
        <div className={styles.container}>
            <div id={"cell-wrapper"} className={styles.cell__wrapper} style={{transform: `translateX(${transformData}px)`}} ><div style={{width: `${cellData?.cellRect?.width}px`, height: `${cellData?.cellRect?.height}px` }} className={styles.cell__inner}/></div>
            {cells.map((cell, idx) => (
                <p key={idx} id={`${idx}`} onClick={(e)=>setSelectedCellIndex(idx)}>{cell}</p>
            ))}
        </div>
    );
};

export default MovingCell;