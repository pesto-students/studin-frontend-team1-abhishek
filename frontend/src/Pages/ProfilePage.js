import React from 'react'
import React from 'react'
import Navbar from './components/Navbar'
// import Card1 from "./components/card1"
import Editprofilepage from "./components/EditIcon"
import Tab1 from "./components/Tab1"
import { Box, Toolbar, } from "@mui/material"

export default function ProfilePage() {
  return (
    <div>
      <Box sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#F3F2EF'
      }}>
        <Navbar />
        <Editprofilepage />
        <Tab1 />
      </Box>
    </div>
  )
}
