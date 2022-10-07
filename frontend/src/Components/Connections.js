
import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Connections = () => {
  return (
    <Box sx={{
      height: '100%',
      width: '100%',
      backgroundColor: '',


    }}>
      <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "10%", alignItems: "center", border: "ridge" }} >
          <Grid container sx={{ bgcolor: "white", }} >
            <Box sx={{ border: "ridge", width: "100%", borderRadius: "15px", bgcolor: "#F3F2EF", mb: "1%", mx: "1%", mt: "1%" }} >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ display: "flex", m: "1%" }}>
                  <Avatar sx={{ width: "7vw", height: "7vw", }} src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ border: "", fontSize: "15px", ml: "2%", mt: "1%" }}>
                      Danish Viquar Khan
                    </Typography>
                    <Typography sx={{ fontSize: "12px", ml: "2%" }}>
                      K.G.M National High School
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Box>

            <Box sx={{ border: "ridge", width: "100%", borderRadius: "15px", bgcolor: "#F3F2EF", mb: "1%", mx: "1%" }} >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ display: "flex", m: "1%" }}>
                  <Avatar sx={{ width: "7vw", height: "7vw", }} src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ border: "", fontSize: "15px", ml: "2%", mt: "1%" }}>
                      Danish Viquar Khan
                    </Typography>
                    <Typography sx={{ fontSize: "12px", ml: "2%" }}>
                      K.G.M National High School
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Box>

            <Box sx={{ border: "ridge", width: "100%", borderRadius: "15px", bgcolor: "#F3F2EF", mb: "1%", mx: "1%" }} >
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{ display: "flex", m: "1%" }}>
                  <Avatar sx={{ width: "7vw", height: "7vw", }} src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ border: "", fontSize: "15px", ml: "2%", mt: "1%" }}>
                      Danish Viquar Khan
                    </Typography>
                    <Typography sx={{ fontSize: "12px", ml: "2%" }}>
                      K.G.M National High School
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Box>

            <Box sx={{ border: "ridge", width: "100%", borderRadius: "15px", bgcolor: "#F3F2EF", mb: "1%", mx: "1%" }} >
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <Box sx={{ display: "flex", m: "1%" }}>
                  <Avatar sx={{ width: "7vw", height: "7vw", }} src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                  <Box sx={{ width: "100%" }}>
                    <Typography sx={{ border: "", fontSize: "15px", ml: "2%", mt: "1%" }}>
                      Danish Viquar Khan
                    </Typography>
                    <Typography sx={{ fontSize: "12px", ml: "2%" }}>
                      K.G.M National High School
                    </Typography>
                  </Box>

                </Box>
              </Grid>
            </Box>
            <Link sx={{ ml: "2%" }} href="#">See All Connections</Link>
          </Grid>

        </Grid>
      </Grid>

    </Box>
  )
}

export default Connections