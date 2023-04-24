import React, { useState } from 'react'
import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid, Container, Card, CardContent } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import TextField from '@mui/material/TextField';
import { ModalPersonalized } from './components/ModalPersonalized';
import { IoKeyOutline } from "react-icons/io5";

const Cuis = () => {
//<---modal
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
//modal--->
    return(
        <>
            <Container>
          <Card>
            <CardContent>
              <Grid>
                <Grid item xl={8} lg={6} md={5} sm={4} xs={3}>
                  <div style={{
                    backgroundColor: `#B01F1F`, padding: '0.5%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
                    , alignItems: 'center'
                    }}
                  >
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' , fontFamily:'Times New Roman' }} >
                    <IoKeyOutline/>
                    CUIS
                  </Typography>
                  </div>
                  <br/>
                  <Button sx={{backgroundColor:'#43AA47 ' }} variant="contained" startIcon={<IoKeyOutline fontSize={35}/>} onClick={handleOpenModal}>Nuevo CUIS</Button>
                  <br/>
                  <br/>
                  
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>

        <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        description="Nuevo CUIS"
      />

        </>
    )
}
export default Cuis