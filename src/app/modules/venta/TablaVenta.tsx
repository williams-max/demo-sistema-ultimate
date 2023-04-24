import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Checkbox, TextField, Collapse, Typography, CardContent, CardActionArea } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
//import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import CleaningServicesRoundedIcon from '@mui/icons-material/CleaningServicesRounded';
import TableViewIcon from '@mui/icons-material/TableView';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import RecommendIcon from '@mui/icons-material/Recommend';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useHookQuery } from "./components/useHookQuery";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import axios from "axios";

import { ModalForm } from './components/ModalForm';
import './stylestablaVenta.css'

/*interface Cell {
  cellIndex: number;
}*/

const tableStyling = {
  //padding: "0px 0px",
  backgroundColor: '#F2F2F2',
  padding: '0.8%',
  fontSize: '10px',
  borderRight: "1px solid #A7A7A7",
  borderBottom: "1px solid #A7A7A7",
  //borderRight: "2px solid black",



};



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import TablePagination from '@mui/material/TablePagination';

import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';


import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import FilterListIcon from '@mui/icons-material/FilterList';
import fileDownload from 'js-file-download';
import { QrReader } from 'react-qr-reader';


import { visuallyHidden } from '@mui/utils';



export default function TablaVenta(props: any) {
  //const { rows }: any = props;

  const { tableData, deleteByIndex }: any = props;

  const [rows, setRows] = React.useState([]);

  //end codigo exitoso
  React.useEffect(() => {
    console.log("data ...", tableData)
    if (tableData) setRows(tableData);
  }, [tableData]);

  const { matches600, matchesDetalle1000, matchesTotal750,
    matchesNit700,
    matchesCliente680,
    matchesFecha1655,
    matchesFactura480,
    matchesNumero400 } = useHookQuery();
  //console.log("preops  ", rows)TableHea


  const [dataQr, setDataQr] = useState('');



  const tableCellClickHandler = (e: any) => {
    //console.log((e.target as Element).innerHTML);
  };




  function descendingComparator(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order: any, orderBy: any) {
    console.log("order orderBy", order, orderBy)
    return order === 'desc'
      ? (a: any, b: any) => descendingComparator(a, b, orderBy)
      : (a: any, b: any) => -descendingComparator(a, b, orderBy);
  }

  // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
  // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
  // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
  // with exampleArray.slice().sort(exampleComparator)
  function stableSort(array: any, comparator: any) {

    console.log("step 3 ", array, comparator)
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
  }

  const headCells = [
    {
      id: 'nombre',
      numeric: false,
      disablePadding: true,
      label: 'N°',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)',
    },
    {
      id: 'cliente',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)',
    },
    {
      id: 'protein1',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
    },
    {
      id: 'protein2',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
    },
    {
      id: 'protein3',
      numeric: true,
      disablePadding: false,
      label: 'Protein (g)',
    }
  ];

  const DEFAULT_ORDER = 'asc';
  //const rows = 'calories';
  const DEFAULT_ORDER_BY = 'cliente';
  const DEFAULT_ROWS_PER_PAGE = 5;

  function EnhancedTableHead(props: any) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
      props;

    //console.log("ordenar por ", props)
    const createSortHandler = (newOrderBy: any) => (event: any) => {
      console.log("haciendo cick 1", newOrderBy, event)
      onRequestSort(event, newOrderBy);
    };

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell sx={{ ...tableStyling, width: '7%' }}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };


  //new metods for odeser and ogusbtuib

  const [order, setOrder] = React.useState(DEFAULT_ORDER);
  const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
  const [selected, setSelected] = React.useState<any>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [visibleRows, setVisibleRows] = React.useState<any>(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE);
  const [paddingHeight, setPaddingHeight] = React.useState(0);


  React.useEffect(() => {

    //console.log("rowsss ", rows)
    let rowsOnMount = stableSort(
      rows,
      getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY),
      //getComparator(DEFAULT_ORDER, rows),
    );

    rowsOnMount = rowsOnMount.slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE,
    );

    setVisibleRows(rowsOnMount);
    //  setVisibleRows(rows);
  }, [rows]);

  const handleRequestSort = React.useCallback(

    (event: any, newOrderBy: any) => {

      const isAsc = orderBy === newOrderBy && order === 'asc';
      const toggledOrder = isAsc ? 'desc' : 'asc';
      console.log("entre aquiu...2", newOrderBy, isAsc, toggledOrder)
      setOrder(toggledOrder);
      setOrderBy(newOrderBy);



      const sortedRows = stableSort(rows, getComparator(toggledOrder, newOrderBy));

      console.log("redorenar 4", sortedRows)
      const updatedRows = sortedRows.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);
    },
    [order, orderBy, page, rowsPerPage],
  );

  const handleSelectAllClick = (event: any) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.nombre);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: any, name: any) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: any = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = React.useCallback(
    (event: any, newPage: any) => {
      setPage(newPage);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);

      // Avoid a layout jump when reaching the last page with empty rows.
      const numEmptyRows =
        newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

      const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      setPaddingHeight(newPaddingHeight);
    },
    [order, orderBy, dense, rowsPerPage],
  );

  const handleChangeRowsPerPage = React.useCallback(
    (event: any) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        0 * updatedRowsPerPage,
        0 * updatedRowsPerPage + updatedRowsPerPage,
      );

      setVisibleRows(updatedRows);

      // There is no layout jump to handle on the first page.
      setPaddingHeight(0);
    },
    [order, orderBy],
  );

  const handleChangeDense = (event: any) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: any) => selected.indexOf(name) !== -1;


  const RowCollapse = () => {

  }

  //thre
  const [openModalTres, setOpenModalTres] = useState(false);
  const handleOpenModalTres = () => setOpenModalTres(true);
  const handleCloseModalTres = () => setOpenModalTres(false);

  

  function Row(props: any) {
    const { row } = props;

    const valorInicialExpanded = () => {
      var expanded_local: any = localStorage.getItem("expanded_local");
      console.log("expanded local value ",expanded_local)
      if (expanded_local && expanded_local != undefined && expanded_local!=null) {
        var expanded_local_aux = JSON.parse(expanded_local)
        return expanded_local_aux;
      } else {
        return false
      }

  
    }

    const [open, setOpen] = React.useState(false);


    const [expanded, setExpanded] = React.useState(false);


    const handleExpandClick = () => {
     localStorage.setItem("expanded_local", (!expanded).toString());
      setExpanded(!expanded);
    };

    function download(url: string, filename: string) {
      /*axios.get(url, {
        responseType: 'blob',
      }).then((res: any) => {
        fileDownload(res.data, filename);
      });*/
      console.log("clicks")

      return (

        <a href="https://bobbyhadz.com" target="_blank" rel="noopener noreferrer">

        </a>
      )
    }



    return (
      <React.Fragment>
        <TableRow >
          <TableCell
            sx={{
              //padding: "0px 0px",
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
              // fontWeight: 'bold',
              //backgroundColor: "#C8E6C9",
              //paddingLeft: '10px',
              padding: '0px', margin: '0px',
              //  borderBottom: "1px solid white",
              //fontSize: "12px"
              // fontSize: "0.9rem",
              //padding:'1%',
            }}
            align="center"
          >
            {/*row.grupo*/}

            <div style={{
              width: '100%', display: 'flex', margin: '0px', padding: '0px',
              justifyContent: 'space-around', alignItems: 'center'
            }}>
              {matchesDetalle1000 ?
                expanded ?
                  <RemoveCircleOutlinedIcon onClick={handleExpandClick} sx={{ color: '#D33333', fontSize: '20px' }} />
                  : < AddCircleOutlinedIcon onClick={handleExpandClick} sx={{ color: '#0275D8', fontSize: '20px' }} />
                : null}

              {/*readQr()*/}

              <CardActionArea sx={{
                padding: '0', margin: '0', marginTop: '3px', width: '42px',
              }} onClick={handleOpenModalTres}
              >


                <ClearRoundedIcon sx={{ backgroundColor: '#DC3545', color: 'white', fontSize: '2.3rem', padding: '10px', }}
                />
              </CardActionArea>
              <CardActionArea sx={{
                padding: '0', margin: '0', marginTop: '3px', width: '42px',
              }} onClick={() => window.open('https://sistemademo.azurewebsites.net/index.php/reimprimir-factura-carta/14447', '_blank', 'noreferrer')}
              >
                <FileCopyRoundedIcon sx={{ backgroundColor: '#28A745', color: 'white', fontSize: '2.3rem', padding: '10px' }}

                />

              </CardActionArea>
              <CardActionArea sx={{
                padding: '0', margin: '0', marginTop: '3px', width: '42px',
              }} onClick={() => window.open('https://sistemageneral.azurewebsites.net/index.php/reimprimir-factura-carta/14451', '_blank', 'noreferrer')}
              >

                <RecommendIcon sx={{
                  backgroundColor: '#17A2B8', color: 'white', fontSize: '2.3rem', padding: '10px'
                }} />
              </CardActionArea>
              <RemoveRedEyeIcon sx={{
                backgroundColor: '#DC3545', color: 'white', fontSize: '2.3rem', padding: '10px'
              }} />
              <CardActionArea sx={{
                padding: '0', margin: '0', marginTop: '3px', width: '42px',
              }} onClick={() => window.open('https://siat.impuestos.gob.bo/consulta/QR?nit=174496020&cuf=BF083376931EFFAE55C4D4D2CB100FF0EB85E3EA565F49E54547FD74&numero=12993&t=1', '_blank', 'noreferrer')}
              >
                <RemoveRedEyeIcon sx={{
                  backgroundColor: '#17A2B8', color: 'white', fontSize: '2.3rem', padding: '10px'
                }} />
              </CardActionArea>
            </div>
          </TableCell>
          <TableCell
            sx={{
              // padding: "0px 0px",
              paddingLeft: '10px',
              // fontWeight: 'bold',
              //   borderBottom: "1px solid white",
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
              // borderBottom: "1px solid #A7A7A7",
              //backgroundColor: "#C8E6C9",
              "&:active": { backgroundColor: "blue" }
            }}
            align="center"
            onClick={tableCellClickHandler}
            className='headHiddenNumero'
          >
            {row.nombre}
          </TableCell>
          <TableCell
            sx={{
              //padding: "0px 0px",

              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
              fontWeight: 'bold',
              //backgroundColor: "#C8E6C9",
              paddingLeft: '10px',
              //borderBottom: "1px solid white",
              fontSize: "12px"
              // fontSize: "1.1rem"
            }}
            align="center"
            className='headHiddenFactura'
          >
            {row.numfact}
          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",
              //backgroundColor: "#C8E6C9",
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
            }}

            onClick={tableCellClickHandler}
            align="center"
            className='headHiddenFecha'
          >
            {row.fechayhora}

          </TableCell>

          <TableCell
            sx={{
              padding: "0px 0px",
              //backgroundColor: "#C8E6C9",
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
              paddingLeft: '10px',
            }}

            onClick={tableCellClickHandler}
            align="center"
            className='headHiddenCliente'
          >
            {row.cliente}

          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",
              // backgroundColor: "#C8E6C9",
              paddingLeft: '10px',
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
            }}

            //onClick={tableCellClickHandler}
            align="center"
            className='headHiddenNit'
          >
            {row.nit}

          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",
              //backgroundColor: "#C8E6C9",
              paddingLeft: '10px',
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
            }}

            //onClick={tableCellClickHandler}
            align="center"
            className='headHiddenTotal'
          >
            {/*row.f3*/}20.00

          </TableCell>
          <TableCell
            sx={{
              padding: "0px 0px",
              //backgroundColor: "#C8E6C9",
              paddingLeft: '10px',
              borderRight: "1px solid #A7A7A7",
              borderBottom: "1px solid #A7A7A7",
            }}

            //onClick={tableCellClickHandler}
            align="center"
            className='headHiddenDetalle'
          >
            Sucursales

          </TableCell>
        </TableRow>
        <Collapse in={expanded} timeout="auto" >
          <CardContent sx={{ display: 'flex:', flexDirection: 'column', justifyContent: 'center' }} >


            {matchesNumero400 ?
              <Typography
                component="div" style={{
                  display: 'flex', flexDirection: 'row'
                  , justifyContent: 'center'
                }}>
                <Typography paragraph sx={{ fontWeight: 'bold' }}>N°</Typography>
                &nbsp;
                <Typography paragraph>
                  50
                </Typography>
              </Typography> : null}
            {matchesFactura480 ?
              <Typography
                component="div" style={{
                  display: 'flex', flexDirection: 'row'
                  , justifyContent: 'center'
                }}>
                <Typography paragraph sx={{ fontWeight: 'bold' }}>Nº de Factura </Typography>
                &nbsp;
                <Typography paragraph>
                  12696
                </Typography>
              </Typography>
              : null
            }
            {matchesFecha1655 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Fecha y Hora </Typography>
              &nbsp;
              <Typography paragraph>
                10-04-2023 16:33:52
              </Typography>
            </Typography> : null}



            {matchesCliente680 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Cliente</Typography>
              &nbsp;
              <Typography paragraph>
                SIN NOMBRE
              </Typography>
            </Typography> : null}

            {matchesNit700 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>NIT</Typography>
              &nbsp;
              <Typography paragraph>
                000
              </Typography>
            </Typography> : null}
            {matchesTotal750 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total a pagar</Typography>
              &nbsp;
              <Typography paragraph>
                50
              </Typography>
            </Typography> : null}
            {matchesDetalle1000 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Detalle</Typography>
              &nbsp;
              <Typography paragraph>
                Sucursales
              </Typography>
            </Typography> : null}

          </CardContent>
        </Collapse>

      </React.Fragment>
    );
  }
  return (
    <div>

      <TableContainer
        onClick={() => {
          //console.log("Detected Table Container Click");
        }}
        component={Paper}
        sx={{
          // border: "4px solid rgba(0,0,0,0.2)",
          //padding: 1,
          // height: '420px',
          margin: '0px', padding: '0px', marginTop: '5px'

          //   width: "max-content"
          //backgroundColor: "blue"
        }}
      >
        <Table sx={{ tableLayout: "auto" }}>
          <TableHead //onClick={tableHeaderClickHandler} 
            style={{
              //  borderTopColor: 'black',
              //  borderTopStyle: 'double'

            }}>
            <TableRow
              onClick={() => {
                //console.log("Detected Row Click");
              }}
              sx={{
                //  backgroundColor: "#BCEAFD",
                //borderBottom: "2px solid black",

                "& th": {
                  fontSize: "12px",
                  //fontSize: "0.8rem",
                  //  height: "5px",
                  // color: "black",
                  //  borderBottom: "1px solid white",

                }
              }}
            >
              <TableCell
                onClick={() => {
                  //console.log("Detected Cell Click");
                }}
                sx={{
                  ...tableStyling,
                  width: '10%',

                  // backgroundColor: "red",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                Accion
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%', borderLeft: "1px solid white" }} align="center"
                className='headHiddenNumero'
              >
                N°
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '6%', borderLeft: "1px solid white" }} align="center"
                className='headHiddenFactura'
              >
                N° de Factura
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '8%' }} align="center" className='headHiddenFecha'>
                Fecha y Hora
              </TableCell>

              <TableCell sx={{ ...tableStyling, width: '9%' }} align="center" className='headHiddenCliente'>
                Cliente
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '7%' }} className='headHiddenNit' align="center">
                Nit
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '5%' }} className='headHiddenTotal' align="center">
                Total a Pagar
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '7%' }} className='headHiddenDetalle' align="center">
                Detalle
              </TableCell>

            </TableRow>
          </TableHead>
          {/* <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />*/}
          <TableBody>

            {visibleRows ? visibleRows?.map((row: any, index: any) => {

              const isItemSelected = isSelected(row.nombre);
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <>
                  <Row key={index} row={row} />
                </>
              )
            }) : null}

          </TableBody>
        </Table>
      </TableContainer>

      <ModalForm
        openModalPersonalized={openModalTres}
        handleOpenModalPersonalized={handleOpenModalTres}
        handleCloseModalPersonalized={handleCloseModalTres}
        description="Deseas cerrar y guardar el formulario?"
      />

      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

        {matches600 ? <h6>${matches600} soy menor o igual 600 px </h6> : <h6>${matches600} no soy 600 px</h6>}

      </div>


    </div>
  );
}


