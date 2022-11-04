
import { Avatar, Button, CardMedia, Divider, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { GlobalInfo } from "../Pages/ConnectionProfile"
import { useContext } from 'react';
function ConnnectionsProfileComponent() {
  const { userConnection } = useContext(GlobalInfo);
  // console.log("user data arha h kya connection profile me", userConnection)
  return (
    <Box>
      <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "", mt: "", alignItems: "center", }} >
          <Box>
            <CardMedia
              position="absolute"
              component="img"
              height="300"
              src="https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Connection profile"
            /><Box>
              <Avatar sx={{
                // width: "15vw", height: "15vw", borderStyle: "",
                width: 150, height: 150,
                position: "absolute",
                left: "7%",
                top: "270px",
                zindex: -1,
                border: "3px solid white",
                variant: "danish"
              }}
                src={userConnection.profilePhoto || require('../public/static/assets/images/placeholder3.png')} />

            </Box>

          </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ border: "", mx: "3%" }}>
          <Box sx={{ display: "flex", justifyContent: "right", border: "", ml: "" }}>
            <Button sx={{ display: "flex", alignItem: "left", }}>
              <Typography sx={{ color: "black", backgroundColor: "green", borderRadius: "5px", p: "5px", color: "white" }}>
                Connected
              </Typography>
            </Button>
          </Box>

        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6} sx={{ border: "1 px solid black", mx: "3%", }}>
          <Typography sx={{ display: "flex", justifyContent: "", mt: "2%", fontWeight: "bold", fontSize: "1.3rem", }}>
            {userConnection.firstName},{userConnection.lastName}

          </Typography>
          <Typography sx={{}}>
            {userConnection.schoolName}
          </Typography>
        </Grid>

        <Grid item lg={12} md={12} ms={12} mx={12} sx={{ mt: "2%", }}>
          <Divider color="black" sx={{}} />

        </Grid>


      </Grid>

    </Box>


  )
}

export default ConnnectionsProfileComponent