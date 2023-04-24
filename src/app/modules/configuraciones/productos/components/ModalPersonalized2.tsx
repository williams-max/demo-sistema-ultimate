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
import Swal from 'sweetalert2';

const genders = [
    {
      value: 'M',
      label: 'Perfil01',
    },
    {
      value: 'F',
      label: 'Perfil02',
    },
  
  ];  

const styleModal = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 1,
};

//openModalPersonalized={openModal}
//handleOpenModalPersonalized = {handleOpenModal}
//handleCloseModalPersonalized = {handleCloseModal


export const ModalPersonalized2 = (props:any) => {

    const {openModalPersonalized,handleOpenModalPersonalized ,handleCloseModalPersonalized,description} = props;
    
    const [gender, setGender] = React.useState("");

    const handleChange = (event: any) => {
    setGender(event.target.value);
    };   
    //const [openModal, setOpenModal] = useState(false);
    //const handleOpenModal = () => setOpenModal(true);
    //const handleCloseModal = () => setOpenModal(false);

    const AlertaGuardar = () => {
        Swal.fire(
          'GUARDADO!',
          'Se ha Guardado la Receta!',
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
                    mt: 0, textAlign: 'center', fontWeight: 'bold',
                    fontSize: '1.2rem', fontFamily: 'Times New Roman'
                }}>
                   {description}
                </Typography>
                <br />
                <div style={{display:'flex', flexDirection: 'column'}}>
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': { m: 0, width: '32ch' },
                     }}
                    noValidate
                    autoComplete="off"
                >
                    <h4 style={{margin: "5px"}}>Priemra Categoria</h4>
                    <TextField id="outlined-basic" defaultValue="Ingrese" size='small' InputProps={{
                    readOnly: true,
                    }}
                    variant="filled"/>
                    <h4 style={{margin: "5px"}}>Segunda Categoria</h4>
                    <TextField id="outlined-basic" label="Ingrese la Categoria" variant="outlined" size='small' />
                </Box>
                </div>
                <br/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                    <Button onClick={AlertaGuardar} sx={{ backgroundColor: '#008000' }} variant="contained" >Clonar</Button>
                    &nbsp; &nbsp;
                    <Button onClick={handleCloseModalPersonalized} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cancel</Button>
                </div>
            </Box>
        </Modal>
    )
}
