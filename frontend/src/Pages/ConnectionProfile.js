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
      backgroundColor: '#F3F2EF'
    }}>
      <Navbar />
      <FriendsProfile />
      <Tab1 />
      <Toolbar sx={{
        flexDirection: "column", mx: "10%", border: "ridge", bgcolor: "white", mt: "2 % ",
      }}>
        <Card1 />
      </Toolbar>

    </Box>
  )
}

export default ConectionProfile