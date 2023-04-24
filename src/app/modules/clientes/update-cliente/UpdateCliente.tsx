import { Typography, Button, Collapse, TextField, Modal, Grid, InputAdornment, Stack } from '@mui/material'
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
import SearchIcon from '@mui/icons-material/Search';
import TableViewIcon from '@mui/icons-material/TableView';


import { ModalPersonalized } from '../components/ModalPersonalized';


import { ModalForm } from '../components/ModalForm';

import { ModalTabla } from '../components/ModalTabla';
import PersonIcon from '@mui/icons-material/Person';
import { Controller, useForm } from "react-hook-form";


import MapRegisterView from '../components/MapRegisterView';

import { styled } from '@mui/material/styles';


import { purple } from '@mui/material/colors';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SellIcon from '@mui/icons-material/Sell';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SignpostIcon from '@mui/icons-material/Signpost';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import EditIcon from '@mui/icons-material/Edit';

const genders = [
  {
    value: 'A',
    label: 'Cochabamba',
  },
  {
    value: 'B',
    label: 'Santa Cruz',
  },
  {
    value: 'C',
    label: 'La Paz',
  },
  {
    value: 'E',
    label: 'Beni',
  },

];

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '38%',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  //border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UpdateCliente = () => {

  const { handleSubmit, control } = useForm();

  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };



  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const handleChangeSelect = (event: any) => {
    //setAge(event.target.value);
    setValueSelct(event.target.value)
  };


  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const [openModal, setOpenModal] = useState(false);


  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  //two
  const [openModalDos, setOpenModalDos] = useState(false);


  const handleOpenModalDos = () => setOpenModalDos(true);
  const handleCloseModalDos = () => setOpenModalDos(false);
  //thre
  const [openModalTres, setOpenModalTres] = useState(false);
  const handleOpenModalTres = () => setOpenModalTres(true);
  const handleCloseModalTres = () => setOpenModalTres(false);
  //four
  const [openModalCuatro, setOpenModalCuatro] = useState(false);
  const handleOpenModalCuatro = () => setOpenModalCuatro(true);
  const handleCloseModalCuatro = () => setOpenModalCuatro(false);



  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#DC3545'),
    backgroundColor: '#DC3545',
    '&:hover': {
      backgroundColor: '#A31826',
    },
  }));
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#2A2D34'
    }}>

      {/* <Button variant="contained" sx={{ backgroundColor: '#D32F2F' }} endIcon={<Select
        // labelId="demo-simple-select-label"
        // sx={{width:'400px'}}
        //  id="demo-simple-select"
        //  value={age}
        // label="Age"


        sx={{
          height: '30px',
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
          "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
          "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: 0,
          },
        }}
        onChange={handleChange}


      >
        <MenuItem value={10}><ExplicitOutlinedIcon sx={{ color: '#43A047' }} />  Excel</MenuItem>


      </Select>}

      >
        Descargar Reportes
      </Button >*/}


      <Collapse in={openOne} timeout="auto" unmountOnExit>
        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' }} >
          Excel
        </Typography>

      </Collapse>


      <br />





      <div style={{ maxWidth: '180px', margin: 'auto', marginBottom: '8px', marginTop: '1%' }}>
        <img style={{ width: '100%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/logo.png" />
      </div>

      <Box sx={{ width: '90%', backgroundColor: 'white', margin: 'auto', borderRadius: '5px' }}>
        <div style={{
          backgroundColor: '#DC3545', padding: '0.5%', display: 'flex', flexDirection: 'row',
          justifyContent: 'flex-start', borderRadius: '5px', marginTop: '1%'
          , alignItems: 'center'

        }}
        // onClick={handleClick}
        >



          <EditIcon sx={{ marginLeft: '20px', color: 'white' }} />
          <Typography variant="subtitle1" gutterBottom sx={{ margin: 0, marginLeft: '15px', color: 'white' }} >
            ACTUALIZAR CLIENTE
          </Typography>

        </div>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 0 }} >

          <Grid item xs={12} sm={12} md={8} sx={{ margin: '10px' }}>

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }} >
              <Grid item xs={12} sm={4} md={6} >

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
                    Buscar
                  </Typography>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Buscar"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        size="small"
                        sx={{
                          width: '100%',
                        }}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <PersonIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>
              </Grid>

              <Grid item xs={12} sm={7} md={6} >

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
                    Nombre Completo
                  </Typography>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Nombre Completo"
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        sx={{
                          width: '100%',
                        }}
                        helperText={error ? error.message : null}
                        size="small"

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <PersonIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>
              </Grid>
            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              {/*<Grid item xs={12} sm={6} md={3}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
                    Tipo de Documento
                  </Typography>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Tipo de Documento"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        size="small"

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <FolderSharedIcon sx={{ color: '#777777' }} />

                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>
              </Grid>*/}
              <Grid item xs={12} sm={6} md={4}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
                    Carnet de Identidad
                  </Typography>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label=" Carnet de Identidad"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        size="small"

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <FolderSharedIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
                    Complemento
                  </Typography>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Complemento"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        size="small"

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <FolderSharedIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '4px', color: '#666666' }}>
                    Expedido
                  </Typography>

                  <TextField
                    id="outlined-select-gender"
                    select
                    label="Expedido"
                    //label={gender === "" ? "Seleccione una Opción" : ""}
                    value={gender}
                    onChange={handleChange}
                    //  sx={{ width: '100%' }}
                    // InputLabelProps={{ shrink: false }}


                    SelectProps={{
                      MenuProps: {

                      },
                    }}
                    //   margin='normal'
                    size="small"
                    variant="outlined"

                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='end'>

                          <KeyboardDoubleArrowDownIcon sx={{ color: '#777777' }} />
                        </InputAdornment>
                      )
                    }}
                  >
                    {genders.map(option => (
                      <MenuItem key={option.value} value={option.value}

                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  {/* <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Expedido"
                        variant="outlined" sx={{
                          width: '95%',
                        }}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                        size="small"

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <FolderSharedIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                      )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />*/}
                </div>
              </Grid>



              <Grid item xs={12} sm={12} md={6}>

                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>
                  NIT
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="NIT"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        onChange={onChange}
                        size="small"
                        error={!!error}
                        helperText={error ? error.message : null}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <SellIcon sx={{ color: '#777777' }} />
                              {/* <PersonIcon sx={{ color: '#777777' }} />*/}
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>


              </Grid>
              <Grid item xs={12} sm={12} md={6}>

                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>
                  Nombre facturacion
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Nombre facturacion"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        size="small"
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              <PersonIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>


              </Grid>

              <Grid item xs={12} sm={12} md={6}>

                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>
                  Direccion
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Direccion"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        onChange={onChange}
                        size="small"
                        error={!!error}
                        helperText={error ? error.message : null}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              < SignpostIcon sx={{ color: '#777777' }} />
                              {/*<PersonIcon sx={{ color: '#777777' }} />*/}
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>


              </Grid>
              <Grid item xs={12} sm={12} md={6}>

                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>

                  Correo electronico
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label=" Correo electronico"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        size="small"
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              < LocalPostOfficeIcon sx={{ color: '#777777' }} />
                              {/*<PersonIcon sx={{ color: '#777777' }} />*/}
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>


              </Grid>



              <Grid item xs={12} sm={12} md={6}>

                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>
                  Celular
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Celular"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        onChange={onChange}
                        size="small"
                        error={!!error}
                        helperText={error ? error.message : null}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              < PhoneIphoneIcon />
                              {/* < PhoneIcon />*/}
                              {/*<PersonIcon sx={{ color: '#777777' }} />*/}
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>


              </Grid>
              <Grid item xs={12} sm={12} md={6}>

                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>

                  Telefono fijo
                </Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <Controller
                    name={"user"}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                      <TextField id="outlined-basic" label="Telefono fijo"
                        variant="outlined" sx={{
                          width: '100%',
                        }}
                        value={value}
                        size="small"
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}

                        InputProps={{
                          startAdornment: (
                            <InputAdornment position='end'>
                              < PhoneIcon sx={{ color: '#777777' }} />
                            </InputAdornment>
                          )
                        }}
                      />
                    )}
                    //rules={{ required: true}}
                    rules={{ required: 'Completa este campo' }}
                  />
                </div>


              </Grid>
              <Grid item xs={12} sm={12} md={12} container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <ColorButton variant="contained" startIcon={< EditIcon/>}> Actulizar</ColorButton>
              </Grid>

              {/*<Stack spacing={2} direction="row">
                <ColorButton variant="contained">Custom CSS</ColorButton>
                <BootstrapButton variant="contained" disableRipple>
                  Bootstrap
                </BootstrapButton>
              </Stack>*/}

            </Grid>
          </Grid>






          <Grid item xs={12} sm={12} md={3}>
            <MapRegisterView />
          </Grid>
        </Grid>

      </Box>





    </div >
  )
}

export default UpdateCliente