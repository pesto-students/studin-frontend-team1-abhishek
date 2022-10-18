import TabCom from '../Components/TabComponent'
import ConectionProfileCom from "../Components/ConnnectionsProfileComponent"
import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Tab1 from '../Components/Tab1';
import Navbar from '../Components/Navbar';
import FriendsProfile from "../Components/FriendsProfile";
import Card1 from '../Components/Card1';

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