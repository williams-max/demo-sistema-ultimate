import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid, Container, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ModalPersonalized } from './components/ModalPersonalized';
import { ModalPersonalized2 } from './components/ModalPersonalized2';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import useAutocomplete, { AutocompleteGetTagProps } from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const Categoria = [
    { label: 'Bebidas con Cafe', year: 1994 },
    { label: 'Bebidas frias con Cafe', year: 1972 },
    { label: 'Desayunos', year: 1974 },
    { label: 'Gaseosas & Agua', year: 2008 },
    { label: 'Salados', year: 1957 },
    { label: "Reposteria & Postres", year: 1993 },
    { label: 'Bebidas Calientes sin Cafe', year: 1994 },
  
  ];

const Medidas = [
    { label: 'Bobinas'},
    { label: 'Baldes'},
    { label: 'Barriles'},
    { label: 'Bolsa'},
    { label: 'Botellas'},
    { label: 'Caja'},
    { label: 'Cartones'},
    { label: 'Centimetro Cuadrado'},
]

//<---datos del multiselector
interface FilmOptionType {
    title: string;
    year: number;
  }
  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { title: 'Pequeño', year: 1994},
    { title: 'Mediano', year: 1994},
    { title: 'Grande', year: 1994},
    { title: 'Medio' , year: 1994},
    { title: 'Porcion', year: 1994},
    { title: 'Entero' , year: 1994},
    { title: 'Unidad', year: 1994},
    { title: 'Combo', year: 1994},
    { title: '2 Oz.', year: 1994},
    { title: '4 Oz.', year: 1994},
    { title: 'Suelta', year: 1994},
    { title: 'Con Combo Festivo',year: 1980},
    { title: '12 Unidades', year: 1994 },
    { title: '6 Unidades', year: 2010 },
    { title: '3 Unidades',year: 2002},
];
//datos del multiselector--->

//<---multiselector
const Root = styled('div')(
    ({ theme }) => `
    color: ${
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
    };
    font-size: 14px;
  `,
  );
  
  const Label = styled('label')`
    padding: 0 0 4px;
    line-height: 1.5;
    display: block;
  `;
  
  const InputWrapper = styled('div')(
    ({ theme }) => `
    width: 200px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434343' : '#d9d9d9'};
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    border-radius: 4px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
  
    &:hover {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
    }
  
    &.focused {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  
    & input {
      background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
      color: ${
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,.85)'
      };
      height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `,
  );
  
  interface TagProps extends ReturnType<AutocompleteGetTagProps> {
    label: string;
  }
  
  function Tag(props: TagProps) {
    const { label, onDelete, ...other } = props;
    return (
      <div {...other}>
        <span>{label}</span>
        <CloseIcon onClick={onDelete} />
      </div>
    );
  }
  
  const StyledTag = styled(Tag)<TagProps>(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 24px;
    margin: 2px;
    line-height: 22px;
    background-color: ${
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : '#fafafa'
    };
    border: 1px solid ${theme.palette.mode === 'dark' ? '#303030' : '#e8e8e8'};
    border-radius: 2px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
  
    &:focus {
      border-color: ${theme.palette.mode === 'dark' ? '#177ddc' : '#40a9ff'};
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `,
  );
  
  const Listbox = styled('ul')(
    ({ theme }) => `
    width: 200px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
  
    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
      background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
      font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
      background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `,
  );
//multiselector--->
const Producto = () => {
//<---modal
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => setOpenModal(true);
const handleCloseModal = () => setOpenModal(false);
//modal--->
//<---modal2
const [openModal2, setOpenModal2] = useState(false);

const handleOpenModal2 = () => setOpenModal2(true);
const handleCloseModal2 = () => setOpenModal2(false);
//modal2--->
//<---check
const [value2, setValue2] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2((event.target as HTMLInputElement).value);
  };
//check--->

//<---multiselector
const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

//multiselector--->


//subir imagen--->
// const [archivo, setArchivo]=useState(null);

// const subirArchivo =e=>{
//     setArchivo(e);
// }

// const InsertarImagen=async()=>{
//     const f = new FormData();

//     for(let index = 0; index < archivo.length; index++){
//         f.append("files", archivo[index]);
//     }
//     await axios.post("",f)
//     .then(response=>{
//         console.log(response.data);
//     }).catch(error=>{
//         console.log(error);
//     })
// }
//<----subir imagen
    return(
        <>
        <div style={{
            backgroundColor: `#B01F1F`, padding: '0.5%', display: 'flex', flexDirection: 'row',
            justifyContent: 'space-between', borderRadius: '5px', marginTop: '0%'
            , alignItems: 'center', position: "fixed", width: "97%"
            }}
        >
            <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white', fontFamily: 'Times New Roman' }} >
                Productos
            </Typography>
        </div>
            <br/>
            <br/>

            <Container>
                <Card>
                    <CardContent>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={4} md={3}>
                            <div >
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>Categoria</h6>
                                <AddIcon sx={{
                                backgroundColor: '#17A2B8', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                marginLeft: '10px', marginBottom: '10px'
                                , fontWeight: 'bold'
                                }}
                                onClick={handleOpenModal}
                                />
                                <BorderColorIcon sx={{
                                backgroundColor: '#FFC107', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                marginLeft: '10px', marginBottom: '10px'
                                , fontWeight: 'bold'
                                }}
                                />
                                <DeleteForeverIcon sx={{
                                backgroundColor: '#DC3545', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                marginLeft: '10px', marginBottom: '10px'
                                , fontWeight: 'bold'
                                }}
                                />
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Categoria}

                                renderInput={(params: any) => <TextField {...params}
                                size="small"
                                sx={{ width: '100%' }}
                                label="Seleccione la primera Categoria" />}
                            />

                            </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                            <div >
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>SubCategoria</h6>
                                    <AddIcon sx={{
                                        backgroundColor: '#17A2B8', color: 'white', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                        marginLeft: '10px', marginBottom: '10px'
                                        , fontWeight: 'bold'
                                     }}
                                    onClick={handleOpenModal2}
                                    />
                                    <BorderColorIcon sx={{
                                        color: '#FFC107', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                        marginLeft: '10px', marginBottom: '10px'
                                        , fontWeight: 'bold'
                                    }}
                                    />
                                    <DeleteForeverIcon sx={{
                                        color: '#DC3545', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                        marginLeft: '10px',marginBottom: '10px'
                                        , fontWeight: 'bold'
                                    }}
                                    />
                                </div>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={Categoria}

                                    renderInput={(params: any) => <TextField {...params}
                                    size="small"
                                    sx={{ width: '100%' }}
                                    label="Seleccione la segunda Categoria" />}
                                />

                            </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                            <div >
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>Seleccione el Producto</h6>
                                    <AddIcon sx={{
                                    color: '#17A2B8', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                    marginLeft: '10px', marginBottom: '10px'
                                    , fontWeight: 'bold'
                                    }}
                                //onClick={handleOpenModal}
                                    />
                                    <BorderColorIcon sx={{
                                        color: '#FFC107', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                        marginLeft: '10px', marginBottom: '10px'
                                        , fontWeight: 'bold'
                                        }}
                                    />
                                    <DeleteForeverIcon sx={{
                                        color: '#DC3545', fontSize: '1.1rem', padding: '0.5px', margin: '0',
                                        marginLeft: '10px',marginBottom: '10px'
                                        , fontWeight: 'bold'
                                    }}
                                    />
                                </div>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={Categoria}

                                    renderInput={(params: any) => <TextField {...params}
                                    size="small"
                                    sx={{ width: '100%' }}
                                    label="Seleccione el Producto" />}
                                />

                            </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
            <Container>
                <Card>
                    <CardContent>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={12} sm={3} md={3}>
                            <div >
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>Producto</h6>
                            </div>
                            <TextField id="outlined-basic" label="Nombre del producto" variant="outlined" size='small' sx={{ width: '100%' }}/>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>Detalle del producto</h6>
                            </div>
                            <TextField 
                                id="outlined-basic" 
                                label="Ingrese el detalle" 
                                variant="outlined" 
                                size='small' 
                                sx={{ width: '100%' }} 
                                multiline 
                                rows={2}
                            />
                            </div>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                            <div >
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <h6 style={{ padding: '0px', margin: '0px' }}>Selecciona unidad de medida</h6>
                            </div>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={Medidas}

                                renderInput={(params: any) => <TextField {...params}
                                size="small"
                                sx={{ width: '100%' }}
                                label="Seleccione la unidad de medida" />}
                            />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <h6 style={{ padding: '0px', margin: '0px' }}>¿Incluira transporte?</h6>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={value2}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Si" />
                                    <FormControlLabel value="male" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                            </div>
                            </div>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Grid item xs={0} sm={0} md={12}>
                                    <h6 style={{ padding: '0px', margin: '0px' }}>Cod.Act.Economia</h6>
                                    <TextField id="outlined-basic" label="561003" variant="outlined" size='small' sx={{ width: '100%' }}/>
                                </Grid>
                                &nbsp; &nbsp;
                                <Grid item xs={0} sm={0} md={12}>
                                    <h6 style={{ padding: '0px', margin: '0px' }}>Cod.Act.Economia</h6>
                                    <TextField id="outlined-basic" label="94561" variant="outlined" size='small' sx={{ width: '100%' }}/>
                                </Grid>
                                </div>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>Seleccione tamaño de producto:</h6>
                                    </div>
                                    
                                
                                    <Root>
                                        <div {...getRootProps()}>
                                            <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                                                {value.map((option: FilmOptionType, index: number) => (
                                                <StyledTag label={option.title} {...getTagProps({ index })} />
                                                ))}
                                            <input {...getInputProps()} />
                                            </InputWrapper>
                                        </div>
                                            {groupedOptions.length > 0 ? (
                                        <Listbox {...getListboxProps()}>
                                            {(groupedOptions as typeof top100Films).map((option, index) => (
                                            <li {...getOptionProps({ option, index })}>
                                            <span>{option.title}</span>
                                            <CheckIcon/>
                                            </li>
                                            ))}
                                        </Listbox>
                                        ) : null}
                                    </Root>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3}>
                                <div>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <h6 style={{ padding: '0px', margin: '0px', fontFamily:'Times New Roman' }}>Subir imagen del producto:</h6>
                                    </div>
                                    <input type='file' name='images'></input>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
            
        <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        description="Categoria"
        />
        <ModalPersonalized2
        openModalPersonalized={openModal2}
        handleOpenModalPersonalized={handleOpenModal2}
        handleCloseModalPersonalized={handleCloseModal2}
        description="Agregar 2da Categoria"
        />
        </>
    )
}
export default Producto