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

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function allyProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
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
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange}
                    aria-label="Painel de Propostas">
                        <Tab label="Saúde" {...allyProps(0)}/>
                        <Tab label="Educação" {...allyProps(1)}/>
                        <Tab label="Segurança Pública" {...allyProps(2)}/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Iremos criar projetos para criação de áreas para idosos e cobrar o investimento em centros de sáude.
                </TabPanel>
            </Box>
        </div>
    )
}

export default Propostas;