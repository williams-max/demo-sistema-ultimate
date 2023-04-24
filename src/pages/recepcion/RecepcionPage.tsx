import React from 'react'
import Recepcion from '../../app/modules/recepcion/Recepcion';
import MuiNavbar from '../../core/components/navbar/MuiNavbar';

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

const RecepcionPage = () => {
    return (
        
            <Container>
                <Recepcion />
            </Container>

    )
}

export default RecepcionPage;