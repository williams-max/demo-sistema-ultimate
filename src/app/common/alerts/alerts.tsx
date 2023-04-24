import Swal from "sweetalert2"

export const AlertSave = ({ title = "GUARDADO!", message = "Se ha Guardado la Receta!" }: any) => {
    return (
        Swal.fire(
            title,//'GUARDADO!', // title
            message,//'Se ha Guardado la Receta!', // message
            'success'
        )
    )
}
/*
referencia
 const AlertaGuardar = () => {
    Swal.fire(
      'GUARDADO!',
      'Se ha Guardado la Receta!',
      'success'
    )
  }
*/