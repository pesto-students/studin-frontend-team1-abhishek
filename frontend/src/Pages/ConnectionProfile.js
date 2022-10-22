
import { Box } from '@mui/material';
import React from 'react';
import TabComponent from '../Components/TabComponent';
import Navbar from '../Components/Navbar';
import ConnnectionsProfileComponent from '../Components/ConnnectionsProfileComponent';


const ConectionProfile = () => {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      bgcolor: "primary.main"


    }}>
      <Navbar />
      <Box sx={{ border: 1, mx: "5%", mt: "2%", bgcolor: "white" }}>
        <ConnnectionsProfileComponent />
        <TabComponent />
      </Box>

    </Box>

  )
}

export default ConectionProfile