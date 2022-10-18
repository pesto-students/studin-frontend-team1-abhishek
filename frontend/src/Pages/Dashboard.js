import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../Components/Navbar'
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import { Box, Stack } from "@mui/material";
import MyErrorBoundary from './ErrorBoundary';
import CircularProgress from '@mui/material/CircularProgress';
import { theme } from '../Theme/theme';
import { useAuth } from '../Components/Auth';

const Dashboard = (props) => {
  const {mode, setMode} = props;
  const auth = useAuth();
  const [profileData, setProfileData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [allUsersData, setAllUsersData] = useState([])
  const [loading, setLoading] = useState(false);
  
  try {
    const fetchPostData = async() => {
      const url = "http://localhost:3000/api/v1/posts/";
      const result = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ email: auth.user })

        
      })
      const jsonResult = await result.json()
      console.log(jsonResult)
      setPostsData([jsonResult]);    
    }

    const getProfileData = async() => {
      const url = "http://localhost:3000/api/v1/profile/profileSummary/";
      console.log(auth.user);
      const result = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: auth.user })  
      })

      const jsonResult = await result.json()
      console.log(jsonResult);
      setProfileData(jsonResult.data);
    }

    const getAllUsers = async() => {
      const url = "http://localhost:3000/api/v1/connections/allUsers/";
      const result = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
      })

      const jsonResult = await result.json()
      console.log("Getting all users data");
      setAllUsersData(jsonResult.data);
    }

    useEffect(  () => {
      try {
        setLoading(true);
        setTimeout(() => {
          getProfileData();
          fetchPostData();
          getAllUsers(); 
          setLoading(false);
        }, 3000);
        
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }, [])

  } catch (error) {
    console.log(error)
    console.log("Error while fetching posts data")
  }
  
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar profileData={profileData}/>
    <MyErrorBoundary>
      { loading ? <CircularProgress size={50} sx={{flex: 1, marginTop:"40vh", marginLeft: "48vw",
        marginBottom: "50vh",justifyContent: 'center',alignItems:'center'}} /> 
        :  
        <Stack direction="row" spacing={0.1} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} profileData={profileData} />
          <Feed postsData={postsData} profilePhoto={profileData.profilePhoto} />
          <Rightbar currentUser={profileData.email} allUsersData={allUsersData} />
        </Stack>
      }
    </MyErrorBoundary>
  </Box>
  )
}

export default Dashboard;