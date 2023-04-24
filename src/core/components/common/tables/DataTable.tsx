import { IDataTable } from '../../../interfaces/IDataTable'

export const DataTable = ({
  headers,
  children,
  sortColumns = false
}: IDataTable) => {
  return (
    <div className="table-responsive mb-3">
      <table className="table">
        <thead
          className={`table-header-gray table-header-rounded ${
            sortColumns && 'table-header-sort'
          }`}
        >
          <tr>
            {headers.map((header: string, index: number) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export const DataTableLight = ({ headers, children }: IDataTable) => {
  console.log("lista datas ",children)
  return (
    <div className="table-responsive mb-3">
      <table className="table">
        <thead className="table-header-light">
          <tr>
            {headers.map((header: string, index: number) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
