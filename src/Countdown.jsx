// Countdown.js
import React, { useEffect, useState } from 'react';
// Countdown.js
import './Countdown.css';  // Importa los estilos


const Countdown = ({ eventDate }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const event = new Date(eventDate);
            const difference = event - now;

            const dias = Math.floor(difference / (1000 * 60 * 60 * 24));
            const horas = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutos = Math.floor((difference / 1000 / 60) % 60);
            const segundos = Math.floor((difference / 1000) % 60);

            setTimeLeft({ dias, horas, minutos, segundos });
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="countdown">
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.dias}</span>
                <span className="countdown-label">Dias</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.horas}</span>
                <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.minutos}</span>
                <span className="countdown-label">Minutos</span>
            </div>
            <div className="countdown-item">
                <span className="countdown-number">{timeLeft.segundos}</span>
                <span className="countdown-label">Segundos</span>
            </div>
        </div>
    );
};

export default Countdown;

