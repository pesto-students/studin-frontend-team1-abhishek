
import Navbar from '../Components/Navbar'
import { createContext, useEffect, useState } from 'react';
import AllConnectionsComponent from '../Components/AllConnectionsComponent';

import { Box } from '@mui/material';
export const GlobalInfo = createContext();
export default function AllConnections() {

  const [danish, setDanish] = useState([]);
  const getdatabuy1 = async () => {
    const res = await fetch("http://localhost:4000/api/v1/profile/allConnections", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include"
    });

    const data = await res.json();

    setDanish(data)
  }
  useEffect(() => {
    getdatabuy1();
  }, []);

  return (
    <GlobalInfo.Provider value={{ userDanish: danish }}>
      <Box sx={{
        height: '100%',
        width: '100%',
        bgcolor: "primary.main"


      }}>
        <Navbar />
        <Box sx={{ border: "", mx: "5%", mt: "2%", bgcolor: "white" }}>

          <AllConnectionsComponent />
        </Box>

      </Box>
    </GlobalInfo.Provider>

  )
}
