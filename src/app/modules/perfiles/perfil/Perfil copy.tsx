import React, { useState } from 'react'
import { Typography, Button, Collapse, TableRow, colors, Input, Checkbox, Grid, Container, Card, CardContent } from '@mui/material'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import TextField from '@mui/material/TextField';
import { ModalPersonalized } from './components/ModalPersonalized';

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

//<----TABLA
const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }),
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
function createData( calories: number,name: string, fat: number) {
  return { calories,name,  fat };
}
//<----columnas de la tabla
interface Column {
  id: 'n' | 'nombreperfil' | 'estado' | 'opciones' ;
  minWidth?: number;
  label: string;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'n', label: 'N°', minWidth: 70 },
  { id: 'nombreperfil', label: 'Nombre de Perfil', minWidth: 70 },
  { id: 'estado', label: 'Estado', minWidth: 70 },
  { id: 'opciones', label: 'Opciones', minWidth: 70 },
];

//<----Filas de la tabla
const rows = [
  createData(1, 'Cajero',  3.7),
  createData(2, 'Supervisor',  25.0),
  createData(3, 'Administracion', 262),
  createData(4, 'Encargado de Sucursal', 159),
  createData(5, 'Global', 356),
  createData(6, 'Honeycomb', 408),
  createData(7, 'Ice cream sandwich', 237),
  createData(8, 'Jelly Bean', 375),
  createData(9, 'KitKat', 518),
  createData(10, 'Lollipop', 392),
  createData(11, 'Marshmallow', 318),
  createData(12, 'Nougat', 360),
  createData(13, 'Oreo', 437),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});
//TABLA---->

const Perfil = () => {
//<---modal
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => setOpenModal(true);
const handleCloseModal = () => setOpenModal(false);
//modal--->
  const [gender, setGender] = React.useState("");

  const handleChange = (event: any) => {
      setGender(event.target.value);
  }; 
//<---TABLA
const classes2 = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
//TABLA--->
const [message, setMessage] = useState('');
  const handleChangeSerach = (event:any) => {
  
    console.log("event ",event.target.value)
    setMessage(event.target.value);
  };

    return(
        <>
        <Container>
          <Card>
            <CardContent>
              <Grid>
                <Grid item xl={8} lg={6} md={5} sm={4} xs={3}>
                  <div style={{
                    backgroundColor: `#B01F1F`, padding: '0.5%', display: 'flex', flexDirection: 'row',
                    justifyContent: 'space-between', borderRadius: '5px', marginTop: '1%'
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
                  <TextField
                label="Buscar"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                value={message}
                onChange={handleChangeSerach}
                //align="right"
              />
                  <TableContainer component={Paper}>
      <Table className={classes2.table} aria-label="custom pagination table">
        <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.calories}
              </TableCell>
              <TableCell style={{ width: 100 }} align="left">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 100 }} align="left">
                <Button variant="contained" color="success">HABILITADO</Button>
              </TableCell>
              <TableCell style={{ width: 100 }} align="left">
                <Button sx={{ fontSize: 35,color: 'orange' }}><TiEdit/></Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={4}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>

        <ModalPersonalized
        openModalPersonalized={openModal}
        handleOpenModalPersonalized={handleOpenModal}
        handleCloseModalPersonalized={handleCloseModal}
        description="Nuevo Perfil"
      />
        </>
    )


}

export default Perfil