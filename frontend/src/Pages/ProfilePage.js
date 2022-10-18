import EditIconCom from "../Components/EditIconComponent"
import TabCom from "../Components/TabComponent"
// import PopUp from '../Components/PopUp'
import React from 'react';
import Navbar from '../Components/Navbar';
import Editprofilepage from "../Components/EditIcon";
import Tab1 from "../Components/Tab1";
import { Box, Toolbar, } from "@mui/material";

export default function ProfilePage() {
  return (
    <div>
      <Box sx={{
        height: '100%',
        width: '100%',
        bgcolor: "primary.main"

      }}>
        <Navbar />
        <Box sx={{ border: "", mx: "5%", mt: "2%", bgcolor: "white" }}>
          <EditIconCom />
          <TabCom />
        </Box>
      </Box>
    </div>
  )
}
