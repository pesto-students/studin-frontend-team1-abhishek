import React from 'react';
import { useState, useEffect, useMemo } from "react";
import Navbar from '../Components/Navbar'
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import { Box, Stack, styled } from "@mui/material";
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
  const [postsCount, setPostsCount] = useState(0);
  // let profileDataMemoized = [];
  // let profileDataMemoized = useMemo(() => getProfileData(), [profileData]);

  const StyledCircularProgress = styled(CircularProgress)(({theme}) => ({
    size:"50",
    flex: "1", 
    marginTop: "40vh",
    marginLeft: "48vw",
    marginBottom: "50vh",
    justifyContent: 'center',
    alignItems:'center'
  }))
  const StyledEmptySpace = styled("div")(({theme})=>({
    size:"50",
    flex: "1", 
    marginTop: "40vh",
    marginLeft: "48vw",
    marginBottom: "50vh",
    justifyContent: 'center',
    alignItems:'center'
  }))
  
  try {
    const fetchPostData = async() => {
      const url =  process.env.REACT_APP_API_URL + "/api/v1/posts/";
      let accessToken = localStorage.getItem('accessToken');
      let userEmail = localStorage.getItem('userEmail');
      const result = await fetch(url, {
        method: 'POST',
        // withCredentials: true,
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
        },

        body: JSON.stringify({ email: userEmail })

        
      })
      const jsonResult = await result.json()
      console.log(jsonResult)
      if (jsonResult.data){
        setPostsCount(jsonResult.data.length);
        console.log('count',jsonResult.data.length);
      }
      setPostsData([jsonResult]);    
    }

    const getProfileData = async() => {
      const url =  process.env.REACT_APP_API_URL + "/api/v1/profile/profileSummary/";
      let accessToken = localStorage.getItem('accessToken');
      let userEmail = localStorage.getItem('userEmail');
      // console.log(auth.user);
      const result = await fetch(url, {
        method: 'POST',
        // withCredentials: true,
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ email: userEmail })  
      })

      const jsonResult = await result.json();
      console.log(jsonResult);
      setProfileData(jsonResult.data);
      return jsonResult.data;
    }

    const getTop5Users = async() => {
      const url =  process.env.REACT_APP_API_URL + "/api/v1/connections/allUsers/";
      let accessToken = localStorage.getItem('accessToken');
      const result = await fetch(url, {
        method: 'GET',
        // withCredentials: true,
        // credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${accessToken}`
        },
      })

      const jsonResult = await result.json()
      console.log("Getting all users data");
      setAllUsersData(jsonResult.data);
    }

    useEffect(  () => {
      try {
        console.log("useEffect hitting infinitely ...");
        if (profileData.length === 0){
          setLoading(true);
          setTimeout(() => {
            getProfileData();
            fetchPostData();
            getTop5Users(); 
          }, 3000);
          setLoading(false);
        }      
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }, []);

  } catch (error) {
    console.log(error)
    console.log("Error while fetching posts data")
  }
  
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
    <Navbar profileData={profileData}/>
    <MyErrorBoundary>
      { loading ? 
      <StyledCircularProgress />
      // <CircularProgress size={50} sx={{flex: 1, marginTop:"40vh", marginLeft: "48vw",
      //   marginBottom: "50vh",justifyContent: 'center',alignItems:'center'}} /> 
        :  
        <Stack direction="row" spacing={0.1} justifyContent="space-between">
          {profileData ? <Sidebar setMode={setMode} mode={mode} profileData={profileData} /> : <StyledEmptySpace>Empty sidebar</StyledEmptySpace> }
          <Feed postsData={postsData} profilePhoto={profileData.profilePhoto} postsCount={postsCount}/>
          <Rightbar currentUser={profileData.email} allUsersData={allUsersData} />
        </Stack>
      }
    </MyErrorBoundary>
  </Box>
  )
}

export default Dashboard;