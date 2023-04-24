
//import Solicitudes from '../../app/modules/solicitudes/Solicitudes';


import { styled } from '@mui/material';
import BorrarUsuario from '../../app/modules/usuarios/borrar-usuario/BorrarUsuario';

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


const BorrarUsuarioPage = () => {
    return (
        <Container>
            <BorrarUsuario />
        </Container>
    )
}

export default BorrarUsuarioPage;
