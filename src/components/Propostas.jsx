import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Propostas () {

    // Grade do Painel
    function TabPanel(props) {
        const { children, value, index, ...other} = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
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

    return (
        <div id="propostas">
            <h3>
                A principal responsabilidade de um(a) Dep. Estadual é representar o povo dentro da Assembléia Legislativa do Estado
                que foi eleito. Isso inclui criar, apresentar, e monitorar projetos de lei. Assim como fiscalizar a atuação do Executivo
                Estadual (Governador). Sendo assim, como Deputada Estadual, irei criar projetos voltados para as áreas
                de <span>Saúde</span>, <span>Educação</span> e <span>Segurança Pública</span>.
            </h3>
        </div>
    )
}

export default Propostas;