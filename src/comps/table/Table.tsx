import './table.scss'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { rows } from '../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 140,
    editable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 90,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 140,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
];


export default function DataGridDemo() {
  return (
    <Box sx={{ height: 550, width: 'max-content' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
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
