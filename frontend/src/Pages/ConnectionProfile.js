import { Box, } from '@mui/material'
import React from 'react'
import TabCom from '../Components/TabComponent'
import Navbar from '../Components/Navbar'
import ConectionProfileCom from "../Components/ConnnectionsProfileComponent"


const ConectionProfile = () => {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      bgcolor: "primary.main"


    }}>
      <Navbar />
      <Box sx={{ border: 1, mx: "5%", mt: "2%", bgcolor: "white" }}>
        <ConectionProfileCom />
        <TabCom />
      </Box>

    </Box>

  )
}

export default ConectionProfile