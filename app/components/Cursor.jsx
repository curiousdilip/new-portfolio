import { useEffect, useState } from "react"

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    console.log(mousePosition)

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }
        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])
    return (
        <>
            <div class="cursor-dot"></div>
            <div class="cursor-outline"></div>
        </>
    )
}