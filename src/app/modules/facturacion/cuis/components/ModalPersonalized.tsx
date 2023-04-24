
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

import Autocomplete from '@mui/material/Autocomplete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Usuarios = [
    { label: 'Sucursal Salamanca', year: 1994 },
    { label: 'Sucursal Quillacollo', year: 1972 },
    { label: 'Sucursal A. Games', year: 1974 },
    { label: 'Sucursal Circuito Bolivia', year: 2008 },
    { label: 'Sucursal Pando', year: 1957 },
    { label: 'Sucursal America O.', year: 1993 },
    { label: 'Franquicia Hagen Ruhrig'},
    { label: 'Sucursal Hupermall', year: 1994 },
    { label: 'Administracion'},
    { label: 'Sucursal Parque Lincoln'},
    { label: 'Sucursal Jordan'},
    { label: 'Sucursal America Este'},
    { label: 'Sucursal Mega Center'},
  
  ];

const styleModal = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: '25%',
    high: '20%',
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


export const ModalPersonalized = (props:any) => {

    const {openModalPersonalized,handleOpenModalPersonalized ,handleCloseModalPersonalized,description} = props;

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

    return (
        <Modal
            open={openModalPersonalized}
            onClose={handleCloseModalPersonalized}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={styleModal}>

                <Typography id="modal-modal-description" sx={{
                    mt: 2, textAlign: 'center', fontWeight: 'bold',
                    fontSize: '1rem'
                }}>
                   {description}
                </Typography>
                <br />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>Codigo de Ambiente</h5>
                  <TextField size="small"
                      sx={{ width: '100%' }}
                      label="Codigo de Ambiente" 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>Punto de Venta</h5>
                  <TextField size="small"
                      sx={{ width: '100%' }}
                      label="Punto de Venta" 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>Codigo de Sistema</h5>
                  <TextField size="small"
                      sx={{ width: '100%' }}
                      label="Codigo de Sistema" 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>NIT</h5>
                  <TextField size="small"
                      sx={{ width: '100%' }}
                      label="NIT" 
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>Sucursal</h5>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={Usuarios}

                    renderInput={(params: any) => <TextField {...params}
                      size="small"
                      sx={{ width: '100%' }}
                      label="Sucursal" />}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h5 style={{ padding: '0px', margin: '0px', marginBottom: '5px' }}>Codigo de modalidad</h5>
                  <TextField size="small"
                      sx={{ width: '100%' }}
                      label="Codigo de modalidad" 
                  />
                </div>
                &nbsp; &nbsp;
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                    <Button sx={{ backgroundColor: '#008000' }} variant="contained" onClick={AlertaGuardar}>Crear</Button>
                    &nbsp; &nbsp;
                    <Button onClick={handleCloseModalPersonalized} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}
