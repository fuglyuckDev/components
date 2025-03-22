'use client'

import styles from './FloatingDock.module.scss';
import { useEffect, useRef, useState } from "react";

const FloatingDock = () => {
    const containerRef = useRef(null);
    const [isTracking, setIsTracking] = useState(false);
    const [containerRect, setContainerRect] = useState(null);
    const [mousePosInRectX, setMousePosInRectX] = useState(-100);
    const [childrenData, setChildrenData] = useState([]);

    // Update container size dynamically
    useEffect(() => {
        if (!containerRef.current) return;

        const updateContainerRect = () => {
            setContainerRect(containerRef.current.getBoundingClientRect());
        };

        const observer = new ResizeObserver(updateContainerRect);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    // Track mouse movement inside the container
    useEffect(() => {
        if (!isTracking || !containerRect) {
            setMousePosInRectX(-100);
            return;
        }

        const updateMousePosition = (e) => {
            setMousePosInRectX(e.clientX - containerRect.x);
        };

        document.addEventListener('mousemove', updateMousePosition);
        return () => document.removeEventListener('mousemove', updateMousePosition);
    }, [isTracking, containerRect]);

    // Calculate children's center points dynamically
    const updateChildrenData = () => {
        if (!containerRef.current ) return;

        const dockRect = containerRef.current.getBoundingClientRect();
        const allChildren = [...document.getElementsByClassName(styles.item)];

        setChildrenData(allChildren.map(child => {
            const rect = child.getBoundingClientRect();
            const centerX = (rect.x - dockRect.x) + rect.width / 2;
            return {
                element: child,
                centerX,
                minX: centerX - 75,
                maxX: centerX + 75,
            };
        }));
    };

    useEffect(() => {
        updateChildrenData();
        const observer = new ResizeObserver(updateChildrenData);
        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, [containerRect]);

    // Apply parabolic scaling effect
    useEffect(() => {
        childrenData.forEach(({ element, centerX, minX, maxX }) => {
            const t = (mousePosInRectX - minX) / (maxX - minX);
            const tCenter = (centerX - minX) / (maxX - minX);
            const size = Math.max(50, 50 + 25 * (1 - 4 * (t - tCenter) ** 2));

            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.transform = `translateY(-${size -50}px)`;
        });
    }, [mousePosInRectX, childrenData]);


    return (
        <div
            className={styles.container}
            id="FloatingDock"
            ref={containerRef}
            onMouseEnter={() => setIsTracking(true)}
            onMouseLeave={() => setIsTracking(false)}
        >
            {Array(5).fill(null).map((_, i) => (
                <div key={i} className={styles.item}>+</div>
            ))}
        </div>
    );
};

export default FloatingDock;
