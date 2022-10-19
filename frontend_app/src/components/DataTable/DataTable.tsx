import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type DataTableProps<RowType> = {
  columns: GridColDef[];
  rows: RowType[];
  rowsPerPageOptions?: number;
  checkboxSelection?: boolean;
  onRowClick?: (params: RowType) => Promise<void>
}


export default function DataTable<T>(props: DataTableProps<T>) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={props.rowsPerPageOptions || 20}
        rowsPerPageOptions={[props.rowsPerPageOptions || 20]}
        checkboxSelection={props.checkboxSelection}
        onCellClick={(param) => {
          props.onRowClick && props.onRowClick(param.row as T);
        }}
      />
    </div>
  );
}
