import React, { useEffect,useState } from 'react'
import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid, Container, Card, CardContent } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import TextField from '@mui/material/TextField';
import { ModalPersonalized } from './components/ModalPersonalized';
import dataLlaveJson from '../../../../data/llave/dataLlaveJson.json'
import TablaLlave from './TablaLlave';
import SearchBar from '@mkyy/mui-search-bar';


//tabla import
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { createStyles, makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';
import LastPageIcon from '@mui/icons-material/LastPage';
import { IoKeyOutline } from "react-icons/io5";
import { ImEye } from "react-icons/im";



const Llave = () => {

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

//row de json para la tabla
const [originalRows, setoriginalRows] = useState<any>([])

  const [rows, setRows] = useState<any>(originalRows);
  const [searched, setSearched] = useState<string>("");
//fin json
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
  console.log("user data ", dataLlaveJson)
  setRows(dataLlaveJson)
  setoriginalRows(dataLlaveJson)
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
      id: 7,
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSb25h",
      fechaactivacion: "2022-11-10",
      fechaven: "2023-10-31",
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
                    backgroundColor: `#B01F1F`, padding: '0.5%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-between', borderRadius: '5px', marginTop: '0%'
                    , alignItems: 'center', position: "fixed", width: "80%"
                    }}
                  >
                  <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white' , fontFamily:'Times New Roman' }} >
                    <IoKeyOutline/>
                    API KEY's
                  </Typography>
                  </div>
                  <br/>
                  <br/>
                  <br/>
                  <Button sx={{backgroundColor:'#43AA47 ' }} variant="contained" startIcon={<IoKeyOutline fontSize={35}/>} onClick={handleOpenModal}>Nuevo API Key</Button>
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
                  <TablaLlave
                    tableData={rows}
                    deleteByIndex={(index: any) => deleteByIndex(index)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>

        <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        addtest={addElemento}
        description="Nueva API Key"
      />
        </>
    )


}

export default Llave