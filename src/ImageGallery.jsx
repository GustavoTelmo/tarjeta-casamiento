// ImageGallery.js
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageGallery = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Activar la reproducción automática
        autoplaySpeed: 3000, 
    };

    return (
        <div style={{ textAlign: 'center' }}> {/* Contenedor centrado */}
            <h2>← Galeria de Imagenes →</h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`wedding-${index}`}
                            style={{
                                width: '36%',  // Establecer el ancho de la imagen al 60%
                                height: '600px', // Ajustar la altura según sea necesario
                                objectFit: 'cover', // Asegura que la imagen cubra el contenedor
                                margin: '0 auto', // Centrando la imagen horizontalmente
                                display: 'block'  // Necesario para que margin auto funcione en imágenes
                            }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageGallery;




