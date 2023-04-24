


import { Typography, Button, Collapse, TextField, Modal, Checkbox } from '@mui/material'
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
//import { QrReader } from 'react-qr-reader';
const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 420,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//openModalPersonalized={openModal}
//handleOpenModalPersonalized = {handleOpenModal}
//handleCloseModalPersonalized = {handleCloseModal


const genders = [
    {
        value: 'M',
        label: 'Bebidas Calientes con Cafe',
    },
    {
        value: 'F',
        label: 'Resposteria',
    },
    {
        value: 'F',
        label: 'Frutas Naturales',
    },
    {
        value: 'F',
        label: '1 Extras de Desayunos',
    },

];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const ModalForm = (props: any) => {

    const { openModalPersonalized, handleOpenModalPersonalized, handleCloseModalPersonalized, description } = props;

    //const [openModal, setOpenModal] = useState(false);
    //const handleOpenModal = () => setOpenModal(true);
    //const handleCloseModal = () => setOpenModal(false);
   
    const [gender, setGender] = useState("");

    const handleChange = (event: any) => {
        setGender(event.target.value);
    };

    const [dataQr, setDataQr] = useState('No result');

    const readQr = () => {
        return (
          <>
            {/*<QrReader
              onResult={(result: any, error: any) => {
                if (!!result) {
                  setDataQr(result?.text);
                }
  
                if (!!error) {
                  console.info(error);
                }
              }}
              style={{ width: '100%' }}
            />*/}
            <p>{dataQr}</p>
          </>
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
                    mt: 2// textAlign: 'center'
                    , fontWeight: 'bold',
                    fontSize: '1.1rem', marginBottom: '10px'
                }}>
                    {/*description*/} Anular Factura
                </Typography>

                {readQr()}

                <div style={{ width: '80%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h6 style={{ padding: '0px', margin: '0px', fontSize: '12px' }}>Seleccione el Motivo de Anulación</h6>

                    </div>
                    <TextField
                        id="outlined-select-gender"
                        select

                        label={gender === "" ? "Seleccione una Opción" : ""}
                        value={gender}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                        InputLabelProps={{ shrink: false }}


                        SelectProps={{
                            MenuProps: {

                            },
                        }}
                        //   margin='normal'
                        size="small"
                        variant="outlined"
                    >
                        {genders.map(option => (
                            <MenuItem key={option.value} value={option.value}

                            >
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                </div>
                <div style={{ width: '80%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h6 style={{ padding: '0px', margin: '0px',marginBottom:'3px', fontSize: '12px' }}>N° Factura de reemplazo</h6>

                    </div>
                    <TextField
                        id="outlined-select-gender"

                        label="N° Factura de reemplazo"
                        //  label={gender === "" ? "Seleccione una Opción" : ""}
                        //  value={gender}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                        //  InputLabelProps={{ shrink: false }}


                        SelectProps={{
                            MenuProps: {

                            },
                        }}
                        //   margin='normal'
                        size="small"
                        variant="outlined"
                    />



                </div>


                <div style={{ width: '80%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h6 style={{ padding: '0px', margin: '0px',marginBottom:'3px', fontSize: '12px' }}>QR Factura</h6>

                    </div>
                    <TextField
                        id="outlined-select-gender"

                        label="QR Factura"
                        //  label={gender === "" ? "Seleccione una Opción" : ""}
                        //  value={gender}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                        //  InputLabelProps={{ shrink: false }}


                        SelectProps={{
                            MenuProps: {

                            },
                        }}
                        //   margin='normal'
                        size="small"
                        variant="outlined"
                    />



                </div>


                <div style={{ width: '80%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <h6 style={{ padding: '0px', margin: '0px',marginBottom:'3px', fontSize: '12px' }}>Detalle de Anulación</h6>

                    </div>
                    <TextField
                        id="outlined-select-gender"

                        label="Detalle de Anulación"
                        //  label={gender === "" ? "Seleccione una Opción" : ""}
                        //  value={gender}
                        onChange={handleChange}
                        sx={{ width: '100%' }}
                        //  InputLabelProps={{ shrink: false }}


                        SelectProps={{
                            MenuProps: {

                            },
                        }}
                        //   margin='normal'
                        size="small"
                        variant="outlined"
                    />



                </div>

                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {/*<Button sx={{ backgroundColor: '#7066E0' }} variant="contained" >Si</Button>*/}
                    &nbsp; &nbsp;
                    <Button sx={{ backgroundColor: '#DC3741' }} variant="contained" >Registrar</Button>

                    {/*  <Button onClick={handleCloseModalPersonalized} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cancel</Button>*/}
                </div>
            </Box>
        </Modal>
    )
}
