import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Projetos () {
    return (
        <div id="projetos">
            <h2>Além de constantes lutas por melhorias para valorização policial, reeducação carcerária</h2>
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