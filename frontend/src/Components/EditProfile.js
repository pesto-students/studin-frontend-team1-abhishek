import { Avatar, Button, createTheme, Grid, IconButton, responsiveFontSizes, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import CameraAltIcon from '@mui/icons-material/CameraAlt';
let theme = createTheme();
theme = responsiveFontSizes(theme);

const EditProfile = () => {
  return (
    <Box>
      <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "10%", alignItems: "center", border: "ridge" }} >
          <Grid container sx={{ bgcolor: "white", }} >
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ border: "ridge", bgcolor: "#BDBDBD", }}>
              <Box sx={{ display: "flex", justifyContent: "right", my: "3%" }}>
                <IconButton aria-label="Edit" >
                  <CameraAltIcon sx={{ p: 1, fontSize: "50px", mr: 2, mt: 2, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%" }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={6} mt={2} border="" >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: "10vw", height: "10vw", borderStyle: "dotted" }}
                  src=''>
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
                  color="success"
                  size='small'
                  sx={{ bgcolor: "#F3F2EF", width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }}>
              <Typography >
                <TextField label='Last Name'
                  color="success"
                  size='small'
                  sx={{ bgcolor: "#F3F2EF", width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }}>
              <Typography>
                <TextField label='School Name'
                  color="success"
                  size="small"
                  sx={{ bgcolor: "#F3F2EF", width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }} >
              <Typography >
                <TextField label='College Name'
                  color="success"
                  size="small"
                  sx={{ bgcolor: "#F3F2EF", width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }} >
              <Typography >
                <TextField label='Interests'
                  color="success"
                  size="small"
                  sx={{ bgcolor: "#F3F2EF", width: "50%" }}
                />
              </Typography>

            </Grid>

          </Grid>
          <Box sx={{ display: "flex", justifyContent: "right", mr: "2%", mb: "2%" }}>

            <Button variant="contained">Save</Button>
          </Box>

        </Grid>

      </Grid>
    </Box>
  )
}

export default EditProfile