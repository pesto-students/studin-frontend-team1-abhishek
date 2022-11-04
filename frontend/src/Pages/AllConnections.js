
import Navbar from '../Components/Navbar'
import { createContext, useEffect, useState } from 'react';
import AllConnectionsComponent from '../Components/AllConnectionsComponent';

import { Box } from '@mui/material';
export const GlobalInfo = createContext();
export default function AllConnections() {

  const [danish, setDanish] = useState([]);

  const getdatabuy1 = async () => {
    let accessToken = localStorage.getItem('accessToken');
    console.log('accessToken from local storage --> ',accessToken);

    const res = await fetch(process.env.REACT_APP_API_URL + "/api/v1/profile/allConnections", {
      method: "GET",
      headers: {
        // Accept: "application/json",
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      },
      // credentials: "include"
    });

    const data = await res.json();
    console.log("allConns before setting -->");
    setDanish(data)
  }

  useEffect(() => {
    // if(danish.length === 0){
      getdatabuy1();
    // }
  }, [danish]);

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
