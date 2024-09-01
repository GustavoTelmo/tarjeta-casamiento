// RSVPButton.js
import React from 'react';

export const RSVPButton = ({ phoneNumber, message }) => {
    // Codifica el mensaje para que sea válido en una URL
    const encodedMessage = encodeURIComponent(message);

    // Construye la URL de WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        <div className="rsvp-button">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <button>Confirmar Asistencia por WhatsApp</button>
            </a>
        </div>
    );
};

export default RSVPButton;
