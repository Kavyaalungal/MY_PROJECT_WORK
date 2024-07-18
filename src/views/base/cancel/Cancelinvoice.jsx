import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox, Container, Paper } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CButton, CCard, CCardHeader,CCardBody } from '@coreui/react';

const Cancelinvoice= () => {


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
                  color='primary'
                  style={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: 'auto' },
                  }}
                >
                  NEW
                </CButton>
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
     {/* <CCard className="mb-4"> */}
     {/* <CCardHeader> */}
   
      {/* <strong style={{ fontSize: '2rem', color: '#523885', fontWeight: 'bold' }}>EDIT INVOICE</strong> */}

            {/* <Grid item xs={12} sm={8} md={6} lg={4}> */}
        
        {/* </Grid> */}
          {/* </CCardHeader> */}
     {/* <div style={{  minHeight: '100vh', padding: '20px'   }}>
    */}
      
        
     
    {/* <Container component="main" maxWidth="md" > */}
      {/* <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}> */}
      {/* <Box sx={{ padding: 2 }}>
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
            */}
            
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                id="labno"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
                 style={{ marginTop: '10px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
      id="invDateTime"
      label="Date"
      variant="outlined"
      size="small"
      fullWidth
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
    marginTop: '-1px'
  }}>Prefix</InputLabel>
    <Select
      name="prefix"
      label="Prefix"
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
                  fullWidth
                  InputLabelProps={{ style: { fontSize: '16px' } }}
                />
              </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '16px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="refby"
                label="RefBy"
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
             control={<Checkbox  name="personally" />}
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
    <Grid item sm={6}></Grid>
    <Grid item xs={12} sm={6}>
      <TextField
      id='invamount'
      label='Inv_Amount'
      variant='outlined'
      size='small'
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
      {/* </Paper> */}
    {/* </Container> */}
     {/* <ToastContainer /> */}
     <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    {/* </div>
    </CCard> */}
    </CCardBody>
    </CCard>
    </>
  );
};

export default  Cancelinvoice;
