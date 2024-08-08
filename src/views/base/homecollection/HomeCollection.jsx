import React, { useEffect, useState } from 'react';
import { Container, Button, Grid, Paper, TextField, Typography, FormControl,FormControlLabel,Checkbox, InputLabel, Select, MenuItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Box, FormGroup, RadioGroup, Radio, } from '@mui/material';
import { CButton, CCard, CCardHeader, CCardBody, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const HomeCollection = () => {
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [prefix, setPrefix] = useState('');
  const [gender, setGender] = useState('');

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    const prefixToGender = { Mr: 'M', Mrs: 'F', Ms: 'F', Miss: 'F' };
    setGender(prefixToGender[prefix] || '');
  }, [prefix]);

  // Sample data for the table
  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
    { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
    { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
    { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
  ];
  return (
    <>
      <CCardBody>
        {/* Form and Table */}
        <Grid container spacing={2}>
          {/* Left side - Form */}
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              {/* Error Message */}
              {error && (
                <Grid item xs={12}>
                  <Typography variant="body2" color="error">{error}</Typography>
                </Grid>
              )}
              {/* Form Fields */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="bookno"
                  label="Book No"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField

                  id="dateTime"
                  label="Date/Time"
                  variant="outlined"
                  size="small"
                  type='datetime-local'
                  fullWidth
                  InputLabelProps={{ shrink:true,style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="id"
                  label="Patient ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
             
              <Grid item xs={12} sm={9}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant='contained' color='primary'>Search</Button>
              </Grid>
              <Grid item xs={12} sm={9}>
                <TextField
                  id="address"
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   multiline
                //   rows={3}
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
               <Grid item xs={12} sm={3}>
                <TextField
                  select
                  label="Prefix"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  fullWidth
                //   multiline
                //   rows={3}
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="yyyy"
                  label="Age YY"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="mm"
                  label="Age MM"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id='dd'
                  label='Age DD'
                  variant='outlined'
                  size='small'
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
           
              <Grid item xs={12} sm={12}>
                <TextField
                  id="landmark"
                  label="Landmark"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="area"
                  label="Area"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
        <TextField
          id="map"
          label="Map URL"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={6} sm={2} textAlign="center">
        <LocationOnIcon fontSize="large"  style={{ color: 'red' }}  />
      </Grid>
      <Grid item xs={6} sm={4}>
        <Button variant='contained' color='primary'>
          Map Search
        </Button>
      </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="colldate"
                  label="Coll.Date"
                  variant="outlined"
                  type='datetime-local'
                  size="small"
                  fullWidth
                  InputLabelProps={{shrink:true, style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Bkg.Through"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
             
              <Grid item xs={12} sm={4}>
                <TextField
                  id="mobile"
                  label="Mobile"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id='phone'
                  label="Phone"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                 
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="driver"
                  label="Driver"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="takenby"
                  label="TakenBy"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  label="Sample Mode"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Mr">Mr</MenuItem>
                  <MenuItem value="Mrs">Mrs</MenuItem>
                  <MenuItem value="Ms">Ms</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  id="abhaid"
                  label="ABHA ID"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
            <FormControlLabel control={<Checkbox />} label="Urgent" />
            <FormControlLabel control={<Checkbox />} label="Covid19 Sample" />
          </Grid>
          <Grid item xs={12}>
          <Box sx={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>SlNo</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Lab</TableCell>
                        <TableCell  sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Date</TableCell>
                        <TableCell   sx={{ border: '1px solid #dddddd', background: '#3095E5', color: '#ffffff', fontSize: '1rem', padding: '8px', textAlign: 'center' }}>Select</TableCell>
     
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                          {/* <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell> */}
                          
                        </TableRow>
                      
                      {/* {rows.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.id}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col1}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col2}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col3}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col4}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col5}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col6}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}>{row.col7}</TableCell>
                        </TableRow>
                      ))} */}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box mt={15} />
                </Box>
          
              </Grid>
          
      {/* Multiline TextField */}
      <Grid item xs={12} sm={6}>
        <TextField
          id="remarks"
          label="Remarks"
          variant="outlined"
          size="small"
          multiline
          rows={6}
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>

      {/* Three TextFields arranged in a column */}
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              id="total"
              label="Total"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="scharge"
              label="S.Charge"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
          <Grid item >
            <TextField
              id="discount"
              label="Discount"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '1rem' } }}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Single TextField */}
      <Grid item xs={12} sm={6}>
        <TextField
          id="discountreason"
          label="D.Reason"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="est"
          label="Est.NetAmt"
          variant="outlined"
          size="small"
          fullWidth
          InputLabelProps={{ style: { fontSize: '1rem' } }}
        />
      </Grid>
    
      
      <Grid item xs={12} sm={2}>
        <FormControlLabel control={<Checkbox />} label="Cancel" />
      </Grid>

     
      <Grid item xs={12} sm={10}>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Save
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              New
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Exit
            </Button>
          </Grid>
        </Grid>
      </Grid>
  
      {/* <Grid item xs={12} sm={2}>
      <FormControlLabel control={<Checkbox />} label="Urgent" />
      
      </Grid>
      
      
      <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginRight: 1 }}
            >Save</Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginLeft: 2 }}
            >New</Button>
            <Button
              variant='contained'
              color='primary'
              sx={{ marginTop: 2, marginLeft: 2 }}
            >Exit</Button>
          </Grid>
        </Grid> */}

    
      
   
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  id="collamount"
                  label="Coll.Amount"
                  variant="outlined"
                  size="small"
                  multiline
                  rows={3}
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="colldatetime"
                  label="Coll.DateTime"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid> */}
            
            </Grid>
          </Grid>
          {/* Right side - Table */}
          <Grid item xs={12} sm={6}>
                    <Box sx={{ mb: 2 }}>
                        <FormControl component="fieldset">
                            <RadioGroup row >
                                <FormControlLabel
                                    value="cash"
                                    control={<Radio size="small" />}
                                    label={<Typography variant="body2">Entry Date</Typography>}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                                />
                                <FormControlLabel
                                    value="cheque"
                                    control={<Radio size="small" />}
                                    label={<Typography variant="body2">Exit Date</Typography>}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Grid>

               
          {/* <Grid item xs={12} sm={6}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  id='dateFrom'
                  label='From'
                  variant='outlined'
                  size='small'
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="dateTo"
                  label="To"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '1rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={4} container alignItems="center" justifyContent="flex-start" spacing={1}>
                <Grid item>
                  <Button
                    variant='contained'
                    color="primary">REFRESH</Button>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained'
                    color="primary">PRINT</Button>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <FormGroup row>
                      <FormControlLabel
                        label="Corporate"
                        labelPlacement='start'
                        control={
                          <Checkbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            name="corporate"
                          />
                        }
                      />
                      {isChecked && (
                        <Grid item>
                          <TextField
                            label="Input"
                            variant="outlined"
                            size='small'
                            InputLabelProps={{ style: { fontSize: '1rem' } }}
                            style={{ marginTop: '8px', marginLeft: '6px' }} 
                          />
                        </Grid>
                      )}
                    </FormGroup>
                  </FormControl>
                </Grid>
                
              </Grid>
              

              <Grid item xs={12}>
             
                           <TableContainer component={Paper}>
                             <Table size="small" stickyHeader aria-label="sticky table">
                               <TableHead>
                                 <TableRow>
                                   <TableCell >SlNo</TableCell>
                                   <TableCell>Lab</TableCell>
                                   <TableCell>Date</TableCell>
                                   <TableCell>Name</TableCell>
                                   <TableCell>Balance</TableCell>
                                   <TableCell>Coroperate</TableCell>
                                   <TableCell>User</TableCell>
                                   <TableCell>View</TableCell>
                                 </TableRow>
                               </TableHead>
                               <TableBody>
                                 {rows.map((row) => (
                                   <TableRow key={row.id}>
                                     <TableCell>{row.id}</TableCell>
                                     <TableCell>{row.col1}</TableCell>
                                     <TableCell>{row.col2}</TableCell>
                                     <TableCell>{row.col3}</TableCell>
                                     <TableCell>{row.col4}</TableCell>
                                     <TableCell>{row.col5}</TableCell>
                                     <TableCell>{row.col6}</TableCell>
                                   <TableCell>{row.col7}</TableCell>
                                   <TableCell>{row.col8}</TableCell>
                                   
                                   </TableRow>
                                 ))}
                               </TableBody>
                             </Table>
                          </TableContainer>
                        </Grid>
            </Grid>
          </Grid> */}
        </Grid>
        {/* <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: 2 }}>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginRight: 1 }}
            >Save</Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, marginLeft: 2 }}
            >New</Button>
            <Button
              variant='contained'
              color='primary'
              sx={{ marginTop: 2, marginLeft: 2 }}
            >Exit</Button>
          </Grid>
        </Grid> */}
      </CCardBody>
    </>
  )
}
export default HomeCollection;