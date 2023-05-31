import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import devpool from '../../img/devpool.jpeg';
function Home() {
  return (
    <div className="home-container">
      <div className="me-container">
        <div className="text-container">
          <h1>Bienvenido a mi sitio web</h1>
          <p>Texto de presentación</p>
        </div>
        <div className="image-container">
          <img src={devpool} alt="Foto de presentación" />
        </div>
      </div>

      <div className='myWork-container'>
        <h2>Explora mi trabajo</h2>
        <div className="link-container">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/store">Tienda</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
