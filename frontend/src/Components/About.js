import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Editprofilepage from './EditIcon'
import Navbar from './Navbar'

const About = () => {
  return (

    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#F3F2EF'
      }}>


      <Box sx={{ border: "ridge", bgcolor: "white", mx: "10%" }}>
        <Box sx={{ mx: "2%", my: "2%", }}>
          <Grid container sx={{ border: "", }}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ bgcolor: "#F3F2EF", my: "1%", borderRadius: "10px", border: "ridge" }}>
              <Typography sx={{ ml: "2%" }}>
                Name : Danish Viquar Khan
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ bgcolor: "#F3F2EF", mx: "", my: "1%", borderRadius: "10px", border: "ridge" }}>
              <Typography sx={{ ml: "2%" }} >
                School  : K.G.M National High School
              </Typography>

            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ bgcolor: "#F3F2EF", mx: "", my: "1%", borderRadius: "10px", border: "ridge" }}>
              <Typography sx={{ ml: "2%" }}>
                College  : D.N.Patel College of Engineering Shahada
              </Typography>

            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ bgcolor: "#F3F2EF", mx: "", my: "1%", borderRadius: "10px", border: "ridge" }}>
              <Typography sx={{ ml: "2%" }}>
                Intrest :
              </Typography>

            </Grid>
          </Grid>
        </Box>

      </Box>

    </Box>
  )
}

export default About
{/* <Box sx={{ border: "ridge", bgcolor: "white", width: "100%" }}> */ }


