import schema from '../schema/Table.schema.json'
import type { ReactNode } from 'react'

export interface TableProps<RowData extends Record<string, ReactNode>> {
  columns: string[]
  data: RowData[]
  className?: string
  renderCell?: (value: ReactNode, columnKey: string, row: RowData) => ReactNode
}

export function Table<RowData extends Record<string, ReactNode>>({
  columns,
  data,
  className = '',
  renderCell,
}: TableProps<RowData>) {
  return (
    <table className={className}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => {
              const cellValue = row[column] ?? null
              return (
                <td key={column}>
                  {renderCell ? renderCell(cellValue, column, row) : cellValue}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export const TableSchema = schema
