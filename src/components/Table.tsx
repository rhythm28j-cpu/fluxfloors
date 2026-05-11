import schema from '../schema/Table.schema.json'
import type { ReactNode } from 'react'
import { useTheme } from '../styles'

export interface TableProps<RowData extends Record<string, ReactNode>> {
  columns: string[]
  data: RowData[]
  className?: string
  renderCell?: (value: ReactNode, columnKey: string, row: RowData) => ReactNode
  borders?: 'none' | 'rows' | 'cells'
}

export function Table<RowData extends Record<string, ReactNode>>({
  columns,
  data,
  className = '',
  renderCell,
  borders = 'none',
}: TableProps<RowData>) {
  const { tokens } = useTheme()

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
  }

  const getCellStyle = () => {
    if (borders === 'cells') {
      return {
        border: `1px solid ${tokens.colors.neutral.light}`,
        padding: tokens.spacing.md,
        textAlign: 'center' as const,
      }
    }
    return { padding: tokens.spacing.md, textAlign: 'center' as const }
  }

  const getRowStyle = () => {
    if (borders === 'rows') {
      return {
        borderBottom: `1px solid ${tokens.colors.neutral.light}`,
      }
    }
    return {}
  }

  return (
    <table className={className} style={tableStyle}>
      <thead>
        <tr style={getRowStyle()}>
          {columns.map((column) => (
            <th key={column} style={getCellStyle()}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} style={getRowStyle()}>
            {columns.map((column) => {
              const cellValue = row[column] ?? null
              return (
                <td key={column} style={getCellStyle()}>
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

export const TableSchema = schema;
