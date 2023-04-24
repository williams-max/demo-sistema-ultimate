


import { Typography, Button, Collapse, TextField, Modal, Checkbox, Grid, InputAdornment } from '@mui/material'
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

import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SellIcon from '@mui/icons-material/Sell';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import SignpostIcon from '@mui/icons-material/Signpost';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import { styled } from "@mui/system";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Controller, useForm } from "react-hook-form";
const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '80%',
    // minWidth: 440,
    overflow:'scroll',
    height:'100%',
    display:'block',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const onSubmit = async (data: any) => {
    console.log("enviando datos form ", data)
}

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
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#DC3545'),
    backgroundColor: '#DC3545',
    '&:hover': {
        backgroundColor: '#A31826',
    },
}));

export const ModalForm = (props: any) => {

    const { handleSubmit, control } = useForm();
    const { openModalPersonalized, handleOpenModalPersonalized, handleCloseModalPersonalized, description } = props;

    //const [openModal, setOpenModal] = useState(false);
    //const handleOpenModal = () => setOpenModal(true);
    //const handleCloseModal = () => setOpenModal(false);
    const [gender, setGender] = useState("");

    const handleChange = (event: any) => {
        setGender(event.target.value);
    };

    const InputTextFieldCustomAcce = ({ label, control, isRequired = false, nameRegister, isDisable }: any) => {
        return (
            <>

                <Typography variant="subtitle1" gutterBottom sx={{
                    margin: 0, padding: 0, marginLeft: '3px',
                    color: '#666666', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '3px'
                }}>
                    {label}
                </Typography>
                <Controller
                    name={nameRegister}
                    control={control}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField id="outlined-basic" label={label}
                            variant="outlined"
                            sx={{
                                width: '100%',
                            }}
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                            size="small"


                        />
                    )}

                    rules={{
                        required: {
                            value: isRequired,
                            message: 'Completa este campo '
                        },
                    }}
                />
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
                    fontSize: '0.9rem', marginBottom: '10px'
                }}>
                    {/*description*/} Nuevo Usuario
                </Typography>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'Nombres(*)'}
                            control={control}
                            isRequired={true}
                            nameRegister={'name_user'}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>

                        <InputTextFieldCustomAcce
                            label={'Apellido Paterno'}
                            control={control}
                            isRequired={true}
                            nameRegister={'apellido_paterno'}
                        />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>

                        <InputTextFieldCustomAcce
                            label={'Apellido Materno'}
                            control={control}
                            isRequired={true}
                            nameRegister={'apellido_materno'}
                        />


                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'Carnet de Identidad(*)'}
                            control={control}
                            isRequired={true}
                            nameRegister={'ci'}
                        />


                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem', marginBottom: '3px'
                            }}>
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
                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'N° Teléfono'}
                            control={control}
                            isRequired={true}
                            nameRegister={'phone'}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'N° Celular'}
                            control={control}
                            isRequired={true}
                            nameRegister={'cell'}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem'
                            }}>
                                Fecha de nacimiento
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

                                    />
                                )}
                                //rules={{ required: true}}
                                rules={{ required: 'Completa este campo' }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'Correo electronico'}
                            control={control}
                            isRequired={true}
                            nameRegister={'email'}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem', marginBottom: '3px'
                            }}>
                                Cargo
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

                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem', marginBottom: '3px'
                            }}>
                                Perfil(*)
                            </Typography>
                            <TextField
                                id="outlined-select-gender"
                                select
                                label="Seleccione una opccion"
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
                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem'
                            }}>
                                Género
                            </Typography>
                            <TextField
                                id="outlined-select-gender"
                                select
                                label="Seleccione una opccion"
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

                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'Sueldo'}
                            control={control}
                            isRequired={true}
                            nameRegister={'sueldo'}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'Detalle'}
                            control={control}
                            isRequired={true}
                            nameRegister={'detalle'}
                        />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem'
                            }}>

                                AFP
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
                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'N° de cuenta'}
                            control={control}
                            isRequired={true}
                            nameRegister={'nro_cuenta'}
                        />

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem'
                            }}>
                                Fecha de ingreso
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


                    <Grid item xs={12} sm={12} md={4}>
                        <InputTextFieldCustomAcce
                            label={'Usuario'}
                            control={control}
                            isRequired={true}
                            nameRegister={'user'}
                        />

                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle1" gutterBottom sx={{
                                margin: 0, padding: 0, marginLeft: '3px',
                                color: '#666666', fontSize: '0.7rem'
                            }}>
                                Sucursal
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

















                </Grid>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    {/*<Button sx={{ backgroundColor: '#7066E0' }} variant="contained" >Si</Button>*/}
                    <ColorButton variant="contained" >Cerrar</ColorButton>
                    &nbsp; &nbsp;
                    <ColorButton variant="contained" onClick={handleSubmit(onSubmit)} > Confirmar</ColorButton>



                    {/*  <Button onClick={handleCloseModalPersonalized} sx={{ backgroundColor: '#6E7881' }} variant="contained" >Cancel</Button>*/}
                </div>
            </Box>
        </Modal>
    )
}
