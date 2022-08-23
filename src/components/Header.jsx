import React from 'react'
import header from '../images/fotoheader.png'

function Header () {

    return (
        <div id="header">
            <img src={header} alt="Miriam"/>
            <ul id="link-list" className="list-group list-group-horizontal">
                <li className="list-group-item">QUEM SOU EU?</li>
                <li className="list-group-item">QUAIS PROJETOS EU JÁ FIZ?</li>
                <li className="list-group-item">QUAIS OS PROJETOS PARA MEU MANDATO?</li>
            </ul>
        </div>
    )
}

export default Header;