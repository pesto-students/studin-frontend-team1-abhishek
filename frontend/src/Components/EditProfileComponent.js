import { Avatar, Button, CardMedia, createTheme, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'

import { GlobalInfo } from "../Pages/ProfilePage";
import { useContext } from 'react';
import { useState } from 'react';
let theme = createTheme();

const EditProfileCom = () => {

  const { userdata } = useContext(GlobalInfo);
  const userinterest = userdata.interests.split(",")
  const [profilePhoto, setProfilePhoto] = useState("" || userdata.profilePhoto);
  const [coverPhoto, setCoverPhoto] = useState("" || userdata.coverPhoto);
  const [firstName, setFirstName] = useState("" || userdata.firstName);
  const [lastName, setLastName] = useState("" || userdata.lastName);
  const [schoolName, setSchoolName] = useState("" || userdata.schoolName);
  const [collegeName, setCollegeName] = useState("" || userdata.collegeName);
  const [interests, setInterests] = useState(userinterest);
  const [preview, setPreview] = useState("");
  const [tempProfile, setTempProfile] = useState("");
  const [preview1, setPreview1] = useState("");
  const [tempCover, setTempCover] = useState("");

  // console.log(userdata)
  console.log(interests);



  const handleprofilePhotoChange = (e) => {
    const [file] = e.target.files;
    setProfilePhoto(file);
    setTempProfile(file);
    console.log(profilePhoto);
  };


  const handlecoverPhotoChange = (e) => {
    const [file1] = e.target.files;
    setCoverPhoto(file1);
    setTempCover(file1)
    console.log(coverPhoto);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    // const email = get Current User's email id
    const formData = new FormData();

    formData.append('profilePhoto', profilePhoto);
    formData.append('coverPhoto', coverPhoto);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('schoolName', schoolName);
    formData.append('collegeName', collegeName);
    formData.append('interests', interests);
    try {

      const url =  process.env.REACT_APP_API_URL + "/api/v1/profile/profileDetails";
      let accessToken = localStorage.getItem('accessToken');
      let res = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
        // credentials: "include",
        body: formData,

      });
      const resJson = await res.json();
      console.log(resJson);

    } catch (err) {
      console.log(err);
    }
  };

  const profilePreview = () => {
    if (tempProfile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result)
      };
      reader.readAsDataURL(tempProfile);
    } else {
      setPreview(null);
    }
  }
  const coverPreview = () => {
    if (tempCover) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview1(reader.result)
      };
      reader.readAsDataURL(tempCover);
    } else {
      setPreview(null);
    }
  }

  useEffect(() => {
    profilePreview()
    coverPreview()
  }, [tempProfile, tempCover]);

  console.log(preview);
  // console.log(profilePhoto , coverPhoto);
  return (
    <Box>
      <form>
        <Grid container >
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ bgColor: "", mx: "10%", alignItems: "center", border: "ridge" }} >
            <Grid container sx={{}} >
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ border: "ridge", bgColor: "" }}>
                <Box sx={{ display: "flex", justifyContent: "right", my: "3%" }}>
                  <CardMedia
                    position="absolute"
                    component="img"
                    height="150"
                    src={preview1 ? preview1 : coverPhoto}
                    alt="Paella dish"
                  />
                </Box>
                <input onChange={handlecoverPhotoChange}
                  multiple={false} type="file" />
              </Grid>
              <Grid item lg={3} md={3} sm={4} xs={6} mt={2} border="" >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar sx={{ width: "8vw", height: "8vw", }}
                    src={preview ? preview : profilePhoto}
                  >
                  </Avatar>
                </Box>
                <Box sx={{ textAlign: "center", justifyContent: "center" }}>
                  <input onChange={handleprofilePhotoChange}
                    multiple={false} type="file" />
                </Box>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: "4%", mb: "2%", ml: "3%" }}>
                <Typography>

                  <TextField label='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    color="success"
                    bgColor="white"
                    size='small'
                    sx={{ width: "50%" }}
                    sccvsvsv
                  />
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%", color: "black" }}>
                <Typography >
                  <TextField label='Last Name'

                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    color="success"
                    size='small'
                    sx={{ width: "50%" }}
                  />
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }}>
                <Typography>
                  <TextField label='School Name'
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    color="success"
                    size="small"
                    sx={{ width: "50%" }}
                  />
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }} >
                <Typography >
                  <TextField label='College Name'
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    color="success"
                    size="small"
                    sx={{ width: "50%" }}
                  />
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }} >
                <Typography >
                  <TextField label='Interests'
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}


                    color="success"
                    size="small"
                    sx={{ width: "50%" }}
                  />
                </Typography>

              </Grid>

            </Grid>
            <Box sx={{ display: "flex", justifyContent: "right", mr: "2%", mb: "2%" }}>
              <Button variant="contained" sx={{ ml: "2%" }}
                onClick={handleSubmit}
              >Save</Button>

            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default EditProfileCom