import React, { useEffect, useState } from 'react'
import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid, Container, Card, CardContent } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import TextField from '@mui/material/TextField';
import { ModalPersonalized } from './components/ModalPersonalized';
import TablaPerfil from './TablaPerfil';
import SearchBar from '@mkyy/mui-search-bar';
import dataPerfilJson from '../../../../data/perfil/dataPerfilJson.json'






const Perfil = () => {

  const [originalRows, setoriginalRows] = useState<any>([])

  const [rows, setRows] = useState<any>(originalRows);
  const [searched, setSearched] = useState<string>("");


  const requestSearch = (searchedVal: string) => {
    //console.log("serach  ", searchedVal)
    setSearched(searchedVal);
    const filteredRows = originalRows.filter((row: any) => {
      return row.nombre.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch("");
  };
//<---modal
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => setOpenModal(true);
const handleCloseModal = () => setOpenModal(false);
//modal--->
  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
      setGender(event.target.value);
  }; 

const [message, setMessage] = useState('');
  const handleChangeSerach = (event:any) => {
  
    console.log("event ",event.target.value)
    setMessage(event.target.value);
  };

//star llamar a api
useEffect(() => {
  // Actualiza el título del documento usando la API del navegador
  loadData();
}, []);

const loadData = async () => {
  console.log("user data ", dataPerfilJson)
  setRows(dataPerfilJson)
  setoriginalRows(dataPerfilJson)
}

   //end llamar a la api

   const deleteByIndex = (index: any) => {
    console.log("eliminar ", index)
    setRows((oldValues: any) => {
      return oldValues.filter((_: any, i: any) => i !== index)
    })
  }

  const addElemento = () => {
    setRows([...rows,
    {
      id: 1,
      nombre: "Cajero",

      pagar: 10
    }
    ]);


  }
    return(
        <>
        <Container>
          <Card>
            <CardContent>
              <Grid>
                <Grid item xl={8} lg={6} md={5} sm={4} xs={3}>
                  <div style={{
                    backgroundColor: `#DC3545`, padding: '0.5%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-between', borderRadius: '5px', marginTop: '0%'
                    , alignItems: 'center'
                    }}
                  >
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white', fontFamily:'Times New Roman' }} >
                    <ManageAccountsIcon/>
                    PERFILES
                  </Typography>
                  </div>
                  <br/>
                  <Button sx={{backgroundColor:'#43AA47 ' }} variant="contained" startIcon={<MdOutlinePersonAddAlt1 />} onClick={handleOpenModal}>Nuevo Perfil</Button>
                  <br/>
                  <br/>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'right' }}>
                    <SearchBar
                      value={searched}
                      onChange={(searchVal) => requestSearch(searchVal)}
                      onCancelResearch={() => cancelSearch()}
                      placeholder='Buscar'
                    />
                  </div>
                  <TablaPerfil
                    tableData={rows}
                    deleteByIndex={(index: any) => deleteByIndex(index)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
        <br/>
        

        <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        addtest={addElemento}
        description="Nuevo Perfil"
      />

      
        </>
    )


}

export default Perfil