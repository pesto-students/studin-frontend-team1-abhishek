
import { Avatar, CardMedia, createTheme, Grid, IconButton, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
let theme = createTheme();
theme = responsiveFontSizes(theme);

const heading = "Danish Khan";
const text = "K.G.M National high School Shahada";

function Editprofilepage() {
  return (
    <Box>
      <Grid container >
        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mx: "10%", mt: "7%", alignItems: "center", border: "ridge" }} >
          <Grid container sx={{ bgcolor: "white", }} >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box >
                <CardMedia
                  component="img"
                  height="194"
                  src="https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Paella dish"
                />
              </Box>

            </Grid>
            <Grid item lg={3} md={3} sm={4} xs={6} mt={2} border="" >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar sx={{ width: "10vw", height: "10vw", borderStyle: "dotted", }} src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />

              </Box>
              <Box sx={{ textAlign: "center", justifyContent: "center" }}>
                <ThemeProvider theme={theme}>
                  <Typography gutterBottom sx={{ fontWeight: "bold", fontFamily: "sans-serif", }} >{heading}

                  </Typography>
                  <Typography variant='subtitle' gutterBottom >

                    {text}

                  </Typography>
                </ThemeProvider>
              </Box>


            </Grid>
            <Grid item lg={9} md={9} sm={8} xs={6} mt={2} border="">
              <Box sx={{ display: "flex", justifyContent: "right", }}>
                <EditIcon sx={{ p: 1, fontSize: "30px", mr: 2, mt: 2, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%" }} />
              </Box>
              <Typography sx={{ display: "flex", justifyContent: "right", mr: 1, pr: 1 }}>
                <IconButton aria-label="add to favorites">
                  <Typography>
                    Edit
                  </Typography>
                </IconButton>
              </Typography>
            </Grid>
          </Grid>

        </Grid>

      </Grid>
    </Box>
  )
}

export default Editprofilepage