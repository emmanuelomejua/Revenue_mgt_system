import './table.scss'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

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

const rows = [
  { id: 1, title: 'Snow', amount: 2300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 2, title: 'Lannister', amount: 2300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 3, title: 'Lannister', amount: 2300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 4, title: 'Stark', amount: 2300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 5, title: 'Targaryen', amount: 2300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 6, title: 'Melisandre', amount: 2500, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 7, title: 'Clifford', amount: 12990, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 8, title: 'Frances', amount: 1200, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 10, title: 'Roxie', amount: 1200, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 11, title: 'Roxie', amount: 1200, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 12, title: 'Roxie', amount: 1200, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 13, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 14, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji'},
  { id: 15, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 16, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 17, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 18, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 19, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 20, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 21, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 22, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
  { id: 23, title: 'Roxie', amount: 1300, address: '2 Millenium Road', phone: '090117585939', name: 'Ayodeji' },
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
