
//  import React, { useState } from 'react';
//  import {
//    Grid,
//    TextField,
//    FormControl,
//    FormControlLabel,
//    RadioGroup,
//    Radio,
//    Typography,
//    Paper,
//    Box,
//    Container,
//    TableContainer,
//    Table,
//    TableHead,
//    TableRow,
//    TableCell,
//    TableBody,
//    Stack,
//    IconButton
//  } from '@mui/material';
//  import { CButton, CCard, CCardBody } from '@coreui/react';
//  import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

//  const Bill = () => {
//    const [collectionType, setCollectionType] = useState('lab');
//    const rows = [
//      { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
//      { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
//      { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
//      { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
//    ];

//    return (
//      <CCard className="mb-4">
//      <CCardBody>
//      <Box sx={{ padding: 2 }}>
//    <Grid container spacing={2} alignItems="center">
//      <Grid item xs={12} md={8}>
//        <Typography
//          variant="h6"
//          sx={{
//            margin: 0,
//            fontSize: '24px',
//            fontWeight: 'bold',
//            color: ' #599eb4 ',
//          }}
//        >
//          BILL WISE COLLECTION
//        </Typography>
//      </Grid>
//      <Grid item xs={12} md={4}>
//        <Box 
//          sx={{ 
//            display: 'flex', 
//            flexDirection: { xs: 'column', sm: 'row' }, 
//            justifyContent: { xs: 'center', md: 'flex-end' }, 
//            gap: '16px' 
//          }}
//        >
//          <CButton
//            color="primary"
//            sx={{
//              width: { xs: '100%', sm: 'auto' },
//            }}
//          >
//            FETCH
//          </CButton>
//          <CButton
//            color="secondary"
//            sx={{
//              width: { xs: '100%', sm: 'auto' },
//            }}
//          >
//            PRINT
//          </CButton>
//          <CButton
//            color="primary"
//            sx={{
//              width: { xs: '100%', sm: 'auto' },
//            }}
//          >
//            NEW
//          </CButton>
//          <CButton
//            color="secondary"
//            sx={{
//              width: { xs: '100%', sm: 'auto' },
//            }}
//          >
//            SAVE
//          </CButton>
//          <CButton
//            color="primary"
//            sx={{
//              width: { xs: '100%', sm: 'auto' },
//            }}
//          >
//            EXIT
//          </CButton>
//        </Box>
//      </Grid>
//    </Grid>
//  </Box>


//        <hr/>
//        {/* <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" padding="16px"> */}
//          {/* <Container component="main" maxWidth="md" className=""> */}
//            {/* <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}> */}
//            {/* <Box sx={{ padding: 2 }}> */}
//                {/* <Grid container spacing={2} alignItems="center">
//                  <Grid item xs={12} md={4}>
//                    <Typography
//                      variant="h6"
//                      sx={{
//                        margin: 0,
//                        fontSize: '24px',
//                        fontWeight: 'bold',
//                        color: '#599eb4',
//                      }}
//                    >
//                      BILL COLLECTION
//                    </Typography>
//                  </Grid>
//                  <Grid item xs={12} md={4}>
//                   <Stack
//                     direction={{ xs: 'column', md: 'row' }}
//                     spacing={2}
//                     alignItems={{ xs: 'column', md: 'flex-end' }}
//                    >
//                      <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
//                        FETCH
//                      </CButton>
//                      <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
//                        PRINT
//                      </CButton>
//                      <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
//                        NEW
//                      </CButton>
//                      <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
//                        SAVE
//                      </CButton>
//                      <CButton color="primary" sx={{ width: '100%', maxWidth: '100%' }}>
//                      EXIT
//                      </CButton>
//                    </Stack>
//                  </Grid>
//                </Grid>
//              </Box>
//              <hr /> */}
//              <Grid container spacing={2}>
//                <Grid item xs={12} sm={6} md={6}>
//                  <FormControl component="fieldset">
//                    <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                      <FormControlLabel
//                        value="lab"
//                        control={<Radio size="small" />}
//                        label={<Typography variant="body2">Lab Collection</Typography>}
//                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                      />
//                      <FormControlLabel
//                        value="purchase"
//                        control={<Radio size="small" />}
//                        label={<Typography variant="body2">Purchase</Typography>}
//                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                      />
//                      <FormControlLabel
//                        value="pharmacy"
//                        control={<Radio size="small" />}
//                       label={<Typography variant="body2">Pharmacy Collection</Typography>}
//                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}                     />
//                   </RadioGroup>
//                  </FormControl>
//                </Grid>

//               <Grid item xs={12} sm={6} md={6}>
//                  <FormControl component="fieldset">
//                    <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                      <FormControlLabel
//                        value="cash"
//                        control={<Radio size="small" />}
//                        label={<Typography variant="body2">Cash</Typography>}
//                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                      />
//                      <FormControlLabel
//                        value="cheque"
//                        control={<Radio size="small" />}
//                        label={<Typography variant="body2">Cheque</Typography>}
//                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                      />
//                      <FormControlLabel
//                        value="bhim"
//                        control={<Radio size="small" />}
//                        label={<Typography variant="body2">BHIM/UPI Online Payment</Typography>}
//                        sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
//                      />
//                    </RadioGroup>
//                  </FormControl>
//                </Grid>
//                <Grid item xs={12} sm={6}>
//                  <TextField
//                    id="corporate"
//                    label="Corporate"
//                    variant="outlined"
//                    size="small"
//                    fullWidth
//                    InputLabelProps={{ style: { fontSize: '14px' } }}
//                  />
//                </Grid>
//                <IconButton color="primary">
//                <MoreHorizIcon />
//             </IconButton>

//                <Grid item xs={12} md={3}>
//                  <TextField
//                    id="from"
//                    label="FromDate"
//                    type="date"
//                    variant="outlined"
//                    size="small"
//                    fullWidth
//                    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                  />
//                </Grid>

//                <Grid item xs={12} md={3}>
//                  <TextField
//                    id="out"
//                    label="Out"
//                    type="date"
//                    variant="outlined"
//                    size="small"
//                    fullWidth
//                    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                  />
//                </Grid>
//                <Grid item xs={12} md={3}>
//                  <TextField
//                    id="date"
//                    label="Date"
//                    type="date"
//                    variant="outlined"
//                    size="small"
//                    fullWidth
//                    InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
//                  />
//                </Grid>
//                <Grid item xs={12} md={3}>
//                  <TextField
//                    id="amount"
//                    label="Amount"
//                    variant="outlined"
//                    size="small"
//                    fullWidth
//                    InputLabelProps={{ style: { fontSize: '14px' } }}
//                  />
//                </Grid>
//                <Grid item xs={12} md={3}>
//                  <CButton color="primary" style={{ width: '100%', maxWidth: 'auto' }}>
//                    Allocate
//                  </CButton>
//                </Grid>
//                <Grid item xs={12}>
//                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
//                    <Table stickyHeader aria-label="sticky table">
//                      <TableHead>
//                        <TableRow>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Select</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Patient</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Amount</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Balance</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Allocated.Amt</TableCell>
//                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding:'8px' }}>Current.Bal</TableCell>
//                        </TableRow>
//                      </TableHead>
//                      <TableBody>
//                        {rows.map((row) => (
//                          <TableRow key={row.id}>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.id}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col1}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col2}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col3}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col4}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col5}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col6}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
//                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
//                          </TableRow>
//                        ))}
//                      </TableBody>
//                    </Table>
//                  </TableContainer>
//                </Grid>
//              </Grid>
//            {/* </Paper> */}
//          {/* </Container> */}
//        {/* </Box> */}
//       </CCardBody>
//       </CCard>
//    );
// };

//  export default Bill;



// // CashPaymentForm.js
// // import React from 'react';
// // import { Box, Button, Grid, TextField, Typography } from '@mui/material';

// // const Cashpayment = () => {
// //   return (
// //     <Box sx={{ p: 4, border: '1px solid #ccc', borderRadius: 2, backgroundColor: '#fff', width: '600px', margin: '0 auto' }}>
// //       <Typography variant="h5" sx={{ mb: 2, color: '#4CAF50' }}>
// //         Cash Payment
// //       </Typography>
// //       <Grid container spacing={2}>
// //         <Grid item xs={12} sm={6}>
// //           <TextField fullWidth label="Trans No" variant="outlined" size="small" />
// //         </Grid>
// //         <Grid item xs={12} sm={6}>
// //           <TextField fullWidth label="Date" variant="outlined" size="small" type="date" InputLabelProps={{ shrink: true }} />
// //         </Grid>
// //         <Grid item xs={12}>
// //           <TextField fullWidth label="Account" variant="outlined" size="small" />
// //         </Grid>
// //         <Grid item xs={12}>
// //           <TextField fullWidth label="Amount" variant="outlined" size="small" />
// //         </Grid>
// //         <Grid item xs={12}>
// //           <TextField fullWidth label="Narration" variant="outlined" size="small" multiline rows={4} />
// //         </Grid>
// //         <Grid item xs={12}>
// //           <TextField fullWidth label="User Info" variant="outlined" size="small" />
// //         </Grid>
// //         <Grid item xs={12}>
// //           <TextField fullWidth label="Attach File" variant="outlined" size="small" />
// //           <Button variant="contained" component="label" sx={{ mt: 1 }}>
// //             Browse
// //             <input type="file" hidden />
// //           </Button>
// //           <Button variant="contained" component="label" sx={{ mt: 1, ml: 1 }}>
// //             Scan
// //           </Button>
// //           <Button variant="contained" color="error" sx={{ mt: 1, ml: 1 }}>
// //             Remove File
// //           </Button>
// //           <Button variant="contained" sx={{ mt: 1, ml: 1 }}>
// //             Print Preview
// //           </Button>
// //         </Grid>
// //         <Grid item xs={12} sx={{ textAlign: 'right' }}>
// //           <Button variant="contained" color="primary" sx={{ mr: 1 }}>
// //             New
// //           </Button>
// //           <Button variant="contained" color="success" sx={{ mr: 1 }}>
// //             Save
// //           </Button>
// //           <Button variant="contained" color="error">
// //             Delete
// //           </Button>
// //         </Grid>
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default Cashpayment;


import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
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
          {/* <TextField 
          fullWidth 
          label="Trans No" 
          variant="outlined"
           size="small" /> */}
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
          {/* <TextField fullWidth label="Date" variant="outlined" size="small" type="date" InputLabelProps={{ shrink: true }} /> */}
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <TextField fullWidth label="Account" variant="outlined" size="small" />
            <Button variant="contained" component="label" sx={{ ml: 1 }}>
              <AddIcon />
              <input type="file" hidden />
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <TextField
                   id="amount"
                    label="Amount"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{  style: { fontSize: '1rem' } }}
                  />
          {/* <TextField fullWidth label="Amount" variant="outlined" size="small" /> */}
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
          <TextField fullWidth label="User Info" variant="outlined" size="small" />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" gap={1}>
            <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
            <Button variant="contained" component="label">
              Browse
              {/* <AddIcon />
              <input type="file" hidden /> */}
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
        {/* <Grid item xs={12}>
          <TextField fullWidth label="Attach File" variant="outlined" size="small" />
          <Button variant="contained" component="label" sx={{ mt: 1 }}>
            <AddIcon />
            <input type="file" hidden />
          </Button>
          <Button variant="contained" component="label" sx={{ mt: 1, ml: 1 }}>
            Scan
          </Button>
          <Button variant="contained" color="error" sx={{ mt: 1, ml: 1 }}>
            Remove File
          </Button>
          <Button variant="contained" sx={{ mt: 1, ml: 1 }}>
            Print Preview
          </Button>
        </Grid> */}
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




// import React, { useState } from 'react';
// import { Box, Button, Grid, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const Cashpayment = () => {
//   const initialFormData={
//     vchrid:'',
//     transno:'',
//     transtype:'',
//     atchmntimage:'',
//     date:'',
//     narration:'',
//     timestamp:'',
//     acname:'',
//     Acid:'',
//     userinfo:'',
//     CurrDate:''
//   }
//    const initialParams={
//     LabNo:'',
//     YrId:2223,
//     CmpyId:2,
//     brnid:2
//    }
//    const[formData,setFormData]=useState(initialFormData)
//    const[params, setParams]=useState(initialParams)

//    const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };
//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//     console.log('FormData after change:', { ...formData, [id]: value });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };
//   const fetchData = () => {
//     const { LabNo, YrId, CmId ,brnid} = params;
//     axios.get(`http://172.16.16.10:8060/api/cashpayfill`, {
//       params: {
//         LabNo,
//         YrId,
//         CmId,
//         brnid
//       }
//     })
//       .then(response => {
//         console.log(response);
//         const data = response.data.pay_exist[0];
//          setFormData(data);
//          toast.success('data fetched successfully')
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('error in fetching data')
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//         <Grid item xs={12} sm={6}>
//         <TextField
//                 id="LabNo"
//                 label="Lab No"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 value={params.LabNo}
//                 onChange={handleInputChange}
//                 onKeyPress={handleKeyPress}
//                 InputLabelProps={{ style: { fontSize: '1rem' } }}
//               />
//         {/* <TextField
//                    id="transno"
//                     label="Trans No"
//                     variant="outlined"
//                     size="small"
//                     value={params.LabNo}
//                     onChange={handleInputChange}
//                     onKeyPress={handleKeyPress}
//                     fullWidth
//                     InputLabelProps={{  style: { fontSize: '1rem' } }}
//                   /> */}
//           </Grid>
//         <Grid item xs={12} sm={6}>
//         <TextField
//                     id="date"
//                     label="Date"
//                     type="date"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//                  />
//                  </Grid>
//         <Grid item xs={12}>
//           <Box display="flex" alignItems="center">
//             <TextField 
//             id='account'
//             fullWidth
//              label="Account" 
//              variant="outlined"
//               size="small"
//               InputLabelProps={{style:{fontSize:'1rem'}}} 
//               />
//              <Button variant="contained" component="label" sx={{ ml: 1 }}> 
//               <AddIcon /> 
//                <input type="file" hidden /> 
//              </Button> 
//           </Box>
//         </Grid>
//         <Grid item xs={4} >
//         <TextField
//                    id="amount"
//                     label="Amount"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{  style: { fontSize: '1rem' } }}
//                   />
//         </Grid>
//          <Grid item xs={12}> 
//    <TextareaAutosize 
//      minRows={4} 
//      maxRows={6} 
//      style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} 
//       placeholder="Naration" 
//    /> 
//    </Grid> 
//         <Grid item xs={12}>
//         <TextField
//                    id="userinfo"
//                     label="User Info"
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                     InputLabelProps={{  style: { fontSize: '1rem' } }}
//                   />
//                   </Grid>
//         <Grid item xs={12}> 
//            <Box display="flex" alignItems="center" gap={1}> 
//             <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} /> 
//             <Button variant="contained" component="label">
//               Browse
//                {/* <AddIcon /> */}
//               <input type="file" hidden /> 
//             </Button> 
//             <Button variant="contained" component="label">
//               Scan
//             </Button>
//             <Button variant="contained">
//               Remove File
//             </Button>
//             <Button variant="contained">
//               Print Preview
//             </Button>
//           </Box>
//         </Grid>
//        <Grid item xs={12}>
//   <TextareaAutosize
//      minRows={4} 
//     maxRows={6} 
//      style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }} 
//     // placeholder="Enter narration here..." 
//    /> 
// </Grid> 
// <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={handleSave}
//             sx={{ marginTop: 2, marginRight: 1 }}
//           > Print </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           > New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//             <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//             <Button
//             variant="contained"
//             color="primary"
//             // onClick={clearDetails}
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
// </Grid>

    
//   );
// };

// export default Cashpayment;



// import React, { useState } from 'react';
// import { Box, Button, Grid, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     amount:'',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };
//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };
//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//     console.log('FormData after change:', { ...formData, [id]: value });
//   };
//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//     console.log('Fetching data from:', url);
//     axios.get(url)
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Trans No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           value={formData.date}
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='account'
//             fullWidth
//             label="Account"
//             variant="outlined"
//             value={formData.acname}
//             size="small"
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <AddIcon />
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           value={formData.amount}
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Naration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//           variant="outlined"
//           value={formData.userinfo}
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File"
//           value={formData.atchmntimage}
//            variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         {formData.atchmntimage && (
//           <Box mt={2}>
//             <img
//               src={`data:image/png;base64,${formData.atchmntimage}`}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           </Box>
//         )}
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Enter narration here..."
//         />
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           > Print </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           > New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;


// import React, { useState } from 'react';
// import { Box, Button, Grid, TextField } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '', // Trans No
//     transtype: '',
//     atchmntimage: '', // Base64 encoded image string
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     account:'',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };

//   const initialParams = {
//     LabNo: '', // Lab No (used to fetch data)
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//     console.log('FormData after change:', { ...formData, [id]: value });
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//     console.log('Fetching data from:', url);
//     axios.get(url)
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date); // Format the date
//           setFormData(data);
//           toast.success('Data fetched successfully');
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Lab No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.date}
//           onChange={handleFormChange}
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='acname'
//             label="Account"
//             variant="outlined"
//             size="small"
//             fullWidth
//             value={formData.acname}
//             onChange={handleFormChange}
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <AddIcon />
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.amount}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           id="narration"
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           value={formData.narration}
//           onChange={(e) => handleFormChange({ target: { id: 'narration', value: e.target.value } })}
//           placeholder="Narration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.userinfo}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         {formData.atchmntimage ? (
//           <Box mt={2}>
//             <img
//               src={`data:image/png;base64,${formData.atchmntimage}`}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//               onError={(e) => { e.target.src = 'path/to/placeholder/image.png'; }} // Fallback image in case of an error
//             />
//           </Box>
//         ) : (
//           <p>No image available</p>
//         )}
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;






// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button,Grid } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//         if (!dateString) return '';
//         const date = new Date(dateString);
//         const year = date.getFullYear();
//         const month = (date.getMonth() + 1).toString().padStart(2, '0');
//         const day = date.getDate().toString().padStart(2, '0');
//         return `${year}-${month}-${day}`;
//       };
//   const fetchData = () => {
//         const { LabNo, YrId, CmpyId, brnid } = params;
//         const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//         console.log('Fetching data from:', url);
//         axios.get(url)
//           .then(response => {
//             console.log('API response:', response);
//             if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//               const data = response.data.pay_exist[0];
//               data.date = formatDate(data.date);
//               setFormData(data);
//               toast.success('Data fetched successfully');
//               processImage(data.atchmntimage);
//             } else {
//               toast.error('No data found');
//             }
//           })
//           .catch(error => {
//             console.error('Error fetching the data', error);
//             toast.error('Error in fetching data');
//           });
//       };
// const processImage = (base64Image) => {
//     if (base64Image) {
//       // Extract the MIME type from the base64 string
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//       const mimeTypeMatch = base64Image.match(mimeTypePattern);
  
//       if (mimeTypeMatch) {
//         // MIME type found, use it to set image src
//         const mimeType = mimeTypeMatch[1];
//         setImgSrc(base64Image); // Use the full base64 string
//       } else {
//         // MIME type not found, try to use a generic approach
//         setImgSrc('path/to/placeholder/image.png'); // Fallback
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png'); // No image data
//     }
//   };
  


//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Lab No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='account'
//             fullWidth
//             label="Account"
//             variant="outlined"
//             size="small"
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <AddIcon />
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="userinfo"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Box mt={2}>
//           {imgSrc ? (
//             <img
//               src={imgSrc}
//               alt="Attached"
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           ) : (
//             <p>No image available</p>
//           )}
//         </Box>
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;




// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Cashpayment = () => {
//   const initialFormData = {
//     vchrid: '',
//     transno: '',
//     transtype: '',
//     atchmntimage: '',
//     date: '',
//     narration: '',
//     timestamp: '',
//     acname: '',
//     Acid: '',
//     userinfo: '',
//     CurrDate: ''
//   };

//   const initialParams = {
//     LabNo: '',
//     YrId: 2223,
//     CmpyId: 2,
//     brnid: 2
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [params, setParams] = useState(initialParams);
//   const [imgSrc, setImgSrc] = useState('');
//   const [isImageLoaded, setIsImageLoaded] = useState(false);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
//     console.log('Fetching data from:', url);
//     axios.get(url)
//       .then(response => {
//         console.log('API response:', response);
//         if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//           processImage(data.atchmntimage);
//         } else {
//           toast.error('No data found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypes = ['image/png', 'image/jpeg', 'image/gif'];
//       let loaded = false;

//       mimeTypes.forEach((mimeType, index) => {
//         if (!loaded) {
//           const img = new Image();
//           img.src = `data:${mimeType};base64,${base64Image}`;

//           img.onload = () => {
//             if (!loaded) {
//               setImgSrc(img.src);
//               setIsImageLoaded(true);
//               loaded = true;
//             }
//           };

//           img.onerror = () => {
//             if (index === mimeTypes.length - 1) {
//               setImgSrc('path/to/placeholder/image.png'); // Fallback image if none of the formats work
//               setIsImageLoaded(true);
//             }
//           };
//         }
//       });
//     } else {
//       setImgSrc('path/to/placeholder/image.png'); // No image data
//       setIsImageLoaded(true);
//     }
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="LabNo"
//           label="Lab No"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={params.LabNo}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6}>
//         <TextField
//           id="date"
//           label="Date"
//           type="date"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField
//             id='account'
//             fullWidth
//             label="Account"
//             variant="outlined"
//             size="small"
//             InputLabelProps={{ style: { fontSize: '1rem' } }}
//           />
//           <Button variant="contained" component="label" sx={{ ml: 1 }}>
//             <input type="file" hidden />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={4}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden />
//           </Button>
//           <Button variant="contained" component="label">
//             Scan
//           </Button>
//           <Button variant="contained">
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <Box mt={2}>
//           {isImageLoaded ? (
//             imgSrc ? (
//               <img src={imgSrc} alt="Attachment" style={{ maxWidth: '100%', height: 'auto' }} />
//             ) : (
//               <p>No image available</p>
//             )
//           ) : (
//             <p>Loading image...</p>
//           )}
//         </Box>
//       </Grid>
//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginLeft: 2 }}
//           >Exit</Button>
//         </Grid>
//       </Grid>
//       <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
//     </Grid>
//   );
// };

// export default Cashpayment;

