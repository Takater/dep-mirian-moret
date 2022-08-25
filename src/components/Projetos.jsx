import React from './react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Projetos () {
    return (
        <div id="projetos">
            <h1>Além de constantes lutas para trazer melhorias</h1>
            <Carousel
                width="100%"
                centerMode={true}
                centerSlidePercentage="100"
                showIndicators={false}
                statusFormatter={(currentItem, total) => currentItem + "/" + total}
                showThumbs={false}
            >

            </Carousel>
        </div>
    )
}

export default Projetos;