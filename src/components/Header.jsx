import React from 'react'
import header from '../images/fotoheader.png'
import { useMediaQuery } from 'react-responsive'

function Header () {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1023px)' });

    const listStyle = {
        margin: '-5% auto',
        fontSize: isMobile ? '1.5vh' : isTablet ? '100%' : '150%',
        padding: 'auto',
        textAlign: 'center'
    }

    return (
        <div id="header">
            <img src={header} alt="Miriam Moret 77123"/>
            <ul style={listStyle} className="list-group list-group-horizontal">
                <li className="list-group-item mx-auto"><a href="#quemsoueu">Minha História</a></li>
                <li className="list-group-item mx-auto"><a href="#projetos">Onde Fiz a Diferença</a></li>
                <li className="list-group-item mx-auto"><a href="#propostas">O Que Pretendo Fazer</a></li>
            </ul>
        </div>
    )
}

export default Header;