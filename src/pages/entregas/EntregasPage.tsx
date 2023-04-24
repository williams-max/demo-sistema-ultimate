import React from 'react'
import Entregas from '../../app/modules/entregas/Entregas';
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

const EntregasPage = () => {
    return (
        <Container>
            <Entregas />
        </Container>

    )
}

export default EntregasPage;