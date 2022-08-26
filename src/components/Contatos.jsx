import React from 'react';
import logo from '../images/solidariedade-favicon.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function Contatos () {
    return (
        <div id="contatos" className="text-white py-4 px-4">
            <div className="row">
                <div className="col-md-4">
                    <em>
                        <h1>Mirian Moret</h1>
                        <h5>47.579.027/0001-44</h5>
                        <h3><strong>77123</strong></h3>
                        <h3 style={{color: '#fe6101'}}><img src={logo} alt="Logo Solidariedade"/>SOLIDARIEDADE</h3>
                    </em>
                </div>
                <div className="col-md-4">
                    <ul className="list-unstyled">
                    <li><a className="social-media-link" href="https://instagram.com/mirianmoretlucena">
                        <InstagramIcon />
                        <span>mirianmoretlucena</span>
                    </a></li>
                    <li><a className="social-media-link" href="mailto:assessoriamirianmoret@gmail.com">
                        <EmailIcon />
                        <span>assessoriamirianmoret@gmail.com</span>
                    </a></li>
                    <li><a className="social-media-link" href="https://api.whatsapp.com/send?phone=5569992391429">
                        <WhatsAppIcon />
                        <span>(69) 99239-1429</span>
                    </a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1 style={{color: '#3a0ebc', textShadow: '1px 1px black'}}>Junte-se a nós!</h1>
                    <h5>Entre no nosso grupo de whatsapp através do link abaixo</h5>
                    <a href="https://chat.whatsapp.com/GuXZdfR7EhP5FopIL7vHPy">Amigos De Mirian Moret</a>
                </div>
            </div>
        </div>
    )
}