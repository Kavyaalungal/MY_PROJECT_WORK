import React from 'react'
import { Box, Grid,Grow,TextField } from '@mui/material'

function CashReceipt() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <TextField
            id='transno'
            label='Trans No'
            fullWidth
            size='small'
            variant='outlined'
            InputLabelProps={{  style: {fontSize:'1rem'}  }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
            id='date'
            label='Date'
            fullWidth
            size='small'
            type='date'
            variant='outlined'
             InputLabelProps={{shrink:true , style:{fontSize:'1rem'}}}
            />
        </Grid>
        <Grid item xs={12}>
            <Box></Box>
        </Grid>
    </Grid>
  )
}

export default CashReceipt