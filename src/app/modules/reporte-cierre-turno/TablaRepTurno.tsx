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
import './stylestablaRepTurno.css'

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


import { visuallyHidden } from '@mui/utils';



export default function TablaRepTurno(props: any) {
  const { rows }: any = props;

  const { matches600,matchesDetalle61700 ,matchesDetalle51110 ,matchesDetalle41090 ,matchesDetalle31070 , matchesDetalle1000, matchesDetalle21050, matchesTotal750,
    matchesNit700,
    matchesCliente680,
    matchesFecha1655,
    matchesFactura480,
    matchesNumero400 } = useHookQuery();
  //console.log("preops  ", rows)TableHea
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");



  const tableCellClickHandler = (e: any) => {
    //console.log((e.target as Element).innerHTML);
  };

  const tableHeaderClickHandler = (e: any) => {
    console.log("Detected Header Click");
    setSnackbarOpen(true);
    //    if (((e.target as unknown) as Cell).cellIndex) {
    if (((e.target)).cellIndex) {
      setInfoText("data");
    } else {
      setInfoText("title");
    }
  };

  const handleAlertClose = () => {
    setSnackbarOpen(false);
  };


  function createData(name: any, calories: any, fat: any, carbs: any, protein: any) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }
  /*
  const rows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
  
  ];*/

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

  function Row(props: any) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    function download(url: string, filename: string) {
      axios.get(url, {
        responseType: 'blob',
      }).then((res: any) => {
        fileDownload(res.data, filename);
      });
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
            {/*row.usuario*/}

            <div style={{
              width: '100%', display: 'flex', margin: '0px', padding: '0px',
              justifyContent: 'space-around', alignItems: 'center'
            }}>
              {matchesDetalle61700 ?
                expanded ?
                  <RemoveCircleOutlinedIcon onClick={handleExpandClick} sx={{ color: '#D33333', fontSize: '20px' }} />
                  : < AddCircleOutlinedIcon onClick={handleExpandClick} sx={{ color: '#0275D8', fontSize: '20px' }} />
                : null}
                  {row.usuario}
              
              {/* <CardActionArea sx={{
                paddingBottom: '0', margin: '0', width: '100px',
              }} onClick={() => download("https://sistemademo.azurewebsites.net/index.php/reimprimir-factura-carta/14143", "test.pdf")}>
                
              </CardActionArea> */}
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
            {row.fechayhorainicio}
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
            {row.fechayhorafinal}
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
            {row.factura}

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
            {row.canrecibos}

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
            {row.montoinicial}

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
            {row.totalingreso}

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
            {row.totalegreso}

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
            className='headHiddenDetalle3'
          >
            {row.totalefectivo}

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
            className='headHiddenDetalle3'
          >
            {row.totalqr}

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
            className='headHiddenDetalle5'
          >
            {row.totaltarjeta}

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
            className='headHiddenDetalle5'
          >
            {row.totaltransferencia}

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
            className='headHiddenDetalle6'
          >
            {row.pedidosya}

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
            className='headHiddenDetalle6'
          >
            {row.saldoteorico}

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
            className='headHiddenDetalle6'
          >
            {row.dineroentregado}

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
            className='headHiddenDetalle6'
          >
            {row.pagar}

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
                <Typography paragraph sx={{ fontWeight: 'bold' }}>Fecha/Hora Ingreso</Typography>
                &nbsp;
                <Typography paragraph>
                  {row.fechayhorainicio}
                </Typography>
              </Typography> : null}
            {matchesFactura480 ?
              <Typography
                component="div" style={{
                  display: 'flex', flexDirection: 'row'
                  , justifyContent: 'center'
                }}>
                <Typography paragraph sx={{ fontWeight: 'bold' }}>Fecha/Hora Salida </Typography>
                &nbsp;
                <Typography paragraph>
                  {row.fechayhorafinal}
                </Typography>
              </Typography>
              : null
            }
            {matchesFecha1655 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Rango de Facturas </Typography>
              &nbsp;
              <Typography paragraph>
                {row.factura}
              </Typography>
            </Typography> : null}



            {matchesCliente680 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Cantidad de Recibos</Typography>
              &nbsp;
              <Typography paragraph>
                {row.canrecibos}
              </Typography>
            </Typography> : null}

            {matchesNit700 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Monto Inicial de Turno</Typography>
              &nbsp;
              <Typography paragraph>
                {row.montoinicial}
              </Typography>
            </Typography> : null}
            {matchesTotal750 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Ingresos</Typography>
              &nbsp;
              <Typography paragraph>
                {row.totalingreso}
              </Typography>
            </Typography> : null}
            {matchesDetalle1000 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Egresos</Typography>
              &nbsp;
              <Typography paragraph>
                {row.totalegreso}
              </Typography>
            </Typography> : null}
            {matchesDetalle31070 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Ventas en Efectivo</Typography>
              &nbsp;
              <Typography paragraph>
                {row.totalefectivo}
              </Typography>
            </Typography> : null}
            {matchesDetalle31070 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Ventas en QR</Typography>
              &nbsp;
              <Typography paragraph>
                {row.totalqr}
              </Typography>
            </Typography> : null}
            {matchesDetalle51110 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Venta Traj. Dep/Cred</Typography>
              &nbsp;
              <Typography paragraph>
                {row.totaltarjeta}
              </Typography>
            </Typography> : null}
            {matchesDetalle51110 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Venta Transferidos</Typography>
              &nbsp;
              <Typography paragraph>
                {row.totaltransferencia}
              </Typography>
            </Typography> : null}
            {matchesDetalle61700 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Total Cupones Pedidos Ya</Typography>
              &nbsp;
              <Typography paragraph>
                {row.pedidosya}
              </Typography>
            </Typography> : null}
            {matchesDetalle61700 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Saldo Teorico</Typography>
              &nbsp;
              <Typography paragraph>
                {row.saldoteorico}
              </Typography>
            </Typography> : null}
            {matchesDetalle61700 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Dinero Entregado</Typography>
              &nbsp;
              <Typography paragraph>
                {row.dineroentregado}
              </Typography>
            </Typography> : null}
            {matchesDetalle61700 ? <Typography
              component="div" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
              <Typography paragraph sx={{ fontWeight: 'bold' }}>Descuadre</Typography>
              &nbsp;
              <Typography paragraph>
              {row.pagar}
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
                  width: '4%',

                  // backgroundColor: "red",
                  //  paddingLeft: '10px',
                  // fontWeight: 'bold',


                }}
                align="left"
              >
                Usuario
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '4%', borderLeft: "1px solid white" }} align="center"
                className='headHiddenNumero'
              >
                Fecha/Hora {"\n"}Inicial
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '4%', borderLeft: "1px solid white" }} align="center"
                className='headHiddenFactura'
              >
                Fecha/Hora {"\n"}Salida
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} align="center" className='headHiddenFecha'>
                Rango de {"\n"}Facturas
              </TableCell>

              <TableCell sx={{ ...tableStyling, width: '3%' }} align="center" className='headHiddenCliente'>
                Cantidad de {"\n"}Recibos
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenNit' align="center">
                Monto {"\n"}Inicial {"\n"}de Turno
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenTotal' align="center">
                Total {"\n"}Ingresos
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle' align="center">
                Total {"\n"}Egresos
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle3' align="center">
                Total Ventas {"\n"}en Efectivo
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle3' align="center">
                Total ventas {"\n"}en QR
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle5' align="center">
                Total Ventas {"\n"}tarj. {"\n"}Deb/Cred
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle5' align="center">
                Total Venta {"\n"}Tranferidas
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle6' align="center">
                Total Cupones {"\n"}Pedidos Ya
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle6' align="center">
                Saldo {"\n"}teorico
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle6' align="center">
                Dinero {"\n"}entregado
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '3%' }} className='headHiddenDetalle6' align="center">
                Descuadre
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

      <br />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

        {matchesDetalle21050 ? <h6>${matchesDetalle21050} soy menor o igual 1000 px </h6> : <h6>${matchesDetalle21050} no soy 1000 px</h6>}

      </div>


    </div>
  );
}


