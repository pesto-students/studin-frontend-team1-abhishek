import React from 'react';
import { useState, useEffect } from "react";
import Navbar from '../Components/Navbar'
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import { Box, Stack } from "@mui/material";
import MyErrorBoundary from './ErrorBoundary';
import CircularProgress from '@mui/material/CircularProgress';

const Dashboard = (props) => {
  const {mode, setMode} = props;
  const [profileData, setProfileData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [allUsersData, setAllUsersData] = useState([])
  const [loading, setLoading] = useState(false);
  const bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpqYWdhbm5uQGdtYWlsLmNvbSIsImlhdCI6MTY2NTc2NzI2MCwiZXhwIjoxNjY2MDI2NDYwfQ.tMqDtRv5iaISHErExyV3Vz3er3-nk-gxf-RVuS-DxPg"

  
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

        body: JSON.stringify({ email: 'jjagannn@gmail.com' })
        
      })
      const jsonResult = await result.json()
      console.log(jsonResult)
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

    const getAllUsers = async() => {
      const url = "http://localhost:4000/api/v1/connections/allUsers/";
      const bearer = 'Bearer ' + bearer_token;
      const result = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
      })

      const jsonResult = await result.json()
      console.log("Getting all users data");
      // console.log(typeof jsonResult);
      // console.log(jsonResult);
      // jsonResult.data.map((data)=>{
      //   console.log(typeof data);
      //   console.log(data);
      // })
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