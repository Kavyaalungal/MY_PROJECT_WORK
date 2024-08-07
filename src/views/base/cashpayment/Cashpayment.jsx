// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import AddIcon from '@mui/icons-material/Add';
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
//     amount: '',
//     acname: '',
//     Acid: '',
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
//   const [file, setFile] = useState(null); // To handle the new file input
// // function takes a single argument that means to be a string  in the format username date-time Work Station
// //   const parseTimestamp = (value) => {
// //     const regex = /^(.*?)\s(\d{2}-\d{2}-\d{4}\s\d{2}:\d{2})\sWork\sStation:(.*)$/;//regular expression that matches the string format
// //     const match = value.match(regex);// it checks whether the string matches the regular expession if no match it returns null
    
// //     if (!match) return { username: '', dateTime: '', workStation: '' }; // if it is null then it returns the objects with empty string
// //     // returns the matched strings
// //     return {
// //       username: match[1],
// //       dateTime: match[2],
// //       workStation: match[3],
// //     };
// //   };
// // // this function takes two arguments one is the string in the above mentioned format and second is new date and time that replace the current date and time value
// //   const updateTimestamp = (value, newDateTime) => {
// //     const parsed = parseTimestamp(value); // here calling the above function to split the components in the above mentioned format and stored it in a variable named parsed
// //     parsed.dateTime = newDateTime; // here it updates the parsed datetime value with the current date and time value
// //     return `${parsed.username} ${parsed.dateTime} Work Station:${parsed.workStation}`; // assembling all the parsed and updated value to a string format
// //   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };
//   const handleFormChange = (event) => { // function taking event as an object parameter as event
//     const { id, value } = event.target;  // destructuring the id and new value enetered from event.target 
//     let newValue = value; // this variable stores the current value of the form field and holds the updated value of the form field

//     // if (id === "timestamp") { // if id equals timestamp then this if block will execute
//     //   const currentDateTime = new Date().toLocaleString(); // takes the current datetime and formats it into a string using .toLocalString()
//     //   // newValue = updateTimestamp(value, currentDateTime); // here calling the updatetimestamp function to update the current datetime value of the string
//     //   newValue = updateTimestamp(`${formData.username} ${formData.dateTime} Work Station:${formData.workStation}`, currentDateTime);
//     // }

//     setFormData({ // updates the form
//       ...formData, // spreads the existing data
//       [id]: newValue, // updates the value of the corresponding id selected
//     });
//   };
  

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       fetchData();
//     }
//   };

//   //function to format the datestring and the function takes an argument datestring
//      const formatDate = (dateString) => {
//           if (!dateString) return '';   // if no datestring is there or undefined one then it stops the execution and exits with empty string
         
//            const date = new Date(dateString); //creates a new date object using the passed datestring and it parses and converts it into a valid format
//            const year = date.getFullYear();  // extracts the year from the date object 
//            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // extracts the month from date object +1 means normally index starts from 0 to adjust that to start from  1 toString means convert the number to a string, Padstart methos is done to ensure that the month is always in a two digit string format
//            // .padStart(2,'0') the fisrt character 2 means the target length should be 2 and second character 0 means adding 0 in the start to make it the target length eg: if '1' then ,make it as '01'
//            const day = date.getDate().toString().padStart(2, '0'); // same method for the month field 
//           return `${year}-${month}-${day}`;  // return the final result in this format
//          };

//   const fetchData = () => {
//     const { LabNo, YrId, CmpyId, brnid } = params;
//     axios.get('http://172.16.16.10:8060/api/cashpayfill', {
//       params: {
//         LabNo,
//         YrId,
//         CmpyId,
//         brnid
//       }
//     })
//       .then(response => {
//         console.log('API response:', response);
//         // if (response.data && response.data.pay_exist && response.data.pay_exist.length > 0) {
//           const data = response.data.pay_exist[0];
//           data.date = formatDate(data.date);
//           setFormData(data);
//           toast.success('Data fetched successfully');
//           processImage(data.atchmntimage);
//         // } else {
//         //   toast.error('No data found');
//         // }
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };
// // process image function takes base64Image as an argument which is a base64 encoded image
// const processImage = (base64Image) => {
//     if (base64Image) { // base64 image is then only the function enters the  if block, if no image is there then it enteres the else block exits.
//       // Check if the base64 string includes the MIME type
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/; // regular expression for checking the mime type that is .png,.jpg,.jpeg etc...
//       const mimeTypeMatch = base64Image.match(mimeTypePattern); // checks if the image matches the regular expression and it is assigned to a variable named mimeTypeMatch
//                                                                 // if match found then mimeTypeMatch will be an array and first element will be the entire matched string
//                                                                 // if no match is found then mimeTypeMatch is null
//       if (mimeTypeMatch) {   // if the mimeTypeMatch then it extracts the first element 
//         const mimeType = mimeTypeMatch[1];
//         console.log('MIME type found:', mimeType);
//         setImgSrc(base64Image); // Use the full base64 string passed as an argument to setImgSrc function
//       } else {
  
//         // By providing a fallback MIME type (image/png), the function ensures that even if the MIME type is missing, the image can still be displayed correctly.
//         // Attempt to handle base64 string without MIME type
//         const mimeTypeFallback = 'image/png'; // Assuming PNG as fallback
//         setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);//To construct a valid data URI that includes the fallback MIME type and the base64-encoded image data, and then set this as the image source.
//         console.warn('MIME type not found in base64 string, using fallback');
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png'); // if no image is there then it exits the if block and it executes the else block it sets path to a default image to be displayed when no image is provided
//       console.warn('No image data provided');
//     }
//   };
// // function takes file as its parameter the file contains the file that wants to be converted into base64 format
//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => { // this line creates a new promise, promise are used for asynchronous operation that may succeed or fail
//       const reader = new FileReader(); // this line creates a new instance of the filereader(), this allows to read the files of the users computer  The FileReader object is used to read the contents of files asynchronously. It provides methods to read files in different formats (e.g., as text, binary, or data URL).
//       reader.onloadend = () => {  // this sets eventhandler onloadend event on the filereader, when the file is successfully read this function is called
//         resolve(reader.result);//This property contains the result of the file reading operation. 
//       };
//       reader.onerror = (error) => { // this sets eventhandler onerror event on the filereader,when the file is failed during reading this function is called 
//         reject(error); // this function rejects the promise with an error showing that something went wrong when reading the file
//       };
//       reader.readAsDataURL(file);//readAsDataURL, it contains a Base64 encoded data URL representing the file's contents.This method reads the file as a data URL (a Base64 encoded string that represents the file's data). This is useful for embedding file content directly into web pages or transmitting it over networks.
//     });
//   };
// // this is an asynchronous function which takes event as a parameter which is generated when a file is selected by the input field
//   const handleFileChange = async (event) => {
//     const file = event.target.files[0]; // extracts the file from a list of files, ie selecting the first file from the list of files
//     if (file) {  // checks if file is there only when a file is there the rest of the code executes
//       // here we use try catch block for error handling,  it converts the file to base64 and updates the state 
//       try {
//         const base64String = await convertToBase64(file); //  here it waits for the  function to complete before further proceedings because that function returns a promise,calls the convertToBase64 function for converting into base64 encoded string
//         setFormData(prevState => ({ // updates the state with the new base64 encoded string
//           ...prevState, // spreads the already existing the data 
//           atchmntimage: base64String // upadtes the image field
//         }));
//         setImgSrc(base64String); // updates the state with base64 encoded image for displaying
//       } catch (error) {
//         console.error('Error converting file to base64:', error);
//       }
//     }
//   };
  
  
//   const handleSave = () => {
//     const dataToSend = {
//       VchrDate: formData.date,
//       VchrBookId: 678.90,
//       VchrId: formData.vchrid,
//       VchrTransType: formData.transtype,
//       VchrTransNo: formData.transno,
//       VchrNarration: formData.narration,
//       VchrPayment: formData.amount,
//       VchrReceipt: 0.00,
//       VchrTimeStamp: formData.timestamp,
//       VchrUsrId: 6,
//       VchrYrId: 2223,
//       VchrCpyId: 2,
//       VchrUpdtd: 0,
//       VchrChq: 0,
//       VchrChqNo: "34567",
//       VchrChqDate: "2024-08-05",
//       VchrChqPassed: 0,
//       VchrBrId: 2,
//       VchrTdsAmt: 500.00,
//       VchrAttachment: formData.atchmntimage, // Base64 image data
//       Editflag: true
//     };
//     console.log("data send to backend",dataToSend);
    
  
//     axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       console.log('Data saved successfully', response.data);
//       toast.success('Data saved successfully');
//     })
//     .catch(error => {
//       console.error('Error saving data', error);
//       toast.error('Error in saving data');
//     });
//   };
  
  
//    return (
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
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//           <Box display="flex" alignItems="center">
//              <TextField 
//                id="acname"
//                label="Account"
//                variant="outlined"
//                size="small"
//                fullWidth
//                value={formData.acname}
//                onChange={handleFormChange}
//                InputLabelProps={{style:{fontSize:'1rem'}}} 
//                />
//               <Button variant="contained" component="label" sx={{ ml: 1 }}> 
//                <AddIcon /> 
//                 <input type="file" hidden /> 
//               </Button> 
//           </Box>
//          </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="amount"
//           label="Amount"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.amount}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           minRows={4}
//           maxRows={6}
//           value={formData.narration}
//           style={{ width: '100%', padding: '8px', borderRadius: '4px', borderColor: '#ccc', borderWidth: '1px', borderStyle: 'solid' }}
//           placeholder="Narration"
//           onChange={(e) => handleFormChange({ target: { id: 'narration', value: e.target.value } })}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="timestamp"
//           label="User Info"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.timestamp}
//           onChange={handleFormChange}
//         />
//       </Grid>


       


//       {/* <Grid item xs={12}>
//         <Box display="flex" alignItems="center" gap={1}>
//           <Grid item xs={3}>
//             <Box mt={2}>
//               {imgSrc ? (
//                 <img
//                   src={imgSrc}
//                   alt="Attached"
//                   style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                   // style={{ maxWidth: '100%', height: 'auto' }}
//                 />
//               ) : (
//                 <p>No attachments</p>
//               )}
//             </Box>
//           </Grid>
//           <Button variant="contained" component="label">
//             Browse
//             <input type="file" hidden onChange={handleFileChange} />
//           </Button>
//           <Button variant="contained" component="label">
//            Scan
//                       </Button>
//           <Button variant="contained" onClick={() => setImgSrc('')}>
//             Remove File
//           </Button>
//           <Button variant="contained">
//             Print Preview
//           </Button>
//         </Box>
//       </Grid> */}
//       <Grid item xs={12}>
//   <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
//     <Grid item xs={3}>
//       <Box mt={2}>
//         {imgSrc ? (
//           <img
//             src={imgSrc}
//             alt="Attached"
//             style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//           />
//         ) : (
//           <p>No attachments</p>
//         )}
//       </Box>
//     </Grid>
//     <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1}>
//       <Button variant="contained" component="label" >
//         Browse
//         <input type="file" hidden onChange={handleFileChange} />
//       </Button>
//       <Button variant="contained" component="label" >
//         Scan
//       </Button>
//       <Button variant="contained" onClick={() => setImgSrc('')} >
//         Remove File
//       </Button>
//       <Button variant="contained" >
//         Print Preview
//       </Button>
//     </Box>
//   </Box>
// </Grid>

//       <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 0 }}>
//         <Grid item>
//         <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Print</Button>
//            <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >New</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//             onClick={handleSave}
//           >Save</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
//           >Delete</Button>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: 2, marginRight: 1 }}
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
// import AddIcon from '@mui/icons-material/Add';
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
//     amount: '',
//     acname: '',
//     Acid: '',
//     username: '',
//     workStation: ''
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
//   const [file, setFile] = useState(null);

//   // Function to parse the timestamp into components
//   const parseTimestamp = (value) => {
//     const regex = /^(.*?)\s(\d{2}-\d{2}-\d{4}\s\d{2}:\d{2})\sWork\sStation:(.*)$/;
//     const match = value.match(regex);
//     if (!match) return { username: '', dateTime: '', workStation: '' };
//     return {
//       username: match[1],
//       dateTime: match[2],
//       workStation: match[3],
//     };
//   };

//   // Function to update the timestamp with new date and time
//   const updateTimestamp = (username, dateTime, workStation) => {
//     return `${username} ${dateTime} Work Station:${workStation}`;
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (event) => {
//     const { id, value } = event.target;
//     let newValue = value;

//     if (id === "timestamp") {
//       const currentDateTime = new Date().toLocaleString();
//       newValue = updateTimestamp(formData.username, currentDateTime, formData.workStation);
//     } else if (id === "username") {
//       newValue = updateTimestamp(value, formData.date, formData.workStation);
//     } else if (id === "workStation") {
//       newValue = updateTimestamp(formData.username, formData.date, value);
//     } else {
//       newValue = value;
//     }

//     setFormData({
//       ...formData,
//       [id]: newValue,
//     });
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
//     axios.get('http://172.16.16.10:8060/api/cashpayfill', {
//       params: {
//         LabNo,
//         YrId,
//         CmpyId,
//         brnid
//       }
//     })
//       .then(response => {
//         const data = response.data.pay_exist[0];
//         data.date = formatDate(data.date);
//         const { username, dateTime, workStation } = parseTimestamp(data.timestamp);
//         setFormData({
//           ...data,
//           date: data.date,
//           username,
//           workStation,
//           timestamp: data.timestamp
//         });
//         toast.success('Data fetched successfully');
//         processImage(data.atchmntimage);
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//       const mimeTypeMatch = base64Image.match(mimeTypePattern);
//       if (mimeTypeMatch) {
//         const mimeType = mimeTypeMatch[1];
//         setImgSrc(base64Image);
//       } else {
//         const mimeTypeFallback = 'image/png';
//         setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
//         console.warn('MIME type not found in base64 string, using fallback');
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png');
//       console.warn('No image data provided');
//     }
//   };

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         resolve(reader.result);
//       };
//       reader.onerror = (error) => {
//         reject(error);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       try {
//         const base64String = await convertToBase64(file);
//         setFormData(prevState => ({
//           ...prevState,
//           atchmntimage: base64String
//         }));
//         setImgSrc(base64String);
//       } catch (error) {
//         console.error('Error converting file to base64:', error);
//       }
//     }
//   };

//   const handleSave = () => {
//     const dataToSend = {
//       VchrDate: formData.date,
//       VchrBookId: 678.90,
//       VchrId: formData.vchrid,
//       VchrTransType: formData.transtype,
//       VchrTransNo: formData.transno,
//       VchrNarration: formData.narration,
//       VchrPayment: formData.amount,
//       VchrReceipt: 0.00,
//       VchrTimeStamp: formData.timestamp,
//       VchrUsrId: 6,
//       VchrYrId: 2223,
//       VchrCpyId: 2,
//       VchrUpdtd: 0,
//       VchrChq: 0,
//       VchrChqNo: "34567",
//       VchrChqDate: "2024-08-05",
//       VchrChqPassed: 0,
//       VchrBrId: 2,
//       VchrTdsAmt: 500.00,
//       VchrAttachment: formData.atchmntimage,
//       Editflag: true
//     };
//     console.log("data send to backend", dataToSend);

//     axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       console.log('Data saved successfully', response.data);
//       toast.success('Data saved successfully');
//     })
//     .catch(error => {
//       console.error('Error saving data', error);
//       toast.error('Error in saving data');
//     });
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
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField 
//             id="acname"
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
//             <input type="file" hidden onChange={handleFileChange} />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           id="narration"
//           minRows={3}
//           placeholder="Narration"
//           value={formData.narration}
//           onChange={handleFormChange}
//           style={{ width: '100%' }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="timestamp"
//           label="Timestamp"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.timestamp}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="username"
//           label="Username"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.username}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="workStation"
//           label="Workstation"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={formData.workStation}
//           onChange={handleFormChange}
//           InputLabelProps={{ style: { fontSize: '1rem' } }}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         {imgSrc && <img src={imgSrc} alt="Attachment" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
//       </Grid>
//       <Grid item xs={12}>
//         <Button variant="contained" color="primary" onClick={handleSave}>
//           Save
//         </Button>
//       </Grid>
//       <ToastContainer />
//     </Grid>
//   );
// };

// export default Cashpayment;



import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
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
    amount: '',
    acname: '',
    Acid: ''
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
  const [file, setFile] = useState(null);

  // Function to parse the timestamp into components
  const parseTimestamp = (value) => {
    const regex = /^(.*?)\s(\d{2}-\d{2}-\d{4}\s\d{2}:\d{2})\sWork\sStation:(.*)$/;
    const match = value.match(regex);
    if (!match) return { username: '', dateTime: '', workStation: '' };
    return {
      username: match[1],
      dateTime: match[2],
      workStation: match[3],
    };
  };

  // Function to update the timestamp with new date and time
  const updateTimestamp = (username, dateTime, workStation) => {
    return `${username} ${dateTime} Work Station:${workStation}`;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setParams(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormChange = (event) => {
    const { id, value } = event.target;

    if (id === "timestamp") {
      const { username, dateTime, workStation } = parseTimestamp(value);
      setFormData(prevState => ({
        ...prevState,
        [id]: value,
        username,
        workStation
      }));
    } else if (id === "username") {
      const { dateTime, workStation } = parseTimestamp(formData.timestamp);
      setFormData(prevState => ({
        ...prevState,
        timestamp: updateTimestamp(value, dateTime, workStation),
        username: value
      }));
    } else if (id === "workStation") {
      const { username, dateTime } = parseTimestamp(formData.timestamp);
      setFormData(prevState => ({
        ...prevState,
        timestamp: updateTimestamp(username, dateTime, value),
        workStation: value
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
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
    axios.get('http://172.16.16.10:8060/api/cashpayfill', {
      params: {
        LabNo,
        YrId,
        CmpyId,
        brnid
      }
    })
      .then(response => {
        const data = response.data.pay_exist[0];
        data.date = formatDate(data.date);
        const { username, dateTime, workStation } = parseTimestamp(data.timestamp);
        setFormData({
          ...data,
          date: data.date,
          username,
          workStation,
          timestamp: data.timestamp
        });
        toast.success('Data fetched successfully');
        processImage(data.atchmntimage);
      })
      .catch(error => {
        console.error('Error fetching the data', error);
        toast.error('Error in fetching data');
      });
  };

  const processImage = (base64Image) => {
    if (base64Image) {
      const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
      const mimeTypeMatch = base64Image.match(mimeTypePattern);
      if (mimeTypeMatch) {
        const mimeType = mimeTypeMatch[1];
        setImgSrc(base64Image);
      } else {
        const mimeTypeFallback = 'image/png';
        setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
        console.warn('MIME type not found in base64 string, using fallback');
      }
    } else {
      setImgSrc('path/to/placeholder/image.png');
      console.warn('No image data provided');
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const base64String = await convertToBase64(file);
        setFormData(prevState => ({
          ...prevState,
          atchmntimage: base64String
        }));
        setImgSrc(base64String);
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };

  const handleSave = () => {
    const dataToSend = {
      VchrDate: formData.date,
      VchrBookId: 678.90,
      VchrId: formData.vchrid,
      VchrTransType: formData.transtype,
      VchrTransNo: formData.transno,
      VchrNarration: formData.narration,
      VchrPayment: formData.amount,
      VchrReceipt: 0.00,
      VchrTimeStamp: formData.timestamp,
      VchrUsrId: 6,
      VchrYrId: 2223,
      VchrCpyId: 2,
      VchrUpdtd: 0,
      VchrChq: 0,
      VchrChqNo: "34567",
      VchrChqDate: "2024-08-05",
      VchrChqPassed: 0,
      VchrBrId: 2,
      VchrTdsAmt: 500.00,
      VchrAttachment: formData.atchmntimage,
      Editflag: true
    };
    console.log("data send to backend", dataToSend);

    axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Data saved successfully', response.data);
      toast.success('Data saved successfully');
    })
    .catch(error => {
      console.error('Error saving data', error);
      toast.error('Error in saving data');
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          id="LabNo"
          label="Trans No"
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
          onChange={handleFormChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <TextField 
            id="acname"
            label="Account"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.acname}
            onChange={handleFormChange}
            InputLabelProps={{ style: { fontSize: '1rem' } }}
          />
          <input
            accept="image/*"
            id="imageUpload"
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="imageUpload">
            <Button
              variant="contained"
              color="secondary"
              component="span"
              startIcon={<AddIcon />}
            >
              Upload
            </Button>
          </label>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextareaAutosize
          id="narration"
          minRows={3}
          placeholder="Narration"
          value={formData.narration}
          onChange={handleFormChange}
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="timestamp"
          label="Timestamp"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.timestamp}
          onChange={handleFormChange}
          InputLabelProps={{ style: { fontSize: '1rem' } }}
          placeholder="Edit Username and Workstation"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="amount"
          label="Amount"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.amount}
          onChange={handleFormChange}
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12}>
        {imgSrc && <img src={imgSrc} alt="Attachment" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default Cashpayment;



// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import AddIcon from '@mui/icons-material/Add';
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
//     amount: '',
//     acname: '',
//     Acid: '',
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
//   const [file, setFile] = useState(null); 

//   const parseTimestamp = (value) => {
//     const regex = /^(.*?)\s(\d{2}-\d{2}-\d{4}\s\d{2}:\d{2})\sWork\sStation:(.*)$/;
//     const match = value.match(regex);
    
//     if (!match) return { username: '', dateTime: '', workStation: '' };

//     return {
//       username: match[1],
//       dateTime: match[2],
//       workStation: match[3],
//     };
//   };

//   const updateTimestamp = (value, newDateTime) => {
//     const parsed = parseTimestamp(value);
//     parsed.dateTime = newDateTime;
//     return `${parsed.username} ${parsed.dateTime} Work Station:${parsed.workStation}`;
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setParams(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   const handleFormChange = (event) => {
//     const { id, value } = event.target;
//     let newValue = value;

//     if (id === "timestamp") {
//       const currentDateTime = new Date().toLocaleString('en-GB', {
//         day: '2-digit',
//         month: '2-digit',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//       }).replace(',', ''); 

//       newValue = updateTimestamp(formData.timestamp, currentDateTime);
//     }

//     setFormData({
//       ...formData,
//       [id]: newValue,
//     });
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
//     axios.get('http://172.16.16.10:8060/api/cashpayfill', {
//       params: {
//         LabNo,
//         YrId,
//         CmpyId,
//         brnid
//       }
//     })
//       .then(response => {
//         const data = response.data.pay_exist[0];
//         data.date = formatDate(data.date);
//         setFormData(data);
//         toast.success('Data fetched successfully');
//         processImage(data.atchmntimage);
//       })
//       .catch(error => {
//         console.error('Error fetching the data', error);
//         toast.error('Error in fetching data');
//       });
//   };

//   const processImage = (base64Image) => {
//     if (base64Image) {
//       const mimeTypePattern = /^data:(image\/[a-zA-Z]*);base64,/;
//       const mimeTypeMatch = base64Image.match(mimeTypePattern);
      
//       if (mimeTypeMatch) {
//         const mimeType = mimeTypeMatch[1];
//         setImgSrc(base64Image);
//       } else {
//         const mimeTypeFallback = 'image/png';
//         setImgSrc(`data:${mimeTypeFallback};base64,${base64Image}`);
//         console.warn('MIME type not found in base64 string, using fallback');
//       }
//     } else {
//       setImgSrc('path/to/placeholder/image.png');
//       console.warn('No image data provided');
//     }
//   };

//   const convertToBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         resolve(reader.result);
//       };
//       reader.onerror = (error) => {
//         reject(error);
//       };
//       reader.readAsDataURL(file);
//     });
//   };

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       try {
//         const base64String = await convertToBase64(file);
//         setFormData(prevState => ({
//           ...prevState,
//           atchmntimage: base64String
//         }));
//         setImgSrc(base64String);
//       } catch (error) {
//         console.error('Error converting file to base64:', error);
//       }
//     }
//   };

//   const handleSave = () => {
//     const dataToSend = {
//       VchrDate: formData.date,
//       VchrBookId: 678.90,
//       VchrId: formData.vchrid,
//       VchrTransType: formData.transtype,
//       VchrTransNo: formData.transno,
//       VchrNarration: formData.narration,
//       VchrPayment: formData.amount,
//       VchrReceipt: 0.00,
//       VchrTimeStamp: formData.timestamp,
//       VchrUsrId: 6,
//       VchrYrId: 2223,
//       VchrCpyId: 2,
//       VchrUpdtd: 0,
//       VchrChq: 0,
//       VchrChqNo: "34567",
//       VchrChqDate: "2024-08-05",
//       VchrChqPassed: 0,
//       VchrBrId: 2,
//       VchrTdsAmt: 500.00,
//       VchrAttachment: formData.atchmntimage,
//       Editflag: true
//     };
//     console.log("data send to backend", dataToSend);

//     axios.post('http://172.16.16.10:8060/api/cashpaysave/msgpay', dataToSend, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => {
//       console.log('Data saved successfully', response.data);
//       toast.success('Data saved successfully');
//     })
//     .catch(error => {
//       console.error('Error saving data', error);
//       toast.error('Error in saving data');
//     });
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
//           value={formData.date}
//           size="small"
//           fullWidth
//           InputLabelProps={{ shrink: true, style: { fontSize: '1rem' } }}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Box display="flex" alignItems="center">
//           <TextField 
//             id="acname"
//             label="Account"
//             variant="outlined"
//             size="small"
//             fullWidth
//             value={formData.acname}
//             onChange={handleFormChange}
//             InputLabelProps={{style:{fontSize:'1rem'}}} 
//           />
//                    <Button variant="contained" component="label" sx={{ ml: 2 }}>
//             Upload
//             <input
//               type="file"
//               hidden
//               onChange={handleFileChange}
//             />
//           </Button>
//         </Box>
//       </Grid>
//       <Grid item xs={12}>
//         <TextareaAutosize
//           id="timestamp"
//           aria-label="Timestamp"
//           minRows={3}
//           placeholder="Enter timestamp"
//           style={{ width: '100%', padding: '10px', fontSize: '1rem' }}
//           value={formData.timestamp}
//           onChange={handleFormChange}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         {imgSrc && <img src={imgSrc} alt="Attachment" style={{ maxWidth: '100%', height: 'auto' }} />}
//       </Grid>
//       <Grid item xs={12} textAlign="right">
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSave}
//         >
//           Save
//         </Button>
//       </Grid>
//       <ToastContainer />
//     </Grid>
//   );
// };

// export default Cashpayment;



