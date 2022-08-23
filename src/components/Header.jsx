import React from 'react'
import header from '../images/fotoheader.png'
import { useMediaQuery } from 'react-responsive'

function Header () {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });

    const listStyle = {
        margin: '-5% auto',
        fontSize: isMobile ? '1.5vh' : isTablet ? '100%' : '200%',
        padding: 'auto'
    }

    return (
        <div id="header">
            <img src={header} alt="Miriam"/>
            <ul style={listStyle} className="list-group list-group-horizontal">
                <li className="list-group-item mx-auto">QUEM SOU EU?</li>
                <li className="list-group-item">QUAIS PROJETOS EU JÁ FIZ?</li>
                <li className="list-group-item">QUAIS OS PROJETOS PARA MEU MANDATO?</li>
            </ul>
        </div>
    )
}

export default Header;