
import Swal from 'sweetalert2';

import { Typography, Button, Collapse, TextField, Modal } from '@mui/material'
import React, { useState } from 'react'

import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';


import FindInPageIcon from '@mui/icons-material/FindInPage';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
const styleModal = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: '28%',
    minWidth: 420,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

//openModalPersonalized={openModal}
//handleOpenModalPersonalized = {handleOpenModal}
//handleCloseModalPersonalized = {handleCloseModal


export const ModalPersonalized2 = (props:any) => {

    const {openModalPersonalized,handleOpenModalPersonalized, mostrartest,handleCloseModalPersonalized,description} = props;
console.log("respuesta ",mostrartest.token)
    //const [openModal, setOpenModal] = useState(false);
    //const handleOpenModal = () => setOpenModal(true);
    //const handleCloseModal = () => setOpenModal(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const AlertaGuardar = () => {
      Swal.fire(
        'GUARDADO!',
        'Se ha Guardado el Perfil!',
        'success'
      )
    }

    const [rows, setRows] = React.useState<any>([]);

    // const addElemento = () => {
    //   setRows([...rows,
    //   {
        
    //     token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSb25h",
    //     fechaactivacion: "2022-11-10",
    //     fechaven: "2023-10-31",
    //     pagar: 10
    //   }
    //   ]);
    // }

    //const {elemento} = (data:any);


    return (
        <Modal
            open={openModalPersonalized}
            onClose={handleCloseModalPersonalized}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleModal}>

                <Typography id="modal-modal-description" sx={{
                    mt: 1, textAlign: 'center', fontWeight: 'bold',
                    fontSize: '1rem'
                }}>
                   {description}
                </Typography>
                <br />
                
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h4 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>Token API</h4>
                  {/* <TextField
                      sx={{ width: '100%' }}
                      //label="Punto de Venta" 
                      multiline
                      maxRows={10}
                      
                  >
                    
                  
                  </TextField> */}
                  {mostrartest.token}
                </div>
                <br/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                    &nbsp; &nbsp;
                    <Button onClick={handleCloseModalPersonalized} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}
