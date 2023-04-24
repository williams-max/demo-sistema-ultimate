
import RevisionPedido from '../../app/modules/revision-pedido/RevisionPedido';


import {  styled} from '@mui/material';

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

const RevsionPedidioPage = () => {
    return (


        <Container>
            <RevisionPedido />
        </Container>


    )
}

export default RevsionPedidioPage;
