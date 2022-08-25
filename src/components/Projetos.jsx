import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

function Projetos () {

    const projetos = [
        {
            image: "https://saude.goiania.go.gov.br/wp-uploads/sites/3/2020/10/prescricao-1.svg",
            title: "Saúde Pública",
            description: "Impactei diretamente na melhoria de gerenciamento e monitoramento de medicamentos e fui pioneira na distribuição de medicamentos para o interior do Estado."
        },
        {
            image: "https://www.sonoticias.com.br/wp-content/uploads/2021/06/Hospital-Regional-de-Sorriso-UTI-990x556.jpg",
            title: "Conclusão de Projetos",
            description: "Providenciei a finalização de projetos para instalação de equipamentos melhores para enfermarias no Estado."
        },
        {
            image: "https://www.portalcomunicare.com.br/wp-content/uploads/2016/04/img_757x4262014_12_02_08_24_20_421264.jpg",
            title: "Contribuição Social",
            description: "Atuação constante e contínua auxiliando a distribuição de acessórios e equipamentos para pessoas com necessidades especiais, incluindo idosos."
        },
        {
            image: "https://www.fmetropolitana.com.br/wp-content/uploads/2020/08/Doen%C3%A7as-identificadas-tiveram-tratamento-prontamente-iniciado.jpg",
            title: "Saúde do Estado de Justiça",
            description: "Impacto direto e significativo na gestão de consultas e distribuição de medicamentos em penitenciárias de todo o estado."
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
            <h3>Além de constantes lutas por melhorias para valorização policial, qualidade na reeducação carcerária, e saúde pública ao longo
                de anos, atuei diretamente nas seguintes melhorias no serviço público do estado:
            </h3>
            <hr />
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
                                        <img className="project-image" src={ projeto.image } alt={"Imagem: " + projeto.title}/>
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
                                        <img className="project-image" src={ projeto.image } alt={"Imagem: " + projeto.title}/>
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