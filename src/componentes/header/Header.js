import React from 'react'
import './Header.css';


function Header() {
    return (
        <div className='header-links'>
            <a href={`/`}>Home</a>
            <div>
                <a href={`/`}>Home</a>
                <a href={`/`}>Home</a>
            </div>
            <div className='smIcons'>
{/*                 <a href="https://www.facebook.com/hilodoble/?locale=es_LA" target="_blank" rel="noreferrer"><img className='fbIcon' src={} alt="Facebook Profile" /></a>
 */}            </div>
        </div>
    )
}

export default Header