import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <div>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
      </Stack>
      <Stack mt={2} sx={{ width: '100%' }} direction="row" spacing={1}>
        <Button variant="contained"><AddIcon /> Add Button</Button>
        <Button color="error" variant="outlined"><DeleteIcon /> Delete Button</Button>
      </Stack>
    </div>
  )
}

export default App