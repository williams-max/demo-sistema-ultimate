//import { AuthProvider } from './app/modules/auth/context'
//import { SplashScreenProvider } from './core/context/SplashScrean'
//import { BrowserRouter } from 'react-router-dom'
//import { Navigation } from './app/Navigation'

import React, { useState, useEffect, useContext, useReducer } from 'react';



import { Typography, TextField, Button, InputAdornment, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";



import { styled } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import { KDImage } from '../../core/modal-loading/KDImage';


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

const Login = () => {

  const urlLogin = "http://192.168.0.36:8080/SistemaGeneralBLocal/login";
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

  const { handleSubmit, control } = useForm();

  const onSubmit = async (data: any) => {


    //clickHandler("circular")
    setLoading(true);
    console.log(data);
   // const { usuario, password } = data;


    await submitData()

  /*
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

          localStorage.setItem("user_menu", JSON.stringify(menu));
          localStorage.setItem("user_name", name);


          //dispatch({ type: types.updateUser, payload: name })
          //dispatch({ type: types.authLogin })
          //1 capturar de datos del usuario
          //2 paso guargarlo en el useContext
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
      // console.log(error)

    }
  */
  };

  const submitData = async () => {
    try {
      //const respuesta = await axios.post('https://sistemageneralb.azurewebsites.net//index.php/login', {
      const respuesta = await axios.post('https://sistemageneral-ba.azurewebsites.net/login', {
        "usuario": "amondocorre",
        "password": "Capresso"
        /*
         "user": textValue,
        "pass": textPasswordValue
        */
      })
      console.log("rest", respuesta.data)
    } catch (error) {

    }
  }



  const [textValue, setTextValue] = useState<string>("");

  const [errorValueEmpty, setErrorValueEmpty] = useState(false);

  const [textPasswordValue, setTextPasswordValue] = useState<string>("");



  const handleClickShowPassword = () => {

    setShowPassword(!showPassword);
  };
  return (
    <div style={{ backgroundColor: '#3C3C3C', width: '100%', height: '100vh' }}>
      <div style={{ margin: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


        <form style={{ marginTop: '5%' }}>

          <Box sx={{
            width: '100%', maxWidth: 390, margin: 'auto', backgroundColor: 'white'
            ,
          }}>
            <div style={{ width: '60%', margin: 'auto', marginBottom: '8px', marginTop: '10%' }}>
              <img style={{ width: '100%', marginTop: '10%' }} src="https://sistemageneral.azurewebsites.net/assets/dist/img/logo.png" />
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

            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }}>
              Usuario
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Controller
                name={"usuario"}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField id="outlined-basic" label="Usuario"
                    variant="outlined" sx={{
                      width: '90%',
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}

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



            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: '#666666' }} >
              Contraseña
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Controller
                name={"password"}
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField id="outlined-basic" label="Contraseña" variant="outlined" sx={{ width: '90%' }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}

                    type={showPassword ? 'text' : 'password'}

                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>

                          {showPassword ? <RemoveRedEyeIcon onClick={() => handleClickShowPassword()}
                          /> : <VisibilityOffIcon onClick={() => handleClickShowPassword()} />}
                        </InputAdornment>
                      )
                    }}
                  />
                )}
                //rules={{ required: true}}
                rules={{ required: 'Completa este campo' }}
              />


            </div>


            {/*
            <TextField id="outlined-basic" label="Contraseña" variant="outlined" sx={{ width: '80%', marginLeft: '15px' }}
              value={textPasswordValue}
              onChange={onTextPasswordChange}

              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <VisibilityOffIcon sx={{ color: '#777777' }} />
                  </InputAdornment>
                )
              }}
            />*/}

            <br />
            {loading ? <KDImage
              src={`https://source.unsplash.com/random?sig=${0}`}
              largeSrc={"./taza_loading.png"}
              height={'200px'}
            /> : null}
            <Button variant="contained" sx={{ marginTop: '5%', marginLeft: '69.5%' }}

              onClick={handleSubmit(onSubmit)}
            >Ingresar</Button>
            <Typography variant="body1" gutterBottom sx={{ color: '#666666', marginLeft: '20px', paddingBottom: '0px' }}>
              V. 1.0.8 General
            </Typography>

          </Box>
        </form>



      </div>
    </div>
  )
}

export default Login
