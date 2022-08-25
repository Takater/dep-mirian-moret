import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Projetos () {

    const projetos = [
        {
            image: "",
            title: "Saúde Pública",
            description: "Impactei diretamente na melhoria de gerenciamento e monitoramento de medicamentos e fui pioneira na distribuição de medicamentos para o interior do Estado."
        },
        {
            image: "",
            title: "Conclusão de Projetos",
            description: "Providenciei a finalização de projetos para instalação de equipamentos melhores para enfermarias no Estado."
        },
        {
            image: "",
            title: "Contribuição Social",
            description: "Atuação constante e contínua auxiliando a distribuição de acessórios e equipamentos para pessoas com necessidades especiais, incluindo idosos."
        },
        {
            image: "",
            title: "Ressocialização Carcerária",
            description: "Projeto Antitabagismo e instalação de brinquedotecas para filhos dos reeducandos na Colônia Agrícola Penal Ênio Pinheiro"
        },
        {
            image: "",
            title: "Ressocialização de Adolescentes",
            description: "Instalação de laboratório de informática e implantação de cursos de violão, estamparia, e pintura em tela no centro de ressocialização de adolescentes."
        }
    ]

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
                    { projetos.map((projeto, ind) => {
                        return ind <= 2 && (
                            <div className="col-md-4" key={ind}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={ projeto.image } alt={"Imagem: " + projeto.title}/>
                                        <h4 className="card-title">{ projeto.title }</h4>
                                        <p className="card-text">{ projeto.description }</p>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    )}
                </div>
                <div className="row">
                    { projetos.map((projeto, ind) => {
                        return ind > 2 && (
                            <div className="col-md-4" key={ind}>
                                <div className="card">
                                    <div className="card-body">
                                        <img src={ projeto.image } alt={"Imagem: " + projeto.title}/>
                                        <h4 className="card-title">{ projeto.title }</h4>
                                        <p className="card-text">{ projeto.description }</p>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                    )}
                </div>
            </Carousel>
        </div>
    )
}

export default Projetos;