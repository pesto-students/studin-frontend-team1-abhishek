
import { Box } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';
// import TabComponent from '../Components/TabComponent';
import Navbar from '../Components/Navbar';
import ConnnectionsProfileComponent from '../Components/ConnnectionsProfileComponent';
import ConnectionsTab from "../Components/ConnectionsTab"
import { useParams } from 'react-router-dom';
export const GlobalInfo = createContext();
const ConectionProfile = () => {
  const [connection, setConnection] = useState('');
  const { id } = useParams()
  const getconnectionsdetails = async () => {
    const res = await fetch(process.env.REACT_APP_API_URL + `/api/v1/profile/connection/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include"
    });

    const data = await res.json();
    // console.log(data, "single connection aarha h")
    setConnection(data)

    // console.log(danish, "danish profile page m aarha h ");
  }
  useEffect(() => {
    getconnectionsdetails()
  }, [])
  console.log(connection)

  return (
    <GlobalInfo.Provider value={{ userConnection: connection }}>
      <Box sx={{
        height: '100%',
        width: '100%',
        bgcolor: "primary.main"
      }}>
        <Navbar />
        <Box sx={{ border: 1, mx: "5%", mt: "2%", bgcolor: "white" }}>
          <ConnnectionsProfileComponent />
          <ConnectionsTab />
        </Box>
      </Box>
    </GlobalInfo.Provider>

  )
}

export default ConectionProfile