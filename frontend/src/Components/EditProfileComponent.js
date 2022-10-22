import { Avatar, Button, createTheme, Grid, IconButton, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import theme from "../Theme/theme"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { GlobalInfo } from "../Pages/ProfilePage";
import { useContext } from 'react';
import { useState } from 'react';
let theme = createTheme();

const EditProfileCom = () => {

  const { userdata } = useContext(GlobalInfo);
  const [imageFile, setImageFile] = useState("" || userdata.profilePhoto);
  const [cover, setCover] = useState("");
  const [firstName, setFirstName] = useState("" || userdata.firstName);
  const [lastName, setLastName] = useState("" || userdata.lastName);
  const [schoolName, setSchoolName] = useState("" || userdata.schoolName);
  const [collegeName, setCollegeName] = useState("" || userdata.collegeName);
  const [interests, setInterests] = useState([] || userdata.interests[0]);


  const handleImageFileChange = (e) => {
    const [file] = e.target.files;
    setImageFile(file);
    console.log(imageFile);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    // const email = get Current User's email id
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('schoolName', schoolName);
    formData.append('collegeName', collegeName);
    formData.append('interests', interests);
    try {
      const url = "http://localhost:4000/api/v1/profile/profileDetails"
      let res = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",

        body: formData,

      });
      const resJson = await res.json();
      console.log(resJson);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ bgColor: "", mx: "10%", alignItems: "center", border: "ridge" }} >
          <Grid container sx={{}} >
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ border: "ridge", bgColor: "" }}>
              <Box sx={{ display: "flex", justifyContent: "right", my: "3%" }}>
                <IconButton aria-label="Edit" >
                  <CameraAltIcon sx={{ p: 1, fontSize: "50px", mr: 2, mt: 2, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%" }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={6} mt={2} border="" >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: "8vw", height: "8vw", }}
                  src={imageFile}>

                  <CameraAltIcon sx={{ p: 1, fontSize: "40px", mr: 1, mt: 1, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%", }} />
                </Avatar>
              </Box>
              <Box sx={{ textAlign: "center", justifyContent: "center" }}>
                <ThemeProvider theme={theme}>
                  <Typography gutterBottom sx={{ fontWeight: "bold", fontFamily: "", }} >
                    User Name
                  </Typography>
                  <Typography >
                    School Name
                  </Typography>
                </ThemeProvider>
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
    </Box>
  )
}

export default EditProfileCom