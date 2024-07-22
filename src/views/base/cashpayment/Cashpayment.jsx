 import React, { useState } from 'react'; import {
   Grid,
   TextField,
   FormControl,
   FormControlLabel,
   RadioGroup,
   Radio,
   Typography,
   Paper,
   Box,
   Container,
   TableContainer,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
   Stack
 } from '@mui/material';
 import { CButton, CCard } from '@coreui/react';

 const Cashpayment = () => {

   return (
     <CCard className="mb-4">
       <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding="16px">
         <Container component="main" maxWidth="lg">
           <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
             <Box sx={{ padding: 2 }}>
               <Grid container spacing={2} alignItems="center">
                 <Grid item xs={12} md={8}>
                   <Typography
                     variant="h6"
                     sx={{
                       margin: 0,
                       fontSize: '24px',
                       fontWeight: 'bold',
                       color: '#599eb4',
                     }}
                   >
                     CASH PAYMENT
                   </Typography>
                 </Grid>
                 <Grid item xs={12} md={4}>
                   <Stack
                     direction={{ xs: 'column', md: 'row' }}
                     spacing={2}
                     justifyContent={{ xs: 'center', md: 'flex-end' }}
                   >
                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                       PRINT
                     </CButton>
                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                       NEW
                     </CButton>
                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                       SAVE
                     </CButton>
                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                       DELETE
                     </CButton>
                     <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
                       EXIT
                     </CButton>
                   </Stack>
                 </Grid>
               </Grid>
             </Box>
             <hr />             
             <Grid container spacing={2}>
               <Grid item xs={12} sm={12} md={4}>
                 <TextField
                   id="corporate"
                   label="Corporate"
                   variant="outlined"
                   size="small"
                   fullWidth
                   InputLabelProps={{ style: { fontSize: '14px' } }}
                 />
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <TextField
                   id="from"
                   label="From Date"
                   type="date"
                   variant="outlined"
                   size="small"
                   fullWidth
                   InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                 />
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <TextField
                   id="out"
                   label="Out"
                   type="date"
                   variant="outlined"
                   size="small"
                   fullWidth
                  InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                 />
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <TextField
                   id="date"
                   label="Date"
                   type="date"
                   variant="outlined"
                   size="small"
                   fullWidth
                   InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
                 />
               </Grid>
               <Grid item xs={12} sm={6} md={3}>
                 <TextField
                   id="amount"
                   label="Amount"
                   variant="outlined"
                   size="small"
                   fullWidth
                   InputLabelProps={{ style: { fontSize: '14px' } }}
                 />
               </Grid>
               <Grid item xs={12}>
                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                   Allocate
                 </CButton>
               </Grid>
               {/* <Grid item xs={12}>
                 <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                   <Table stickyHeader aria-label="sticky table">
                     <TableHead>
                       <TableRow>
                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab</TableCell>
                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
                         <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Select</TableCell>
                          padding: '8px' }}>Patient</TableCell>
                          */}
                         
                         
                           
                           
                           
                           
             </Grid>
           </Paper>
         </Container>
       </Box>
     </CCard>
  );
};

export default Cashpayment;

// CashPaymentForm.js
// import React from 'react';
// import { Box, Button, Grid, TextField, Typography } from '@mui/material';

// const Cashpayment = () => {
//   return (
//     <Box sx={{ p: 4, border: '1px solid #ccc', borderRadius: 2, backgroundColor: '#fff', width: '600px', margin: '0 auto' }}>
//       <Typography variant="h5" sx={{ mb: 2, color: '#4CAF50' }}>
//         Cash Payment
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Trans No" variant="outlined" size="small" />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField fullWidth label="Date" variant="outlined" size="small" type="date" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth label="Account" variant="outlined" size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth label="Amount" variant="outlined" size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth label="Narration" variant="outlined" size="small" multiline rows={4} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth label="User Info" variant="outlined" size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField fullWidth label="Attach File" variant="outlined" size="small" />
//           <Button variant="contained" component="label" sx={{ mt: 1 }}>
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label" sx={{ mt: 1, ml: 1 }}>
//             Scan
//           </Button>
//           <Button variant="contained" color="error" sx={{ mt: 1, ml: 1 }}>
//             Remove File
//           </Button>
//           <Button variant="contained" sx={{ mt: 1, ml: 1 }}>
//             Print Preview
//           </Button>
//         </Grid>
//         <Grid item xs={12} sx={{ textAlign: 'right' }}>
//           <Button variant="contained" color="primary" sx={{ mr: 1 }}>
//             New
//           </Button>
//           <Button variant="contained" color="success" sx={{ mr: 1 }}>
//             Save
//           </Button>
//           <Button variant="contained" color="error">
//             Delete
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Cashpayment;
