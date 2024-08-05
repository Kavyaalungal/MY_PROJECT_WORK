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






import React, { useState, useEffect } from 'react';
import { Box, TextField, Button,Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cashpayment = () => {
  const initialFormData = {
    vchrid: '',
    transno: '',
    transtype: '',
    atchmntimage: '',
    date: '',
    narration: '',
    timestamp: '',
    amount:'',
    acname: '',
    Acid: '',
    userinfo: '',
    CurrDate: ''
  };

  const initialParams = {
    LabNo: '',
    YrId: 2223,
    CmpyId: 2,
    brnid: 2
  };

  const [formData, setFormData] = useState(initialFormData);
  const [params, setParams] = useState(initialParams);
  const [imgSrc, setImgSrc] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setParams(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
  const fetchData = () => {
        const { LabNo, YrId, CmpyId, brnid } = params;
        // const url = `http://172.16.16.10:8060/api/cashpayfill?labno=${LabNo}&YrId=${YrId}&CmpyId=${CmpyId}&brnid=${brnid}`;
        // console.log('Fetching data from:', url);
        // axios.get(url)
        axios.get(`http://172.16.16.10:8060/api/cashpayfill`, {
              params: {
                   LabNo,
                   YrId,
                   CmpyId,
                  brnid
                 }
               })
          .then(response => {
            console.log('API response:', response);
            if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
              const data = response.data.pay_exist[0];
              data.date = formatDate(data.date);
              setFormData(data);
              toast.success('Data fetched successfully');
              processImage(data.atchmntimage);
            } else {
              toast.error('No data found');
            }
          })
          .catch(error => {
            console.error('Error fetching the data', error);
            toast.error('Error in fetching data');
          });
      };
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



  
// const processImage = (base64Image) => {
//   if (base64Image) {
//     const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//     const mimeTypeMatch = base64Image.match(mimeTypePattern);

//     if (mimeTypeMatch) {
//       const mimeType = mimeTypeMatch[1];
//       setImgSrc(base64Image); // Use the full base64 string
//       console.log('Image source set:', base64Image); // Log the base64 image data
//     } else {
//       setImgSrc('path/to/placeholder/image.png'); // Fallback if MIME type is not found
//       console.warn('MIME type not found in base64 string');
//     }
//   } else {
//     setImgSrc('path/to/placeholder/image.png'); // No image data
//     console.warn('No image data provided');
//   }
// };




// useEffect(() => {
//   if (imgSrc) {
//     console.log('Image source updated:', imgSrc);
//     // Optionally, you can add an image element and check if it loads correctly
//     const img = new Image();
//     img.src = imgSrc;
//     img.onload = () => console.log('Image loaded successfully');
//     img.onerror = () => console.error('Image failed to load');
//   }
// }, [imgSrc]);



const processImage = (base64Image) => {
  if (base64Image) {
    // Check if the base64 string includes the MIME type
    const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
    const mimeTypeMatch = base64Image.match(mimeTypePattern);

    if (mimeTypeMatch) {
      const mimeType = mimeTypeMatch[1];
      console.log('MIME type found:', mimeType);
      setImgSrc(base64Image); // Use the full base64 string
    } else {
      // Attempt to handle base64 string without MIME type
      const mimeTypeFallback = 'image/png'; // Assuming PNG as fallback
      setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
      console.warn('MIME type not found in base64 string, using fallback');
    }
  } else {
    setImgSrc('path/to/placeholder/image.png'); // No image data
    console.warn('No image data provided');
  }
};


  return (
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
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="date"
          label="Date"
          type="date"
          variant="outlined"
          value={formData.date}
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
            value={formData.acname}
            variant="outlined"
            size="small"
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
          <Button variant="contained" component="label" sx={{ ml: 1 }}>
            <AddIcon />
            <input type="file" hidden />
          </Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          value={formData.amount}
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          minRows={4}
          maxRows={6}
          value={formData.narration}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
          placeholder="Narration"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="userinfo"
          label="User Info"
           variant="outlined"
          value={formData.userinfo}
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField label="Attach File" variant="outlined" size="small" sx={{ flex: 1 }} />
          <Button variant="contained" component="label">
            Browse
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
        <Box mt={2}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt="Attached"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          ) : (
            <p>No image available</p>
          )}
        </Box>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginRight: 1 }}
          >Print</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginLeft: 2 }}
          >New</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginLeft: 2 }}
          >Save</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginLeft: 2 }}
          >Delete</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 2, marginLeft: 2 }}
          >Exit</Button>
        </Grid>
      </Grid>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </Grid>
  );
};

export default Cashpayment;




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

