import React from 'react';
import { Link } from 'react-router-dom';
/* import PortfolioItem from './PortfolioItem'; */

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link to="/portfolio/fotomontaje">Fotomontaje</Link>
        </li>
        <li>
          <Link to="/portfolio/marketing">Marketing</Link>
        </li>
        <li>
          <Link to="/portfolio/3d">3D</Link>
        </li>
      </ul>

    </div>
  );
}

export default Portfolio;
