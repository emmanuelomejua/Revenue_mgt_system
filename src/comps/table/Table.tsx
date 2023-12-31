import './table.scss';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { rows } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'FullName',
    width: 180,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,
    editable: true,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 140,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 140,
    editable: true,
    type: 'number'
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 140,
    editable: true,
  },
];


export default function DataGridDemo() {
  return (
    <Box sx={{ height: 'max-content', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
