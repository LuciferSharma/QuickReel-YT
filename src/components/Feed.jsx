import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material'

const Feed = () => {
  return (
    <Stack 
    sx={{
      flexDirection: {
        sx: 'column', md: 'row'
      } }}>
        <Box sx={{
          height: {sx:'auto', md:'92vh'},
          borderRight: '1px solid #e3e3e3',
        }}>

        </Box>
    </Stack>
  )
}

export default Feed