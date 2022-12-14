import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

    // Painel da Aba
    function TabPanel(props) {
        const { children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{p: 3}}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        )
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function allyProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`
        };
    }

    function Propostas () {

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div id="propostas">
            <h3>
                A principal responsabilidade de um(a) Dep. Estadual é representar o povo dentro da Assembléia Legislativa do Estado
                que foi eleito. Isso inclui criar, apresentar, e monitorar projetos de lei. Assim como fiscalizar a atuação do Executivo
                Estadual (Governador). Sendo assim, como Deputada Estadual, irei criar projetos voltados para as áreas
                de <span>Saúde</span>, <span>Educação</span> e <span>Segurança Pública</span>.
            </h3>
            <Box
                sx={{ flexGrow: 2, display: !isMobile && 'flex'}}
            >
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Painel de Propostas"
                        orientation={isMobile ? "horizontal" : "vertical"}
                        variant="scrollable"
                        sx={{borderRight: 1, borderColor: 'divider', backgroundColor: 'rgba(30, 24, 72, 1)', borderRadius: '16px'}}
                        >
                        <Tab className="fs-3 tab-label" label="Saúde" {...allyProps(0)}/>
                        <Tab className="fs-3 tab-label" label="Educação" {...allyProps(1)}/>
                        <Tab className="fs-3 tab-label" label="Segurança Pública" {...allyProps(2)}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <p className="tab-text">A saúde é uma área muito esquecida pela administração estadual e municipais de RO, principalmente
                    no atendimento a idosos e outras pessoas com necessidades especidades, iremos criar projetos para criação de áreas para esses
                    tipos de pacientes e cobrar o investimento adequado e honesto em centros de sáude.<br /> Também iremos incentivar e apoiar
                    programas de castração, e a criação de abrigos e clínicas pet populares.</p>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p className="tab-text">
                        Para mim, a Educação é o pilar da sociedade e precisar ser realmente valorizado.<br />
                        Iremos criar projetos para implantação de aulas gratuitas nas áreas de esporte, arte, e musicalização em escolas e igrejas, e
                        ampliação da quantidade de creches públicas para período integral, para assim permitir que mães que não têm condições
                        de pagar uma babá possam trabalhar. Além disso, na intenção de ajudar não só essas mães, mas também mulheres que sofrem
                        violência doméstica e estão financeiramente presas a seus agressores, iremos criar projetos para cursos profissionalizantes
                        para geração de renda.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <p className="tab-text">
                        Como Policial Penal há mais de 30 anos, sei que a carência de qualidade no nosso estado é fruto também da desvalorização das
                        carreiras policiais. Irei batalhar para que nossos profissionais heróis sejam valorizados como realmente merecem. Além disso,
                        iremos criar um projeto para criação de uma casa de apoio a mulheres e crianças vítimas de violência doméstica e sexual, com
                        apoio médico, psicológico, estudantil e protetivo.
                    </p>
                </TabPanel>
            </Box>
        </div>
    )
}

export default Propostas;