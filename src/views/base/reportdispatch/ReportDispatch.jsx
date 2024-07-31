import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Box,
  FormGroup
} from '@mui/material';
import { CCardBody } from '@coreui/react';

const ReportDispatching = () => {
//   const [reportingMode, setReportingMode] = useState('Personally');
//   const [selectedModes, setSelectedModes] = useState([]);
//   const dispatchModes = [
//     { id: 1, mode: 'Phone', userInfo: 'user1' },
//     { id: 2, mode: 'ByHand', userInfo: 'user2' },
//     { id: 3, mode: 'Email', userInfo: 'user3' },
//     { id: 4, mode: 'Courier', userInfo: 'user4' },
//     { id: 5, mode: 'Through Branch', userInfo: 'user5' },
//   ];

//   const handleDispatchModeDoubleClick = (mode) => {
//     setSelectedModes((prevSelectedModes) => {
//       // If the mode is already selected, remove it; otherwise, add it
//       if (prevSelectedModes.includes(mode)) {
//         return prevSelectedModes.filter((m) => m !== mode);
//       } else {
//         return [...prevSelectedModes, mode];
//       }
//     });
//   };

  return (
    <>
     <CCardBody>
     <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField 
           id='entryno' 
          label="Entry No" 
          variant="outlined"
           fullWidth
            size="small"
            InputLabelProps={{ style:  {fontSize:'1rem'} }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
          id='patientname' 
          label="Patient Name"
          variant="outlined" 
          fullWidth 
          size="small"
          InputLabelProps={{  style:  {fontSize:'1rem'}  }}
          />
        </Grid>
        
        <Grid item xs={12} md={6}>
            <TextField
            id='server'
            label='Server'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{ style: {fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='datetime'
            label='Date Time'
            variant='outlined'
            fullWidth
            size='small'
            type='datetime-local'
            InputLabelProps={{ shrink:true, style:{fontSize:'1rem'} }}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='labno'
            label='Lab No'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='yyyy'
            label='Age YY'
            variant='outlined'
            size='small'
            fullWidth
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='mm'
            label='Age MM'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={2}>
            <TextField
            id='dd'
            label='Age DD'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='branchname'
            label='Branch Name'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='refby'
            label='Reference By'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
            id='email'
            label='Email'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12} md={3}>
            <TextField
            id='ipop'
            label='IP/OP'
            variant='outlined'
            fullWidth
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
        </Grid>
        </Grid>
        </Box>
       <Box sx={{border:'1px solid #ddd', padding:'16px', borderRadius:'8px', marginBottom:'10px',marginBottom:'10px', marginTop:'10px'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                id='sampleon'
                label='Sample On'
                variant='outlined'
                fullWidth
                size='small'
                type='datetime-local'
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                id='reporton'
                label='Report On'
                variant='outlined'
                fullWidth
                size='small'
                type='datetime-local'
                InputLabelProps={{shrink:true,style:{fontSize:'1rem'}}}
                />
            </Grid>
            
        </Grid>
        

        </Box> 
    
    
        
        
        
        
        {/* <Box sx={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', marginBottom: '10px', marginTop: '10px' }}> */}
            {/* 
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox name="personally" />}
                    label="Personally"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="courier" />}
                    label="Courier"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="phone" />}
                    label="phone"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="email" />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox  name="sms" />}
                    label="SMS"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            </Grid> */}
            {/* </Box> */}
        {/* <Grid item xs={12} container spacing={2}>
          <Grid item xs={3}>
            <TableContainer sx={{ border: '1px solid black', borderRadius: '4px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>SlNo</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid black' }}>Dispatch Mode</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispatchModes.map((mode) => (
                    <TableRow
                      key={mode.id}
                      onDoubleClick={() => handleDispatchModeDoubleClick(mode.mode)}
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell sx={{ borderRight: '1px solid black' }}>{mode.id}</TableCell>
                      <TableCell>{mode.mode}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={9}>
            <TableContainer sx={{ border: '1px solid black', borderRadius: '4px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>SlNo</TableCell>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Select</TableCell>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>Person</TableCell>
                    <TableCell sx={{ borderRight: '1px solid black', borderBottom: '1px solid black' }}>DispatchMode</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid black' }}>UserInfo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dispatchModes
                    .filter((mode) => selectedModes.includes(mode.mode))
                    .map((mode) => (
                      <TableRow key={mode.id}>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{mode.id}</TableCell>
                        <TableCell sx={{ borderRight: '1px solid black' }}>
                          <Checkbox />
                        </TableCell>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{mode.person || '-'}</TableCell>
                        <TableCell sx={{ borderRight: '1px solid black' }}>{mode.mode}</TableCell>
                        <TableCell>{mode.userInfo}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
        </Grid>
        <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">New</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Delete</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Save</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">Exit</Button>
          </Grid>
        </Grid> */}
      {/* </Grid> */}
    {/* </Paper> */}
    </CCardBody>
    </>
  );
};

export default ReportDispatching;


 
  

 




 //    <Container>
//       <Box sx={{ padding: 2 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Sl No</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={index} onDoubleClick={() => handleDoubleClick(mode)} style={{ cursor: 'pointer' }}>
//                       <TableCell>{index + 1}</TableCell>
//                       <TableCell>{mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
                 //                         <TableCell>Dispatch Mode</TableCell>
               //      <TableCell>User Info</TableC

                 
