import { ICardContent } from "../../../interfaces/ICardContent"

export const CardTitle = ({title}: ICardContent) => {
  return (
    <div className="card-title">
        <h6 className="font-weight-bold m-0">{ title }</h6>
    </div>
  )
}

export const CardContent = ({title, children}: ICardContent) => {
  return (
    <div className="card-content mt-1">
        {children}
    </div>
  )
}