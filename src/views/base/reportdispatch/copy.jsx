// import React from 'react'

// function ReportDispatch() {
//   return (
//     <div>ReportDispatch</div>
//   )
// }

// export default ReportDispatch


// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Typography,
//   Paper,
//   Box,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [reportingMode, setReportingMode] = useState('Personally');
//   const [dispatchModes, setDispatchModes] = useState([
//     { id: 1, mode: 'Phone', selected: false, userInfo: 'user1' },
//     { id: 2, mode: 'ByHand', selected: false, userInfo: 'user2' },
//     { id: 3, mode: 'Email', selected: false, userInfo: 'user3' },
//     { id: 4, mode: 'Courier', selected: false, userInfo: 'user4' },
//     { id: 5, mode: 'Through Branch', selected: false, userInfo: 'user5' },
//   ]);

//   const handleCheckboxChange = (index) => {
//     const updatedDispatchModes = [...dispatchModes];
//     updatedDispatchModes[index].selected = !updatedDispatchModes[index].selected;
//     setDispatchModes(updatedDispatchModes);
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}>
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>SlNo</TableCell>
//                   <TableCell>Select</TableCell>
//                   <TableCell>Person</TableCell>
//                   <TableCell>DispatchMode</TableCell>
//                   <TableCell>UserInfo</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {dispatchModes.map((mode, index) => (
//                   <TableRow key={mode.id}>
//                     <TableCell>{mode.id}</TableCell>
//                     <TableCell>
//                       <Checkbox
//                         checked={mode.selected}
//                         onChange={() => handleCheckboxChange(index)}
//                       />
//                     </TableCell>
//                     <TableCell>{mode.person || '-'}</TableCell>
//                     <TableCell>{mode.mode}</TableCell>
//                     <TableCell>{mode.userInfo}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
//           <Grid item>
//             <Button variant="contained" color="primary">New</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Delete</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Save</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Exit</Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ReportDispatching;


// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Typography,
//   Paper,
//   Box,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [reportingMode, setReportingMode] = useState('Personally');
//   const [dispatchModes, setDispatchModes] = useState([
//     { id: 1, mode: 'Phone', selected: false, userInfo: 'user1' },
//     { id: 2, mode: 'ByHand', selected: false, userInfo: 'user2' },
//     { id: 3, mode: 'Email', selected: false, userInfo: 'user3' },
//     { id: 4, mode: 'Courier', selected: false, userInfo: 'user4' },
//     { id: 5, mode: 'Through Branch', selected: false, userInfo: 'user5' },
//   ]);

//   const handleCheckboxChange = (index) => {
//     const updatedDispatchModes = [...dispatchModes];
//     updatedDispatchModes[index].selected = !updatedDispatchModes[index].selected;
//     setDispatchModes(updatedDispatchModes);
//   };

//   return (
//     <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}>
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} container spacing={2}>
//           <Grid item xs={3}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={mode.id}>
//                       <TableCell>{mode.id}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={9}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Select</TableCell>
//                     <TableCell>Person</TableCell>
//                     <TableCell>DispatchMode</TableCell>
//                     <TableCell>UserInfo</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode, index) => (
//                     <TableRow key={mode.id}>
//                       <TableCell>{mode.id}</TableCell>
//                       <TableCell>
//                         <Checkbox
//                           checked={mode.selected}
//                           onChange={() => handleCheckboxChange(index)}
//                         />
//                       </TableCell>
//                       <TableCell>{mode.person || '-'}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                       <TableCell>{mode.userInfo}</TableCell>
//                     </TableRow>
//                   ))}
        //         </TableBody>
       //        </Table>
       //      </TableContainer>
       //    </Grid>
       //  </Grid>
       //  <Grid item xs={12}>
       //    <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
      //   </Grid>
        // <Grid item xs={12}>
        //   <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
       //  </Grid>
       //  <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
         //  <Grid item>
          //   <Button variant="contained" color="primary">New</Button>
          // </Grid>
          // <Grid item>
          //   <Button variant="contained" color="primary">Delete</Button>
           //</Grid></Grid>export default ReportDispatching;

// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Typography,
//   Paper,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
//   Checkbox
// } from '@mui/material';

// const ReportDispatching = () => {
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

//   return (
//     <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}>
//       <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <TextField label="Entry No" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Server" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="LabNo" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Age" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Reference By" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="Email" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
//               <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
//               <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
//               <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
//               <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
//               <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} container spacing={2}>
//           <Grid item xs={3}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes.map((mode) => (
//                     <TableRow
//                       key={mode.id}
//                       onDoubleClick={() => handleDispatchModeDoubleClick(mode.mode)}
//                       style={{ cursor: 'pointer' }}
//                     >
//                       <TableCell>{mode.id}</TableCell>
//                       <TableCell>{mode.mode}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//           <Grid item xs={9}>
//             <TableContainer>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SlNo</TableCell>
//                     <TableCell>Select</TableCell>
//                     <TableCell>Person</TableCell>
//                     <TableCell>DispatchMode</TableCell>
//                     <TableCell>UserInfo</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {dispatchModes
//                     .filter((mode) => selectedModes.includes(mode.mode))
//                     .map((mode) => (
//                       <TableRow key={mode.id}>
//                         <TableCell>{mode.id}</TableCell>
//                         <TableCell>
//                           <Checkbox />
//                         </TableCell>
//                         <TableCell>{mode.person || '-'}</TableCell>
//                         <TableCell>{mode.mode}</TableCell>
//                         <TableCell>{mode.userInfo}</TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Registration Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12}>
//           <TextField label="Note" variant="outlined" fullWidth size="small" multiline rows={2} />
//         </Grid>
//         <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
//           <Grid item>
//             <Button variant="contained" color="primary">New</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Delete</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Save</Button>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" color="primary">Exit</Button>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default ReportDispatching;

import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Checkbox
} from '@mui/material';

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
     {/* <Paper elevation={3} sx={{ padding: '16px', borderRadius: '15px' }}> */}
      <Typography variant="h5" sx={{ marginBottom: '16px', textAlign: 'center', color: 'green' }}>Report Dispatching</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField label="Entry No" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Patient Name" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Server" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Date Time" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="LabNo" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Age" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Branch Name" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Reference By" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Email" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="IP/OP" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Sample On" type="datetime-local" variant="outlined" fullWidth size="small" InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <RadioGroup row value={reportingMode} onChange={(e) => setReportingMode(e.target.value)}>
              <FormControlLabel value="Personally" control={<Radio size="small" />} label="Personally" />
              <FormControlLabel value="Telephone" control={<Radio size="small" />} label="Telephone" />
              <FormControlLabel value="Courier" control={<Radio size="small" />} label="Courier" />
              <FormControlLabel value="Email" control={<Radio size="small" />} label="Email" />
              <FormControlLabel value="SMS" control={<Radio size="small" />} label="SMS" />
            </RadioGroup>
          </FormControl>
        </Grid>
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
      </Grid>
    {/* </Paper> */}
    </>
  );
};

export default ReportDispatching;


// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Typography,
//   Paper,
//   Box,
//   Container,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   Button,
// } from '@mui/material';

// const ReportDispatching = () => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [rows, setRows] = useState([]);

//   const handleDoubleClick = (dispatchMode) => {
//     const newRow = {
//       id: selectedRows.length + 1,
//       dispatchMode,
//       userInfo: 'sumesh 31-07-2024 11:07 Work Station:DESKTOP-NAJROUS'
//     };
//     setSelectedRows((prevSelectedRows) => [...prevSelectedRows, newRow]);
//   };

//   const dispatchModes = ['Phone', 'ByHand', 'Email', 'Courier', 'Through Branch'];

//   return (
//     <Container>
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
//                     <TableCell>Sl No</TableCell>
//                     <TableCell>Dispatch Mode</TableCell>
//                     <TableCell>User Info</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {selectedRows.map((row) => (
//                     <TableRow key={row.id}>
//                       <TableCell>{row.id}</TableCell>
//                       <TableCell>{row.dispatchMode}</TableCell>
//                       <TableCell>{row.userInfo}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default ReportDispatching;
