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
import { InputTextFieldCustomWithIcon } from '../../../common/forms/Input';

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

const CrearCliente = () => {

  const { formState, handleSubmit, control, register, getValues } = useForm();

  const [openOne, setOpenOne] = useState(false);
  const handleClick = () => {
    setOpenOne(!openOne);
  };

  const { errors } = formState;

  const [valueSelect, setValueSelct] = useState('Button Prueba');

  const handleChangeSelect = (event: any) => {
    //setAge(event.target.value);
    setValueSelct(event.target.value)
  };


  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
    register('user1', event.target.value)
    console.log("get values ", getValues())


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

  const onSubmit = async (data: any) => {
    console.log("enviando datos form ", data)
  }
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      backgroundColor: '#2A2D34'
    }}>




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



          <PersonAddAlt1Icon sx={{ marginLeft: '20px', color: 'white' }} />
          <Typography variant="subtitle1" gutterBottom sx={{ margin: 0, marginLeft: '15px', color: 'white' }} >
            REGISTRO DE CLIENTE
          </Typography>

        </div>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 0 }} >

          <Grid item xs={12} sm={12} md={8} sx={{ margin: '10px' }}>

            <Grid item xs={12} sm={12} md={12} >

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>
                  Nombre Completo
                </Typography>

                <Controller
                  name={"nombre_completo"}
                  control={control}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField id="outlined-basic" label="Nombre Completo"
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
                            <PersonIcon sx={{ color: '#777777' }} />
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                  rules={{ required: true }}
                //  rules={{ required: 'Completa este campo',maxLength:3 }}
                />


              </div>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
              <Grid item xs={12} sm={6} md={3}>
                <InputTextFieldCustomWithIcon
                  label={"Tipo de Documento"}
                  control={control}
                  isRequired={true}
                  iconButton={<FolderSharedIcon sx={{ color: '#777777' }} />}
                  nameRegister={'tipo_documento'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InputTextFieldCustomWithIcon
                  label={"Carnet de Identidad"}
                  control={control}
                  isRequired={true}
                  iconButton={<FolderSharedIcon sx={{ color: '#777777' }} />}
                  nameRegister={'ci'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <InputTextFieldCustomWithIcon
                  label={"Complemento"}
                  control={control}
                  isRequired={true}
                  iconButton={<FolderSharedIcon sx={{ color: '#777777' }} />}
                  nameRegister={'complemeto'}
                />

              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ color: '#666666' }}>
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

                    inputProps={register('currency', {
                      required: 'Please enter currency',
                    })}
                    error={errors.currency}
                    helperText={errors ?  errors.currency?.message: null}

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

                </div>
              </Grid>



              <Grid item xs={12} sm={12} md={6}>
                <InputTextFieldCustomWithIcon
                  label={"NIT"}
                  control={control}
                  isRequired={true}
                  iconButton={<SellIcon sx={{ color: '#777777' }} />}
                  nameRegister={'nit'}
                />

              </Grid>
              <Grid item xs={12} sm={12} md={6}>

                <InputTextFieldCustomWithIcon
                  label={"Nombre facturacion"}
                  control={control}
                  isRequired={true}
                  iconButton={<PersonIcon sx={{ color: '#777777' }} />}
                  nameRegister={'numfact'}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={6}>

                <InputTextFieldCustomWithIcon
                  label={" Direccion"}
                  control={control}
                  isRequired={true}
                  iconButton={< SignpostIcon sx={{ color: '#777777' }} />}
                  nameRegister={'direccion'}
                />



              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <InputTextFieldCustomWithIcon
                  label={"Correo electronico"}
                  control={control}
                  isRequired={true}
                  iconButton={< LocalPostOfficeIcon sx={{ color: '#777777' }} />}
                  nameRegister={'email'}
                />
              </Grid>



              <Grid item xs={12} sm={12} md={6}>

              <InputTextFieldCustomWithIcon
                  label={"Celular"}
                  control={control}
                  isRequired={true}
                  iconButton={< PhoneIphoneIcon />}
                  nameRegister={'phone'}
                />
             
              </Grid>
              <Grid item xs={12} sm={12} md={6}>

              <InputTextFieldCustomWithIcon
                  label={"Telefono fijo"}
                  control={control}
                  isRequired={true}
                  iconButton={< PhoneIcon sx={{ color: '#777777' }} />}
                  nameRegister={'telephone'}
                />
             

              </Grid>
              <Grid item xs={12} sm={12} md={12} container
                direction="row"
                justifyContent="center"
                alignItems="center">
                <ColorButton variant="contained" onClick={handleSubmit(onSubmit)} startIcon={<PersonAddAlt1Icon />}> Registrarme</ColorButton>
              </Grid>

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

export default CrearCliente