import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
const columns = [
  
  
  { field: 'id', headerName: 'ID', width: 90, type: "number"},
  
  {
    field: 'merke',
    headerName: 'Bilmerke',
    width: 150,
    editable: false,
    type: 'string',

  },

  {
    field: 'modell',
    headerName: 'Modell',
    width: 150,
    editable: false,
    type: 'string',

  },
  {
    field: 'årsmodell',
    headerName: 'Årsmodell',
    type: 'number',
    width: 200,
    editable: false,
  },
  
  {
    field: 'regNr',
    headerName: 'Registreringsnummer',
    type: 'string',
    width: 200,
    editable: false,
  },
 
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 200,
    editable: true,
    
  },
  {
    field: 'oppdrag',
    headerName: 'Oppdrag',
    type: 'string',
    width: 110,
    editable: false,
  },

];




export default function Tabell2({rows}) {


  const fiktivKall = (param) => {
    console.log("Backend Oppdatert");
  }
//params = hele raden, med all info, slik at backend vil vet hvilken bil det er snakk om slik at backend kangjøre endring 

  return (
    <Box 
    sx={{
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
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
      }}>
      <DataGrid 
        sx={{width: '98%'}}
        rows={rows}
        disableColumnMenu={true}
        
        slots={{  toolbar: GridToolbar,  }}
        columns={columns}
        initialState={{
            sorting: {
                sortModel: [{ field: 'id', sort: 'asc' }],
              },
         pageSize: 20,   
        }}
        getCellClassName={(params) => {
            if (params.field !== 'status' || params.value == null) {
              return '';
            }
            return params.value ===  "Tilgjengelig" ? 'hot' : 'cold';
          }}
          onCellEditStop={(params) => fiktivKall(params)}
      
        
      />
    </Box>
  );
}