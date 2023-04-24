import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/*interface Cell {
  cellIndex: number;
}*/

const tableStyling = {
  //padding: "0px 0px",
  backgroundColor:'#D4A1D5',
  padding:'0.8%',
  //borderRight: "2px solid black",
  


};

function createData(f0: any, f1: any, f2: any, f3: any) {
  return { f0, f1, f2, f3 };
}

const rows = [

  createData("Galleta de Alfajor", "Unidad", "", "0"),
  createData("Galleta de Alfajor", "Unidad", "", "0"),




];

export default function TablaInventarioCierre() {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [infoText, setInfoText] = React.useState("a data");

  const defaultStyleTitle = true;

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

  return (
    <div>
   
      <TableContainer
        onClick={() => {
          console.log("Detected Table Container Click");
        }}
        component={Paper}
        sx={{
          // border: "4px solid rgba(0,0,0,0.2)",
          //padding: 1,
          // height: '420px',
          margin: '0px', padding: '0px',marginTop:'5px'

          //   width: "max-content"
          //backgroundColor: "blue"
        }}
      >
        <Table sx={{ tableLayout: "auto" }}>
          <TableHead onClick={tableHeaderClickHandler} style={{
          //  borderTopColor: 'black',
          //  borderTopStyle: 'double'
          }}>
            <TableRow
              onClick={() => {
                console.log("Detected Row Click");
              }}
              sx={{
                //  backgroundColor: "#BCEAFD",
                //borderBottom: "2px solid black",

                "& th": {
                  //fontSize: "1rem",
                  fontSize: "0.8rem",
                //  height: "5px",
                 // color: "black",
                  //  borderBottom: "1px solid white",

                }
              }}
            >
              <TableCell
                onClick={() => {
                  console.log("Detected Cell Click");
                }}
                sx={{
                  ...tableStyling,
                  width: '25%',
                  
                  //backgroundColor: "#BCEAFD",
                //  paddingLeft: '10px',
                 // fontWeight: 'bold',


                }}
                align="left"
              >
                Producto
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '25%',borderLeft: "1px solid white" }} align="left">
                Unidad de Medida
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '25%',borderLeft: "1px solid white"  }} align="left">
                Nota
              </TableCell>
              <TableCell sx={{ ...tableStyling, width: '25%' }} align="left">
                Cantidad Declarada
              </TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.f0}>
                <TableCell
                  sx={{
                    //padding: "0px 0px",
                    // borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid #A7A7A7",
                   // fontWeight: 'bold',
                    //   backgroundColor: "white",
                    paddingLeft: '10px',
                    //  borderBottom: "1px solid white",
                    //fontSize: "12px"
                     fontSize: "0.9rem",
                     //padding:'1%',
                  }}
                  align="left"
                >
                  {row.f0}
                </TableCell>
                <TableCell
                  sx={{
                   // padding: "0px 0px",
                    paddingLeft: '10px',
                    // fontWeight: 'bold',
                    // borderBottom: "1px solid white",
                    //   borderRight: "1px solid #A7A7A7",
                    //   borderBottom: "1px solid #A7A7A7",
                    "&:active": { backgroundColor: "blue" }
                  }}
                  align="left"
                  onClick={tableCellClickHandler}
                >
                  {row.f1}
                </TableCell>
                <TableCell
                  sx={{
                    //padding: "0px 0px",
                    
                    // borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid #A7A7A7",
                    fontWeight: 'bold',
                    backgroundColor: "white",
                    paddingLeft: '10px',
                    //borderBottom: "1px solid white",
                    fontSize: "12px"
                    // fontSize: "1.1rem"
                  }}
                  align="left"
                >
                  {row.f2}
                </TableCell>
                <TableCell
                  sx={{
                    padding: "0px 0px",// borderRight: "1px solid #A7A7A7",
                    // borderBottom: "1px solid white",
                  }}
           
                  onClick={tableCellClickHandler}
                  align="left"
                >
                  {row.f3}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleAlertClose}
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          This is a {infoText} column.
        </Alert>
      </Snackbar>
    </div>
  );
}
