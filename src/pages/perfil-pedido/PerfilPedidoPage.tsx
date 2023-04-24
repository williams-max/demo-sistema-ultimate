import React from 'react'
//import  from '../../app/modules/recepcion/Recepcion';
import PerfilPedido from '../../app/modules/perfil-pedido/PerfilPedido';

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

const PerfilPedidoPage = () => {
    return (
            <Container>
                <PerfilPedido />
            </Container>

    )
}

export default PerfilPedidoPage;