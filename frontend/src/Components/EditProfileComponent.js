import { Avatar, Button, createTheme, Grid, IconButton, TextField, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
// import theme from "../Theme/theme"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
let theme = createTheme();



const EditProfileCom = () => {
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
                  color="success"
                  size='small'
                  sx={{ width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }}>
              <Typography>
                <TextField label='School Name'
                  color="success"
                  size="small"
                  sx={{ width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }} >
              <Typography >
                <TextField label='College Name'
                  color="success"
                  size="small"
                  sx={{ width: "50%" }}
                />
              </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ my: "1%", ml: "3%" }} >
              <Typography >
                <TextField label='Interests'
                  color="success"
                  size="small"
                  sx={{ width: "50%" }}
                />
              </Typography>

            </Grid>

          </Grid>
          <Box sx={{ display: "flex", justifyContent: "right", mr: "2%", mb: "2%" }}>


            <Button variant="contained">Cancel</Button>

            <Button variant="contained" sx={{ ml: "2%" }}>Save</Button>

          </Box>

        </Grid>

      </Grid>
    </Box>
  )
}

export default EditProfileCom