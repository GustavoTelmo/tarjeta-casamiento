// MusicPlayer.js
import React, { useState } from 'react';
import './MusicPlayer.css'; // Importa los estilos

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const audio = new Audio('/music.mp3'); // Asegúrate de que la ruta al archivo sea correcta

    const togglePlayPause = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player-container"> {/* Añadir contenedor */}
            <button className="music-player-button" onClick={togglePlayPause}>
                {isPlaying ? 'Pausar Música' : 'Reproducir Música'}
            </button>
        </div>
    );
};

export default MusicPlayer;


