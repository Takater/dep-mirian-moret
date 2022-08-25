import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Projetos () {
    return (
        <div id="projetos">
            <h3>Além de constantes lutas por melhorias para valorização policial, reeducação carcerária, e saúde pública ao longo
                de anos, atuei diretamente nas seguintes melhorias no serviço público do estado:
            </h3>
            <Carousel
                width="100%"
                centerMode={true}
                centerSlidePercentage="100"
                showIndicators={false}
                statusFormatter={(currentItem, total) => currentItem + "/" + total}
                showThumbs={false}
            >
                <div className="row">
                    
                </div>
            </Carousel>
        </div>
    )
}

export default Projetos;