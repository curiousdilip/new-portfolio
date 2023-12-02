"use client"
import { useEffect, useState, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${posX}px`;
                cursorDotRef.current.style.top = `${posY}px`;
            }

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.left = `${posX}px`;
                cursorOutlineRef.current.style.top = `${posY}px`;

                cursorOutlineRef.current.animate(
                    { left: `${posX}px`, top: `${posY}px` },
                    { duration: 500, fill: "forwards" }
                );
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className="cursor-dot"
                ref={cursorDotRef}
            ></div>
            <div
                className="cursor-outline"
                ref={cursorOutlineRef}
            ></div>
        </>
    );
}
