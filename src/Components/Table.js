import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { MutateApiMockup } from '../Services/Api';

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90,
    type: 'number',
    sortable: false,
  },
  {
    field: 'merke',
    headerName: 'Bilmerke',
    width: 150,
    editable: false,
    type: 'string',
    sortable: false,
  },
  {
    field: 'modell',
    headerName: 'Modell',
    width: 150,
    editable: false,
    type: 'string',
    sortable: false,
  },
  {
    field: 'årsmodell',
    headerName: 'Årsmodell',
    type: 'string',
    width: 200,
    editable: false,
    sortable: false,
  },
  {
    field: 'regNr',
    headerName: 'Registreringsnummer',
    type: 'string',
    width: 200,
    editable: false,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 200,
    editable: true,
    sortable: true,
  },
  {
    field: 'oppdrag',
    headerName: 'Oppdrag',
    type: 'string',
    width: 110,
    editable: false,
    sortable: false,
  },
];

const Table = ({ rows }) => {
  
  return (
    <Box 
      sx={{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 2,
        height: "75vh",
        width: '100%',
        '& .cold': {
          backgroundColor: '#F87666',
          color: '#1a3e72',
        },
        '& .hot': {
          backgroundColor: '#7DCB5B',
          color: '#1a3e72',
        },
      }}
    >
      <DataGrid 
        sx = {{ width: '98%' }}
        rows = {rows}
        columns = {columns}
        disableColumnMenu = {true}  // Disable column menu
        slots = {{ toolbar: GridToolbar }}  // Toolbar with filters
        initialState = {{
          sorting: {
            sortModel: [{ field: 'id', sort: 'asc' }],
          },
          pageSize: 20,
        }}
        getCellClassName = {(params) => {
          if (params.field !== 'status' || params.value == null) {
            return '';
          }
          return params.value === "Tilgjengelig" ? 'hot' : 'cold';
        }}
        
        // Simulated backend call for row update
        processRowUpdate = {(updatedRow, originalRow) =>
          MutateApiMockup(updatedRow)  
        }
        onProcessRowUpdateError = {() =>
          console.log("")
        } 

      />
    </Box>
  );
};

export default Table;
