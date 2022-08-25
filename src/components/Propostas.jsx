import React, { useState } from 'react';
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
                sx={{ flexGrow: 1, display: 'flex'}}
            >
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="Painel de Propostas"
                        orientation="vertical"
                        variant="scrollable"
                        sx={{borderRight: 1, borderColor: 'divider', backgroundColor: 'rgba(30, 24, 72, 1)', borderRadius: '16px'}}
                        >
                        <Tab className="fs-3 tab-label" label="Saúde" {...allyProps(0)}/>
                        <Tab className="fs-3 tab-label" label="Educação" {...allyProps(1)}/>
                        <Tab className="fs-3 tab-label" label="Segurança Pública" {...allyProps(2)}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <p className="fs-5 tab-text">Iremos criar projetos para criação de áreas para idosos e cobrar o investimento em centros de sáude.</p>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <p className="fs-5 tab-text">
                        Para mim, a Educação é o pilar da sociedade e precisar ser realmente valorizado.<br />
                        Iremos criar projetos para implantação de aulas gratuitas nas áreas de esporte, arte, e musicalização em escolas e igrejas, e
                        ampliação da quantidade de creches públicas para período integral, para assim permitir que mães que não têm condições
                        de pagar uma babá possam trabalhar. Além disso, na intenção de ajudar não só essas mães, mas também mulheres que sofrem
                        violência doméstica e estão financeiramente presas, iremos criar projetos para cursos profissionalizantes para geração de renda.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <p className="fs-5 tab-text">

                    </p>
                </TabPanel>
            </Box>
        </div>
    )
}

export default Propostas;