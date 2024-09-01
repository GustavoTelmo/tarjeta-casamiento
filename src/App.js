import './App.css';
import "leaflet/dist/leaflet.css";
import React from 'react';
import Countdown from './Countdown';
import ImageGallery from './ImageGallery';
import MapComponent from './MapComponent';
import RSVPButton from './RSVPButton';
import MusicPlayer from './MusicPlayer';

function App() {
  const eventDate = "2024-11-30T00:00:00";
  const images = [
    '/image/1.jpg',
    '/image/2.jpg',
    '/image/3.jpg',
    '/image/4.jpg',
    '/image/5.jpg',
    '/image/7.jpg',
    '/image/8.jpg',
    '/image/9.jpg',
    '/image/10.jpg'

  ];
  const location = { lat: -34.68426, lng: -58.50044 };
  const location2 = { lat: -34.6761235, lng: -58.5046351 };
  const phoneNumber = "1165358650";  // Reemplaza con tu número de teléfono
  const message = "¡Hola! Quiero confirmar mi asistencia al evento. Gracias.";

  return (
    <div className="App">
      <MusicPlayer />
      <div className='titulo'>jorge & celeste </div>
      <h4>Despues de tanto tiempo juntos...</h4>
      <h4>¡Hemos decidido casarnos!</h4>
      <h4>queremos que nos acompañes en este gran dia</h4>
      <h4>30-11-2024</h4>
      <h4>¿ Cuanto Falta ? </h4>
      <h5>☟</h5>
      <div className='countdown-container'>
        <Countdown eventDate={eventDate} />
      </div>
      <ImageGallery images={images} />
      <h2>Ceremonia 20hs</h2>
      <h4> Paunero 1100 Villa Madero</h4>
      <div className="map-container">
        <MapComponent location={location} />
      </div>
      <h2>Celebracion 21hs</h2>
      <h4>Benito Álvarez 48, B1766 Villa Madero</h4>
      <div className="map-container">
        <MapComponent location={location2} />
      </div>
      <h6>⊞</h6>
      <h3>Regalo </h3>
      <p>¿Nuestro mejor regalo? Que estes con nosotros este dia...Sin embargo, si deseas colaborar con dinero para
        nuestra luna de miel:</p>
      <p style={{fontSize:'35px'}}>Alias: jorge.celeste</p>
      <h6>ㅗ</h6>
      <div className='elegante'>Vestimenta Elegante </div>
      <RSVPButton phoneNumber={phoneNumber} message={message} />

    </div>
  );
}

export default App;
