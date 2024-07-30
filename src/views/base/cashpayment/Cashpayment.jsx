import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const Cashpayment = () => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <TextField
                   id="transno"
                    label="Trans No"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{  style: { fontSize: '1rem' } }}
                  />
          </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                    id="date"
                    label="Date"
                    type="date"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
                 />
                 </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <TextField 
            id='account'
            fullWidth
             label="Account" 
             variant="outlined"
              size="small"
              InputLabelProps={{style:{fontSize:'1rem'}}} 
              />
             <Button variant="contained" component="label" sx={{ ml: 1 }}> 
              <AddIcon /> 
               <input type="file" hidden /> 
             </Button> 
          </Box>
        </Grid>
        <Grid item xs={4} >
        <TextField
                   id="amount"
                    label="Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{  style: { fontSize: '1rem' } }}
                  />
        </Grid>
         <Grid item xs={12}> 
   <TextareaAutosize 
     minRows={4} 
     maxRows={6} 
     style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} 
      placeholder="Naration" 
   /> 
   </Grid> 
        <Grid item xs={12}>
        <TextField
                   id="userinfo"
                    label="User Info"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{  style: { fontSize: '1rem' } }}
                  />
                  </Grid>
        <Grid item xs={12}> 
           <Box display="flex" alignItems="center" gap={1}> 
            <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} /> 
            <Button variant="contained" component="label">
              Browse
               {/* <AddIcon /> */}
              <input type="file" hidden /> 
            </Button> 
            <Button variant="contained" component="label">
              Scan
            </Button>
            <Button variant="contained">
              Remove File
            </Button>
            <Button variant="contained">
              Print Preview
            </Button>
          </Box>
        </Grid>
       <Grid item xs={12}>
  <TextareaAutosize
     minRows={4} 
    maxRows={6} 
     style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} 
    // placeholder="Enter narration here..." 
   /> 
</Grid> 
</Grid>
    
  );
};

export default Cashpayment;
