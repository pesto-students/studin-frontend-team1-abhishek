
import React, { useEffect, useState, createContext } from 'react';
import Navbar from '../Components/Navbar';
import TabComponent from "../Components/TabComponent";
import { Box } from "@mui/material";
import EditIconComponent from "../Components/EditIconComponent";
export const GlobalInfo = createContext();

export default function ProfilePage() {

  const [cartdata, setCartdata] = useState({});
  const getdatabuy = async () => {

    let accessToken = localStorage.getItem('accessToken');
    
    const res = await fetch( process.env.REACT_APP_API_URL + "/api/v1/profile/profileDetails", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
        // `Bearer ${}`: ,
      },
      // credentials: "include"
    });

    const data = await res.json();


    if (data) {
      setCartdata(data)


    } else {
      console.log("data cart main hain");

    }
    console.log(cartdata);

  };
  useEffect(() => {
    getdatabuy();
  }, []);
  return (
    <GlobalInfo.Provider value={{ userdata: cartdata }}>
      <Box sx={{
        height: '100%',
        width: '100%',
        bgcolor: "primary.main"

      }}>
        <Navbar />
        <Box sx={{ border: "", mx: "5%", mt: "2%", bgcolor: "white" }}>
          <EditIconComponent />
          <TabComponent />
        </Box>
      </Box>
    </GlobalInfo.Provider>

  )
}
