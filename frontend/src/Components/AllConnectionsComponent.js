import React from 'react'
import { GlobalInfo } from "../Pages/AllConnections"
import { useContext } from 'react';
import { Avatar, Box, Divider, Grid, Typography } from '@mui/material';

const AllConnectionsComponent = () => {
  const { userDanish } = useContext(GlobalInfo);
  console.log("  Allconnections data arha h kya", userDanish)
  return (
    // <div>Hello there</div>
    <Box sx={{
      height: '100%',
      width: '100%',
    }}>
      <>
        {
          userDanish.allconnections.connections.map((item) =>
            <Grid container >
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "", alignItems: "center", }} >
                <Grid container sx={{ bgcolor: "white", }} >

                  <Box sx={{ border: "", width: "100%", mb: "1%", mx: "" }} >

                    <Grid item lg={12} md={12} sm={12} xs={12} >

                      <Box sx={{ display: "flex", m: "1%", cursor: "pointer" }} >

                        <Avatar sx={{ width: "7vw", height: "7vw", }} src={item.profilePhoto} />
                        <Box sx={{ width: "100%" }}>
                          <Typography sx={{ border: "", fontSize: "15px", ml: "2%", mt: "1%", fontWeight: "bold" }}>
                            {item.firstName}  {item.lastName}
                          </Typography>
                          <Typography sx={{ fontSize: "12px", ml: "2%" }}>
                            {item.schoolName}
                          </Typography>
                        </Box>
                      </Box>

                      <Divider sx={{ borderColor: "secondary.light", ml: "11%" }} />
                    </Grid>
                  </Box>

                </Grid>
              </Grid>

            </Grid>
          )
        }
        {/* <div sx={{ ml: "2%" }} onClick={() => navigate(`/connections`)}>See All Connections</div> */}
      </>
    </Box>

  )
}

export default AllConnectionsComponent