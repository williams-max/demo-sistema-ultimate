import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid, Container, Card, CardContent } from '@mui/material'
import React, { useEffect,useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Select from '@mui/material/Select';
import ExplicitOutlinedIcon from '@mui/icons-material/ExplicitOutlined';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { padding } from '@mui/system';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import { number } from 'prop-types';
import Swal from 'sweetalert2';
import SearchIcon from '@mui/icons-material/Search';

import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";

//import { createStyles, makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material';


import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';
import LastPageIcon from '@mui/icons-material/LastPage';
import SearchBar from '@mkyy/mui-search-bar'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
//import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dataUsuarioTurnoJson from '../../../data/usuarioturno/dataUsuarioTurnoJson.json'
import { ModalPersonalized3 } from './components/ModalPersonalized3';
import { BiSearchAlt } from "react-icons/bi";
import exportFromJSON from 'export-from-json'
import TablaRepTurno from './TablaRepTurno';

/*
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
  }),
);*/

const lastMonday = dayjs().startOf('week');
const nextSunday = dayjs().endOf('week').startOf('day');

const isWeekend = (date: any) => {
  const day = date.day();

  return day === 0 || day === 6;
};

const ReporteCierreTurno = () => {

  //const classes = useStyles();

  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };


  const [message, setMessage] = useState('');
  const handleChangeSerach = (event: any) => {

    console.log("event ", event.target.value)
    setMessage(event.target.value);
  };


  const exportDataJson = () => {

    console.log("entre aqui sdddddddd")




    const data = [{
      id: 1,
      first_name: "Ethelred",
      last_name: "Slowly",
      email: "eslowly0@google.es"
    }, {
      id: 2,
      first_name: "Reta",
      last_name: "Woolmer",
      email: "rwoolmer1@miibeian.gov.cn"
    }, {
      id: 3,
      first_name: "Arabel",
      last_name: "Pestor",
      email: "apestor2@bloglovin.com"
    }]

    // const data=JSON.parse(data_menu)
    const fileName = 'datos'
    const exportType = exportFromJSON.types.csv

    exportFromJSON({ data, fileName, exportType })
    //SUBNIVEL = [...JSON.parse(data_menu)]

    //console.log("test list ", SUBNIVEL)
  }

  //<--modal
  const [openModal3, setOpenModal3] = useState(false);

  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);
  //modal-->

//<---tabla
const [originalRows, setoriginalRows] = useState<any>([])

const [rows, setRows] = useState<any>([]);
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

//tabla--->

  //<---tabla
  
  //star llamar a api
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    console.log("userr data ", dataUsuarioTurnoJson)
    setRows(dataUsuarioTurnoJson)
    setoriginalRows(dataUsuarioTurnoJson)
  }, []);
  //tabla--->

  return (
    <>
      <div style={{
        backgroundColor: `#DC3545`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '0%'
        , alignItems: 'center'

      }}
      > 
        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white', fontFamily: 'Times New Roman' }} >
          Reporte Cierre de Turno 
          <Button onClick={handleOpenModal3} sx={{ fontSize: '1.5em',color: 'white' }}><BiSearchAlt/></Button>
        </Typography>
        <div >
          <Button sx={{ fontSize: '1.8em',color: 'white' }}><SiMicrosoftexcel/></Button>
          <Button sx={{ fontSize: '1.8em',color: 'white' }}><ImFilePdf/></Button> 
        </div>      
      </div> 

      <div style={{
        padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'start'
        , alignItems: 'end',

      }}
      // onClick={handleClick}
      >
      </div>
      <br />
      <Box sx={{ width: '100%' }}>
        <div style={{
          display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
          , alignContent: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <h6 style={{ padding: '0px', margin: '0px' }}>Buscar</h6>
            &nbsp;&nbsp;
           
            <SearchBar
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelResearch={() => cancelSearch()}
              placeholder='Buscar'

            />
          </div>
        </div>
      </Box>

      <br />
      <TablaRepTurno     rows={rows}/>

      <ModalPersonalized3
        openModalPersonalized={openModal3}
        handleOpenModalPersonalized={handleOpenModal3}
        handleCloseModalPersonalized={handleCloseModal3}
        description="Perfil que desea buscar"
      />
    </>
  )
}
export default ReporteCierreTurno