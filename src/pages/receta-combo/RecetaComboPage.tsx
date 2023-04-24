import React from 'react'
import InventarioCierre from '../../app/modules/inventario-cierre/InventarioCierre';
import RecetaCombo from '../../app/modules/receta/RecetaCombo';
//import Solicitudes from '../../app/modules/solicitudes/Solicitudes';



import { Box, styled, useTheme } from '@mui/material';

const Container = styled('div')(({ theme }) => ({
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px'
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px'
        }
    }
}));

const RecetaComboPage = () => {
    return (

        <Container>
            <RecetaCombo />
        </Container>



    )
}

export default RecetaComboPage;
