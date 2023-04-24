import React from 'react'

import Venta from '../../app/modules/venta/Venta';
//import Solicitudes from '../../app/modules/solicitudes/Solicitudes';


import { Box, styled, useTheme } from '@mui/material';
import BorrarUsuario from '../../app/modules/usuarios/borrar-usuario/BorrarUsuario';
import Accesibilidad from '../../app/modules/usuarios/accesibilidad/Accesibilidad';

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


const AccessibilidadPage = () => {
    return (
        <Container>
            <Accesibilidad />
        </Container>
    )
}

export default AccessibilidadPage;
