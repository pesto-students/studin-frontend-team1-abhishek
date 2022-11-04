import React from 'react'
import { Avatar, Box, Grid, Typography, } from '@mui/material'

import Divider from '@mui/material/Divider';
import { GlobalInfo } from "../Pages/ConnectionProfile"
import { useContext } from 'react';

const ConnectionsConnection = () => {
  const { userConnection } = useContext(GlobalInfo);
  console.log(" connections data arha h kya", userConnection)
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
    }}>
      <>
        {
          userConnection.connections.map((item) =>
            <Grid container >
              <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "", alignItems: "center", }} >
                <Grid container sx={{ bgcolor: "white", }} >

                  <Box sx={{ border: "", width: "100%", mb: "1%", mx: "" }} >

                    <Grid item lg={12} md={12} sm={12} xs={12} >

                      <Box sx={{ display: "flex", m: "1%" }}>

                        <Avatar sx={{ width: "7vw", height: "7vw", }} src={item.profilePhoto} />
                        <Box sx={{ width: "100%" }}>
                          <Typography sx={{ border: "", fontSize: "15px", ml: "2%", mt: "1%", fontWeight: "bold" }}>
                            {item.firstName} {item.lastName}
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
        {/* <Link sx={{ ml: "2%" }} href="#">See All Connections</Link> */}
      </>
    </Box>
  )
}

export default ConnectionsConnection