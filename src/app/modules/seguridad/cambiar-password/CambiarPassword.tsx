//import { AuthProvider } from './app/modules/auth/context'
//import { SplashScreenProvider } from './core/context/SplashScrean'
//import { BrowserRouter } from 'react-router-dom'
//import { Navigation } from './app/Navigation'

import React, { useState, useEffect, useContext, useReducer } from 'react';



import { Typography, TextField, Button, InputAdornment, Box, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";



import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import { KDImage } from '../../../../core/modal-loading/KDImage';
import { InputTextFieldPasswordWithIcon } from '../../../common/forms/Input';
//import { KDImage } from '../../core/modal-loading/KDImage';


//import { types } from '../../store/storeReducer'
//import { StoreContext } from '../../store/StoreProvider';


const DisabledBackground = styled(Box)({
  width: "100%",
  height: "100vh",
  position: "absolute",
  background: "red",
  opacity: 0.5,
  //zIndex: 1
});

const CircularLoading = () => (
  <>


    <CircularProgress
      size={70}
      sx={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2
      }}
    />

  </>
);

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#DC3545'),
  backgroundColor: '#DC3545',
  '&:hover': {
    backgroundColor: '#A31826',
  },
}));

const ColorButtonGreen = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#DC3545'),
  backgroundColor: '#28A745',
  '&:hover': {
    backgroundColor: '#1B8332',
  },
}));


const CambiarPassword = () => {

  const navigate = useNavigate()
  //first  local storage 
  //const { login } = useAuth()

  //const [state, dispatch] = useReducer(authReducer, initialStateAuth)


  //const [store, dispatch]  =  useContext(StoreContext)
  //start config loading
  const [loading, setLoading] = useState(

    false

  );
  const clickHandler = (type: any) => {
    setLoading(true);
    // setTimeout(() => setLoading({ ...loading, [type]: false }), 2000);
  };
  //end confing loading 

  const [showPassword, setShowPassword] = useState(false);

  const { formState, handleSubmit, control, register, getValues } = useForm();

  /*
  const onSubmit = async (data: any) => {


    //clickHandler("circular")
    setLoading(true);
    console.log(data);
    const { user, pass } = data;

    try {
      const respuesta = await axios.post('http://192.168.0.20/SistemaGeneralB/index.php/login2', {
        // "user": "amondocorre",
        // "pass": "Capress0"

        "user": user,
        "pass": pass

      })
      console.log("res ", respuesta.data)
      if (respuesta?.data) {
        if (respuesta.data.status) {

          console.log("nombre completo ...", respuesta.data.data.usuario[0].NOMBRE_COMPLETO);
          console.log("menu  ...", respuesta.data.data.menu);

          var name = respuesta.data.data.usuario[0].NOMBRE_COMPLETO;
          var menu = respuesta.data.data.menu;

     


     
          navigate('/home')
        } else {
          setLoading(false);
          setErrorValueEmpty(true);
        }
      } else {
        setLoading(false);
        setErrorValueEmpty(true);
      }
      setLoading(false);

    } catch (error) {
      setLoading(false)
      setErrorValueEmpty(true);


    }
  };
  */

  const [errorValueEmpty, setErrorValueEmpty] = useState(false);

  const handleClickShowPassword = () => {

    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: any) => {
    console.log("enviando datos form ", data)
  }
  return (
    <div style={{ width: '100%' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>




        <Box sx={{
          width: '100%', maxWidth: 390, margin: 'auto', backgroundColor: 'white',
          border: '1px solid #C0C1C1', padding: '20px'


        }}>
          <Typography variant="subtitle1" gutterBottom sx={{
            textAlign: 'center',
            color: 'black', fontSize: '20px', marginBottom: '10px',
            borderTop: '2px solid red'

          }}>
            Cambiar Contraseña
          </Typography>
          <Divider />
          <div style={{ maxWidth: '35%', margin: 'auto', marginBottom: '8px', marginTop: '5%' }}>
            <img style={{ width: '100%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/logo.png" />
          </div>

          {errorValueEmpty ? <>
            <div style={{
              backgroundColor: '#DC3545', margin: '5%', display: 'flex', flexDirection: 'row'
              , padding: '7%'
            }}>
              <Typography variant="subtitle1" gutterBottom sx={{
                color: 'white'
                , textAlign: 'center',
                borderRadius: '5px', fontSize: '13px',
              }}>
                Usuario no encontrado, verifique usuario y contraseña
              </Typography>
              <CloseIcon onClick={() => setErrorValueEmpty(false)} sx={{ fontSize: '12px' }} />
            </div>
          </> : <></>}

       

          <Typography variant="subtitle1" gutterBottom sx={{
            color: '#666666',
            fontSize: '14px'
          }}>
            Usuario
          </Typography>
          <div >
            <Controller
              name={"usuario"}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField id="outlined-basic" label="Usuario"
                  variant="outlined" sx={{
                    width: '100%',
                  }}
                  size='small'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  //InputLabelProps={{shrink: false}}
                  placeholder=''
                  InputProps={{
                    endAdornment: (
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

          <InputTextFieldPasswordWithIcon
            label={"Contraseña Actual"}
            control={control}
            isRequired={true}
            nameRegister={'current_password'}
          />
          <InputTextFieldPasswordWithIcon
            label={"Nueva Contraseña"}
            control={control}
            isRequired={true}
            nameRegister={'new_password'}
          />

          <InputTextFieldPasswordWithIcon
            label={"Repetir Contraseña"}
            control={control}
            isRequired={true}
            nameRegister={'rep_password'}
          />

          <br />
          {loading ? <KDImage
            src={`https://source.unsplash.com/random?sig=${0}`}
            largeSrc={"./taza_loading.png"}
            height={'200px'}
          /> : null}


          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: '10px' }}>
            <ColorButtonGreen variant="contained" sx={{ marginTop: '34px' }} onClick={handleSubmit(onSubmit)}>Enviar</ColorButtonGreen>
            {/*<ColorButton variant="contained" sx={{ marginTop: '34px' }}>Enviar</ColorButton>*/}
            &nbsp; &nbsp;

            <ColorButton variant="contained" sx={{ marginTop: '34px' }}>Buscar</ColorButton>



          </div>

        </Box>



      </div>
    </div>
  )
}

export default CambiarPassword
