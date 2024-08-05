import { CCardBody } from '@coreui/react'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, MenuItem, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function BillWiseArea() {
    const [labno, setLabno] = useState('Lab Collection')
  return (
    <CCardBody>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Box sx={{ border: '1px solid #ddd', padding: '10px',marginBottom:'10px' }}>
            <Grid container spacing={2}>

            <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <RadioGroup row value={labno} onChange={(e) => setLabno(e.target.value)}>
                    <FormControlLabel
                      value="Lab Collection"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Lab Collection</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                id='date'
                label='Date'
                variant='outlined'
                type='date'
                size='small'
                InputLabelProps={{shrink:true, style:{fontSize:'1rem'}}}
                />
              </Grid>
</Grid>
</Box>
<Box sx={{ border: '1px solid #ddd', padding: '10px',marginBottom:'10px' }}>
<Grid container spacing={2}>
<Grid item xs={3}>
              <FormControlLabel control={<Checkbox />} label="Up To"
                 sx={{ fontSize: '1rem' }} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id='date'
                // label='Date'
                variant='outlined'
                type='date'
                size='small'
                InputLabelProps={{shrink:true, style:{fontSize:'1rem'}}}
                />
              </Grid>
          <Grid item xs={8}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="area"
                label="Area"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <TextField
                    select
                    label="Mode"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="UPI">Daily</MenuItem>
                    {/* <MenuItem value="BANK">BANK</MenuItem>
                    <MenuItem value="CASH">CASH</MenuItem> */}
                   
                  </TextField>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="area"
                label="Coroperate"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Box>
          </Grid>

              <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{  style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid> 
           <Grid item xs={12} sm={5}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
                  variant="contained"
                  color="primary"
                  // onClick={resetForm}
                  // sx={{ marginTop: 2, marginLeft: 2 }}
                >
                  AutoAllocate
                </Button>
            </Box>
          </Grid> 
           <Grid item xs={12} sm={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <FormControl component="fieldset" fullWidth>
                    <FormGroup row>
                      <FormControlLabel
                        label="Select All"
                        labelPlacement='end'
                        control={
                          <Checkbox
                            name="selectall"
                          />
                        }
                        sx={{ fontSize: '1rem' }}
                      />
                    </FormGroup>
                  </FormControl>
            </Box>
          </Grid> 
          </Grid>
          </Box>
           </Grid>
            



            <Grid item xs={12} md={6}>
                <Box sx={{border:'1px solid #ddd',padding:'10px',marginBottom:'10px'}}>
                    <Grid>
                       
            <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <RadioGroup row value={labno} onChange={(e) => setLabno(e.target.value)}>
                    <FormControlLabel
                      value="Lab Collection"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Lab Collection</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                      <FormControlLabel
                      value="Lab Collection"
                      control={<Radio size="small" />}
                      label={<Typography variant="body2">Lab Collection</Typography>}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                    />
                    
                  </RadioGroup>
                  
                </FormControl>
              </Grid> 
                    </Grid>
                </Box>
            <Box sx={{ border: '1px solid #ddd', padding: '10px',marginBottom:'10px' }}>
            <Grid container spacing={2}>
          <Grid item xs={12}>
               <TextField
               id='bank'
                    label="Bank"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{ style: { fontSize: '1rem' } }}
                  />
          </Grid>
          <Grid item xs={6} >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                id="cheqno"
                label="Cheq.No"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '1rem' } }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
              <TextField
                id="cheqdate"
                label="Cheq.Date"
                variant="outlined"
                size="small"
                type='date'
                fullWidth
                InputLabelProps={{ shrink:true, style: { fontSize: '1rem' } }}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
            id='narration'
            label='Narration'
            variant='outlined'
            size='small'
            InputLabelProps={{style:{fontSize:'1rem'}}}
            />
          </Grid>
          
            </Grid>
            </Box>
            </Grid>
   {/* <Grid item xs={6}>
   <Box sx={{ display: 'flex', alignItems: 'center' }}>
   <TextField
                id="amount"
                label="Amount"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{  style: { fontSize: '1rem' } }}
              />
              </Box>
   </Grid> */}
            {/* <Grid item xs={12}> */}
                {/* <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}> */}
                  {/* <Table stickyHeader aria-label="sticky table"> */}
                    {/* <TableHead> */}
                      {/* <TableRow> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>SlNo</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Lab</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Date</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Select</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Patient</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Amount</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Balance</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding: '8px' }}>Allocated.Amt</TableCell> */}
                        {/* <TableCell sx={{ border: '1px solid #dddddd', background: '#3095E5 ', fontSize: '1rem', padding:'8px' }}>Current.Bal</TableCell> */}
                      {/* </TableRow> */}
                    {/* </TableHead> */}
                    {/* <TableBody> */}
                        {/* <TableRow> */}
                          {/* <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', fontSize: '1rem', padding: '8px' }}></TableCell> */}
                        {/* </TableRow> */}
                      
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
                    {/* </TableBody> */}
                  {/* </Table> */}
                {/* </TableContainer> */}
                {/* <Box display="flex" justifyContent="flex-end" mt={2}>
        <Grid container spacing={2} style={{ maxWidth: '600px' }}>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.amount}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Amount"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.balance}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Balance"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.allocatedAmt}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Allocated Amt"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              size="small"
              // value={totals.currentBal}
              InputProps={{ readOnly: true }}
              fullWidth
              label="Total Current Bal"
            />
          </Grid>
        </Grid>
      </Box> */}
              {/* </Grid> */}
            
        </Grid>
    </CCardBody>
  )
}

export default BillWiseArea;