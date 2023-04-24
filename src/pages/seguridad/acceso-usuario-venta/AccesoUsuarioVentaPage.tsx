
//import Solicitudes from '../../app/modules/solicitudes/Solicitudes';


import {  styled } from '@mui/material';

import AccesoUsuarioVenta from '../../../app/modules/seguridad/acceso-usuario-venta/AccesoUsuarioVenta';

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


const AccesoUsuarioVentaPage = () => {
    return (
        <Container>
        
                <AccesoUsuarioVenta />
           
        </Container>
    )
}

export default AccesoUsuarioVentaPage;
