import React from 'react';
import logo from '../images/solidariedade-favicon.png'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Contatos () {
    return (
        <div id="contatos" className="text-white py-4 px-4">
            <div className="row">
                <div className="col-md-4">
                    <em>
                        <h1>Miriam Moret</h1>
                        <h5>47.579.027/0001-44</h5>
                        <h3><strong>77123</strong></h3>
                        <h3 style={{color: '#fe6101'}}><img src={logo} alt="Logo Solidariedade"/>SOLIDARIEDADE</h3>
                    </em>
                </div>
                <div className="col-md-4">
                    <InstagramIcon /> @miriammoret
                </div>
                <div className="col-md-4">
                    WhatsApp Group Link
                </div>
            </div>
        </div>
    )
}