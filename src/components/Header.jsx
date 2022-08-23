import React from 'react'
import header from '../images/fotoheader.png'
import { useMediaQuery } from 'react-responsive'

function Header () {

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });

    const listStyle = {
        float: 'right',
        marginTop: '-5%',
        fontSize: isMobile ? '2vh' : '100%'
    }

    return (
        <div id="header">
            <img src={header} alt="Miriam"/>
            <ul style={listStyle} className="list-group list-group-horizontal">
                <li className="list-group-item">QUEM SOU EU?</li>
                <li className="list-group-item">QUAIS PROJETOS EU JÁ FIZ?</li>
                <li className="list-group-item">QUAIS OS PROJETOS PARA MEU MANDATO?</li>
            </ul>
        </div>
    )
}

export default Header;