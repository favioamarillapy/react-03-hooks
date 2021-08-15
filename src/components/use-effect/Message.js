import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'

export const Message = () => {

    const [cords, setcCords] = useState({ x: 0, y: 0 })
    const { x, y } = cords;

    const mouseMove = (e) => {
        setcCords({
            x: e.x,
            y: e.y
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    })

    return (
        <Alert variant="info">
            x: {x} y: {y}
        </Alert>
    )
}
