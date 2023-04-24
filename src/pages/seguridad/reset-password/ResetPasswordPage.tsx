import React from 'react'

import Venta from '../../../app/modules/venta/Venta';
//import Solicitudes from '../../app/modules/solicitudes/Solicitudes';


import { Box, styled, useTheme } from '@mui/material';
import AccesoBotton from '../../../app/modules/seguridad/acceso-boton/AccesoBoton';
import AccesoBotonPage from '../accesoboton/AccesoBotonPage';
import AccesoBotonSucursal from '../../../app/modules/seguridad/acceso-boton-sucursal/AccesoBotonSucursal';
import CambiarPassword from '../../../app/modules/seguridad/cambiar-password/CambiarPassword';
import ResetPassword from '../../../app/modules/seguridad/reset-password/ResetPassword';

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


const ResetPasswordPage = () => {
    return (
        <Container>
            <ResetPassword />
        </Container>
    )
}

export default ResetPasswordPage;
