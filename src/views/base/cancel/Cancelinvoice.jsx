import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox, Container, Paper } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CButton, CCard, CCardHeader,CCardBody } from '@coreui/react';

const Cancelinvoice= () => {

  const [formData, setFormData] = useState({
    PatTitle: '',
    BillDate: '',
    PatName: '',
    PatAgedd: '',
    PatAgemm: '',
    PatAgeyy: '',
    PatGender: '',
    PatPhone: '',
    PatEmail: '',
    RefBy: '',
    OutDr: '',
    BranchName: '',
    PatOpNo: '',
    CollMode: '',
    collBy: '',
    SampleOn: '',
    ReportTime: '',
    ReportRequest: '',
    Reportreqpersonal: false,
    ReportReqphn: false,
    ReportReqcourier: false,
    ReportReqemail: false,
    ReportReqsms: false,
    NetAmount: '',
  });

  const [params, setParams] = useState({
    LabNo: '',
    YrId: 2324,
    CmId: 2
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setParams(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = () => {
    const { LabNo, YrId, CmId } = params;
    axios.get(`http://172.16.16.10:8082/api/Cancelinvget`, {
      params: {
        LabNo,
        YrId,
        CmId
      }
    })
      .then(response => {
        const data = response.data.exist_dlts[0];
        setFormData(data);
        toast.success('data fetched successfully')
      })
      .catch(error => {
        console.error('Error fetching the data', error);
        toast.error('error in fetching data')
      });
  };
  return (
    <>
       <CCard className="mb-4">
      <CCardBody>
        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h6"
                sx={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: ' #599eb4 ',
                }}
              >
                CANCEL INVOICE
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
                <CButton
                  color="primary"
                  style={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 'auto' },
                  }}
                >
                  SAVE
                </CButton>
                <CButton
                  color="primary"
                  style={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 'auto' },
                  }}
                >
                  EXIT
                </CButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <hr/>
  <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <TextField
              id="LabNo"
              label="Lab No"
              variant="outlined"
              size="small"
              fullWidth
              value={params.LabNo}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
      id="invDateTime"
      label="Date"
      variant="outlined"
      size="small"
      fullWidth
      value={formData.BillDate}
       type="datetime-local"
      InputLabelProps={{ shrink: true }}
      style={{ marginTop: '10px' }}
    />
     </Grid>
            <Grid item xs={12} sm={2}>
  <FormControl fullWidth variant="outlined" sx={{ width: '100%' , height: '100%' }}  >
    <InputLabel  sx={{
    fontSize: '1rem',
    color: 'rgba(0, 0, 0, 0.6)', 
    marginTop: '-2px'
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
      label="Prefix"
      value={formData.PatTitle}
      sx={{ width: '100%',height:'75%' }}>
       <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
    </Select>
  </FormControl>
</Grid>
<Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                value={formData.PatName}
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
        
            <Grid item xs={12} sm={1}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  color: 'rgba(0, 0, 0, 0.7)',
                  fontSize: '16px',
                  marginTop: '8px',
                  textAlign: 'left',
                }}
              >
                Age
              </Typography>
            </Grid>
              <Grid item container xs={12} sm={7} spacing={1}>
              <Grid item xs={3}>
              <TextField
                id="dd"
                label="Day"
                variant="outlined"
                value={formData.PatAgedd}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="mm"
                label="Month"
                variant="outlined"
                value={formData.PatAgemm}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="yyyy"
                label="Year"
                variant="outlined"
                value={formData.PatAgeyy}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid> 
            <Grid item xs={12} sm={3}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel"
                    sx={{
                      fontSize: '1rem',
                      color: 'rgba(0, 0, 0, 0.6)', 
                      marginTop: '-1px'
                    }}>Gender</InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      label="Gender"
                      value={formData.PatGender}
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
<Grid item xs={12} sm={4}>
                <TextField
                  id="phone1"
                  label="Phone1"
                  variant="outlined"
                  size="small"
                  value={formData.PatPhone}
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '16px' } }}
                />
              </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                value={formData.PatEmail}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="refby"
                label="RefBy"
                value={formData.RefBy}
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
        
    
      <Grid item xs={12} sm={12}>
        <TextField
          id="outDr"
          label="Out Dr"
          variant="outlined"
          value={formData.OutDr}
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '16px' } }}
        />
      </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="branch"
                label="Branch"
                variant="outlined"
                value={formData.BranchName}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="ipop"
                label="IP/OP"
                variant="outlined"
                value={formData.PatOpNo}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
          
            <Grid item xs={12} sm={6}>
            <TextField
          id="collmode"
          label="Coll. Mode"
          variant="outlined"
          value={formData.CollMode}
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '16px' } }}
         
        />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                id="collby"
                label="Coll. By"
                variant="outlined"
                value={formData.collBy}
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
                      
      <Grid item xs={12} sm={6}>
  <TextField
    id="sampleOn"
    label="Sample On"
    type="datetime-local"
    variant="outlined"
    value={formData.SampleOn}
    size="small"
    fullWidth
    InputLabelProps={{ shrink: true, style: { fontSize: '16px' } }}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    id="reportTime"
    label="Report Time"
    type="datetime-local"
    variant="outlined"
    value={formData.ReportTime}
    size="small"
    fullWidth
    InputLabelProps={{ shrink: true, style: { fontSize: '16px' } }}
  />
</Grid>
        
            <Grid item xs={12}>
      <FormControl component="fieldset">
        <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
        <FormGroup row>
          <FormControlLabel
             control={<Checkbox checked={formData.Reportreqpersonal} name="personally" />}
            label="Personally"
          />
           <FormControlLabel
             control={<Checkbox checked={formData.ReportReqcourier} name="courier" />}
            label="Courier"
          />
          <FormControlLabel
             control={<Checkbox checked={formData.ReportReqphn}  name="phone" />}
            label="phone"
          />
         
          <FormControlLabel
             control={<Checkbox checked={formData.ReportReqemail} name="email" />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox checked={formData.ReportReqsms} name="sms" />}
            label="SMS"
          />
         
        </FormGroup>
      </FormControl>
      
    </Grid>
    <Grid item sm={6}></Grid>
    <Grid item xs={12} sm={6}>
      <TextField
      id='invamount'
      label='Inv_Amount'
      variant='outlined'
      size='small'
      value={formData.NetAmount}
      fullWidth
      InputLabelProps={{style:{fontSize:'16PX'}}}
      />
    </Grid>
    <Grid item xs={12} sm={12}>
              <TextField
                id="reason"
                label="Reason"
                variant="outlined"
                size="small"
                fullWidth
              multiline
              rows={5}
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
          </Grid>
     {/* <ToastContainer /> */}
     <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </CCardBody>
    </CCard>
    </>
  );
};

export default  Cancelinvoice;


// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   TextField,
//   FormControlLabel,
//   FormControl,
//   InputLabel,
//   Select,
//   Checkbox,
//   Grid,
//   Typography,
//   IconButton,
//   MenuItem,
// } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { CButton, CCard, CCardBody } from '@coreui/react';
// import axios from 'axios';

// const CancelInvoice = () => {
//   const [formData, setFormData] = useState({
//     PatTitle: '',
//     BillDate: '',
//     PatName: '',
//     PatAgedd: '',
//     PatAgemm: '',
//     PatAgeyy: '',
//     PatGender: '',
//     PatPhone: '',
//     PatEmail: '',
//     RefBy: '',
//     OutDr: '',
//     BranchName: '',
//     PatOpNo: '',
//     CollMode: '',
//     collBy: '',
//     SampleOn: '',
//     ReportTime: '',
//     ReportRequest: '',
//     Reportreqpersonal: false,
//     ReportReqphn: false,
//     ReportReqcourier: false,
//     ReportReqemail: false,
//     ReportReqsms: false,
//     NetAmount: '',
//   });

//   useEffect(() => {
//     axios.get('http://172.16.16.10:8082/api/Cancelinvget?LabNo=17&YrId=2324&CmId=2')
//       .then(response => {
//         const data = response.data.exist_dlts[0];
//         setFormData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//       });
//   }, []);

//   return (
//     <CCard className="mb-4">
//       <CCardBody>
//         <Box sx={{ padding: 2 }}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={8}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   margin: 0,
//                   fontSize: '24px',
//                   fontWeight: 'bold',
//                   color: ' #599eb4 ',
//                 }}
//               >
//                 CANCEL INVOICE
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
//                 <CButton color='primary' style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>NEW</CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>SAVE</CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>EXIT</CButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//         <hr/>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <TextField
//                 id="PatName"
//                 label="Patient Name"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 value={formData.PatName}
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//               <IconButton color="primary">
//                 <MoreHorizIcon />
//               </IconButton>
//             </Box>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="PatPhone"
//               label="Phone"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.PatPhone}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="PatEmail"
//               label="Email"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.PatEmail}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <FormControl variant="outlined" size="small" fullWidth>
//               <InputLabel id="PatGenderLabel">Gender</InputLabel>
//               <Select
//                 labelId="PatGenderLabel"
//                 id="PatGender"
//                 label="Gender"
//                 value={formData.PatGender}
//               >
//                 <MenuItem value="M">Male</MenuItem>
//                 <MenuItem value="F">Female</MenuItem>
//                 <MenuItem value="O">Other</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="NetAmount"
//               label="Net Amount"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.NetAmount}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={<Checkbox checked={formData.Reportreqpersonal} />}
//               label="Report Requested Personally"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={<Checkbox checked={formData.ReportReqemail} />}
//               label="Report Request by Email"
//             />
//           </Grid>
//           {/* Add more fields as needed */}
//         </Grid>
//       </CCardBody>
//     </CCard>
//   );
// };

// export default CancelInvoice;

// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   TextField,
//   FormControlLabel,
//   FormControl,
//   InputLabel,
//   Select,
//   Checkbox,
//   Grid,
//   Typography,
//   IconButton,
//   MenuItem,
// } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { CButton, CCard, CCardBody } from '@coreui/react';
// import axios from 'axios';

// const CancelInvoice = ({ labNo, yrId, cmId }) => {
//   const [formData, setFormData] = useState({
//     PatTitle: '',
//     BillDate: '',
//     PatName: '',
//     PatAgedd: '',
//     PatAgemm: '',
//     PatAgeyy: '',
//     PatGender: '',
//     PatPhone: '',
//     PatEmail: '',
//     RefBy: '',
//     OutDr: '',
//     BranchName: '',
//     PatOpNo: '',
//     CollMode: '',
//     collBy: '',
//     SampleOn: '',
//     ReportTime: '',
//     ReportRequest: '',
//     Reportreqpersonal: false,
//     ReportReqphn: false,
//     ReportReqcourier: false,
//     ReportReqemail: false,
//     ReportReqsms: false,
//     NetAmount: '',
//   });

//   useEffect(() => {
//     axios.get(`http://172.16.16.10:8082/api/Cancelinvget`, {
//       params: {
//         LabNo: 2,
//         YrId: 2324,
//         CmId: 2
//       }
//     })
//       .then(response => {
//         const data = response.data.exist_dlts[0];
//         setFormData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//       });
//   }, [labNo, yrId, cmId]);

//   return (
//     <CCard className="mb-4">
//       <CCardBody>
//         <Box sx={{ padding: 2 }}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={8}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   margin: 0,
//                   fontSize: '24px',
//                   fontWeight: 'bold',
//                   color: ' #599eb4 ',
//                 }}
//               >
//                 CANCEL INVOICE
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
//                 <CButton color='primary' style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>NEW</CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>SAVE</CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>EXIT</CButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//         <hr/>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <TextField
//                 id="PatName"
//                 label="Patient Name"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 value={formData.PatName}
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//               <IconButton color="primary">
//                 <MoreHorizIcon />
//               </IconButton>
//             </Box>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="PatPhone"
//               label="Phone"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.PatPhone}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="PatEmail"
//               label="Email"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.PatEmail}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <FormControl variant="outlined" size="small" fullWidth>
//               <InputLabel id="PatGenderLabel">Gender</InputLabel>
//               <Select
//                 labelId="PatGenderLabel"
//                 id="PatGender"
//                 label="Gender"
//                 value={formData.PatGender}
//               >
//                 <MenuItem value="M">Male</MenuItem>
//                 <MenuItem value="F">Female</MenuItem>
//                 <MenuItem value="O">Other</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="NetAmount"
//               label="Net Amount"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.NetAmount}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={<Checkbox checked={formData.Reportreqpersonal} />}
//               label="Report Requested Personally"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={<Checkbox checked={formData.ReportReqemail} />}
//               label="Report Request by Email"
//             />
//           </Grid>
//           {/* Add more fields as needed */}
//         </Grid>
//       </CCardBody>
//     </CCard>
//   );
// };

// export default CancelInvoice;


// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   TextField,
//   FormControlLabel,
//   FormControl,
//   InputLabel,
//   Select,
//   Checkbox,
//   Grid,
//   Typography,
//   IconButton,
//   MenuItem,
// } from '@mui/material';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import { CButton, CCard, CCardBody } from '@coreui/react';
// import axios from 'axios';

// const CancelInvoice = () => {
//   const [formData, setFormData] = useState({
//     PatTitle: '',
//     BillDate: '',
//     PatName: '',
//     PatAgedd: '',
//     PatAgemm: '',
//     PatAgeyy: '',
//     PatGender: '',
//     PatPhone: '',
//     PatEmail: '',
//     RefBy: '',
//     OutDr: '',
//     BranchName: '',
//     PatOpNo: '',
//     CollMode: '',
//     collBy: '',
//     SampleOn: '',
//     ReportTime: '',
//     ReportRequest: '',
//     Reportreqpersonal: false,
//     ReportReqphn: false,
//     ReportReqcourier: false,
//     ReportReqemail: false,
//     ReportReqsms: false,
//     NetAmount: '',
//   });

//   const [params, setParams] = useState({
//     LabNo: '',
//     YrId: 2324,
//     CmId: 2
//   });

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   const fetchData = () => {
//     const { LabNo, YrId, CmId } = params;
//     axios.get(`http://172.16.16.10:8082/api/Cancelinvget`, {
//       params: {
//         LabNo,
//         YrId,
//         CmId
//       }
//     })
//       .then(response => {
//         const data = response.data.exist_dlts[0];
//         setFormData(data);
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//       });
//   };

//   return (
//     <CCard className="mb-4">
//       <CCardBody>
//         <Box sx={{ padding: 2 }}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={8}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   margin: 0,
//                   fontSize: '24px',
//                   fontWeight: 'bold',
//                   color: ' #599eb4 ',
//                 }}
//               >
//                 CANCEL INVOICE
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>SAVE</CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>EXIT</CButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//         <hr/>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               id="LabNo"
//               label="Lab No"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={params.LabNo}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           {/* <Grid item xs={12}>
//             <TextField
//               id="YrId"
//               label="Year ID"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={params.YrId}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="CmId"
//               label="Company ID"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={params.CmId}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid> */}
//           <Grid item xs={12}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <TextField
//                 id="PatName"
//                 label="Patient Name"
//                 variant="outlined"
//                 size="small"
//                 fullWidth
//                 value={formData.PatName}
//                 InputLabelProps={{ style: { fontSize: '14px' } }}
//               />
//               <IconButton color="primary">
//                 <MoreHorizIcon />
//               </IconButton>
//             </Box>
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="PatPhone"
//               label="Phone"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.PatPhone}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               id="PatEmail"
//               label="Email"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.PatEmail}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <FormControl variant="outlined" size="small" fullWidth>
//               <InputLabel id="PatGenderLabel">Gender</InputLabel>
//               <Select
//                 labelId="PatGenderLabel"
//                 id="PatGender"
//                 label="Gender"
//                 value={formData.PatGender}
//               >
//                 <MenuItem value="M">Male</MenuItem>
//                 <MenuItem value="F">Female</MenuItem>
//                 <MenuItem value="O">Other</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="NetAmount"
//               label="Net Amount"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={formData.NetAmount}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={<Checkbox checked={formData.Reportreqpersonal} />}
//               label="Report Requested Personally"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <FormControlLabel
//               control={<Checkbox checked={formData.ReportReqemail} />}
//               label="Report Request by Email"
//             />
//           </Grid>
//           {/* Add more fields as needed */}
//         </Grid>
//       </CCardBody>
//     </CCard>
//   );
// };

// export default CancelInvoice;
