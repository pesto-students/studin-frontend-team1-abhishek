import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../Components/Navbar'
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import { Box, Stack, createTheme } from "@mui/material";
import MyErrorBoundary from './ErrorBoundary';

const Dashboard = (props) => {
  const {mode, setMode} = props;
  const [profileData, setProfileData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpqYWdhbm5uQGdtYWlsLmNvbSIsImlhdCI6MTY2NTQxNjcyOSwiZXhwIjoxNjY1Njc1OTI5fQ.5R8X2u3SB0G7epcnBstAPEpRjNnWQWwbKwZpQpqPO3c"
  
  try {
    const fetchPostData = async() => {
      const url = "http://localhost:4000/api/v1/posts/";
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

    const getProfileData = async() => {
      const url = "http://localhost:4000/api/v1/profile/profileSummary/";
      const bearer = 'Bearer ' + bearer_token;
      const result = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'jjagannn@gmail.com' })  
      })

      const jsonResult = await result.json()
      console.log(jsonResult);
      setProfileData(jsonResult.data);
    }

    useEffect(() => {
        getProfileData()
        fetchPostData()
      }, [])

  } catch (error) {
    console.log(error)
    console.log("Error while fetching posts data")
  }
  
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar profileData={profileData}/>
    <MyErrorBoundary>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode} profileData={profileData} />
      <Feed postsData={postsData} profilePhoto={profileData.profilePhoto} />
      <Rightbar />
    </Stack>
    </MyErrorBoundary>
  </Box>
  )
}

export default Dashboard;