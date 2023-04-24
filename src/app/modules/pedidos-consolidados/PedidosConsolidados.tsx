import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import Paleta from '../../../core/components/common/Paleta'
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

import { createStyles, makeStyles } from '@mui/styles';
import { Theme, useTheme } from '@mui/material';

import { BiSearchAlt } from "react-icons/bi";
import { ModalPersonalized2 } from './components/ModalPersonalized2';
import { SiMicrosoftexcel } from "react-icons/si";
import { ImFilePdf } from "react-icons/im";

import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { KeyboardArrowRight } from '@mui/icons-material';
import LastPageIcon from '@mui/icons-material/LastPage';
import SearchBar from '@mkyy/mui-search-bar';
import TablaPedidosConsolidados from './TablaPedidosConsolidados';
import dataConsolidadosJson from '../../../data/pedidos/planta/dataConsolidadosJson.json'
//import dataUserJson from '../../../../data/usuarios/dataUserJson.json'

const genders = [
  {
    value: 'M',
    label: 'Perecedero',
  },
  {
    value: 'N',
    label: 'NoPerecedero',
  },
  {
    value: 'F',
    label: 'Todos',
  },

];

//<----columnas de la tabla
interface Column {
  id: 'categoria' | 'subcategoria' | 'producto' | 'tipoproducto' | 'pando' | 'salamanca' | 'americaoeste' | 'hupermall' | 'lincoln' | 'jordan' | 'americaeste';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'categoria', label: 'Categoria', minWidth: 70 },
  { id: 'subcategoria', label: 'SubCategoria', minWidth: 70 },
  {
    id: 'producto',
    label: 'Producto',
    minWidth: 70,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  { id: 'tipoproducto', label: 'Tipo de Producto', minWidth: 70 },
  { id: 'pando', label: 'Pando', minWidth: 70 },
  { id: 'salamanca', label: 'Salamanca', minWidth: 70 },
  { id: 'americaoeste', label: 'America Oeste', minWidth: 70 },
  { id: 'hupermall', label: 'Hupermall', minWidth: 70 },
  { id: 'lincoln', label: 'Lincoln', minWidth: 70 },
  { id: 'jordan', label: 'Jordan', minWidth: 70 },
  { id: 'americaeste', label: 'America Este', minWidth: 70 },
];



const PedidosConsolidados = () => {

  //<---modal
  const [openModal2, setOpenModal2] = useState(false);

  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);
  //modal--->


  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
  };

  const [originalRows, setoriginalRows] = useState<any>([])


  const [rows, setRows] = useState<any>(originalRows);
  const [searched, setSearched] = useState<string>("");


  const requestSearch = (searchedVal: string) => {
    //console.log("serach  ", searchedVal)
    setSearched(searchedVal);
    const filteredRows = originalRows.filter((row: any) => {
      return row.categoria.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch("");
  };


  //star llamar a api
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    loadData();
  }, []);

  const loadData = async () => {
    console.log("user data ",dataConsolidadosJson)
    setRows(dataConsolidadosJson)
    setoriginalRows(dataConsolidadosJson)
  }

  //end llamar a la api

  const deleteByIndex = (index: any) => {
    console.log("eliminar ", index)
    setRows((oldValues: any) => {
      return oldValues.filter((_: any, i: any) => i !== index)
    })
  }



  return (
    <>
      <div style={{
        backgroundColor: `#DC3545`, padding: '0.5%', display: 'flex', flexDirection: 'row',
        justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
        , alignItems: 'center'

      }}
      >

        <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: '15px', color: 'white', fontFamily: 'Times New Roman' }} >
          Tabla Consolidada de Pedidos
          <Button onClick={handleOpenModal2} sx={{ fontSize: '1.6em',color: 'white' }}><BiSearchAlt/></Button>
        </Typography>
        <div>
          <Button sx={{ fontSize: '2em',color: 'white' }}><SiMicrosoftexcel/></Button>
          <Button sx={{ fontSize: '2em',color: 'white' }}><ImFilePdf/></Button>
        </div>
      </div>
      <br></br>
      <div>
        
        &nbsp; &nbsp;
        <SearchBar
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelResearch={() => cancelSearch()}
              placeholder='Buscar'

            />
      </div>

      
      <TablaPedidosConsolidados
        tableData={rows}
        deleteByIndex={(index: any) => deleteByIndex(index)}
      />

      <ModalPersonalized2
        openModalPersonalized={openModal2}
        handleOpenModalPersonalized={handleOpenModal2}
        handleCloseModalPersonalized={handleCloseModal2}
        description="Pedido que desea buscar"
      />

    </>
  )
}
export default PedidosConsolidados