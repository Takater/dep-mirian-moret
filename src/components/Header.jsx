import React from 'react'
import header from '../images/fotoheader.png'

function Header () {

    return (
        <div id="header">
            <img src={header} alt="Miriam"/>
            <ul id="link-list">
                <li>QUEM SOU EU?</li>
                <li>QUAIS PROJETOS EU JÁ FIZ?</li>
                <li>QUAIS OS PROJETOS PARA MEU MANDATO?</li>
            </ul>
        </div>
    )
}

export default Header;