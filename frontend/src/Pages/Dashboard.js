import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../Components/Navbar'
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import { Box, Stack, createTheme } from "@mui/material";

const Dashboard = (props) => {
  const {mode,setMode} = props;
  const [postsData, setPostsData] = useState([])
  const bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNyN3N3YWdoQGdtYWlsLmNvbSIsImlhdCI6MTY2NDgyNTg3MywiZXhwIjoxNjY1MDg1MDczfQ.9pCm-pcOAJ3N62z3ycdIF15ePG7P9rWcX8FtX3pD7Kg";
  console.log("Inside dashboard comp")
  try {
    
  const fetchData = async() => {
    const url = "http://localhost:9000/api/v1/posts/";
    const bearer = 'Bearer ' + bearer_token;
    const result = await fetch(url, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'test@gmail.com' })
      
    })
    const jsonResult = await result.json()
    setPostsData([jsonResult]);    
  }

  useEffect(() => {
      fetchData()
    }, [])
    console.log(postsData)
  } catch (error) {
    console.log(error)
    console.log("Error at useEffect")
  }
  
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar />
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
      <Feed postsData={postsData}/>
      <Rightbar />
    </Stack>
  </Box>
  )
}

export default Dashboard;