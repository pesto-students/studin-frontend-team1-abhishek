import { Avatar, CardMedia, Grid, Typography } from '@mui/material'

import Dialog from '@mui/material/Dialog';

import EditProfileCom from './EditProfileComponent';

import { Box } from '@mui/system'
import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';


function EditIconCom() {
  const [open, setOpen] = React.useState(false);
  // const [selectedValue, setSelectedValue] = React.useState(true);
  const handleClose = () => {
    setOpen(false)
  };
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
              alt="Paella dish"
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
                src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />

            </Box>

          </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ border: "", mx: "3%" }}>
          <Box sx={{ display: "flex", justifyContent: "right", border: "", }}>
            <EditIcon sx={{ p: 1, fontSize: "30px", mr: "", mt: 1, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%" }}
              onClick={() => setOpen(true)}
            />
          </Box>

        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6} sx={{ border: "", mx: "3%", }}>

          <Typography sx={{ display: "flex", justifyContent: "", mt: "2%", fontWeight: "bold", fontSize: "1.3rem", }}>
            Danish Khan
          </Typography>
          <Typography sx={{}}>
            K.G.M National High School
          </Typography>
        </Grid>
        {/* <Grid item lg={9} md={8} sm={7} xs={5} mt={2} sx={{ border: "", mx: "" }}>
              <Box sx={{ display: "flex", justifyContent: "right", }}>
                <EditIcon sx={{ p: 1, fontSize: "30px", mr: "", mt: 2, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%" }}
                  onClick={() => setOpen(true)}
                />
              </Box>
              <Typography sx={{ display: "flex", justifyContent: "right", mr: "", pr: "" }}>
                <IconButton aria-label="add to favorites">
                  <Typography sx={{ color: theme.palette.common.black }} >
                    Edit
                  </Typography>
                </IconButton>
              </Typography>
            </Grid> */}
        <Grid item lg={12} md={12} ms={12} mx={12} sx={{ mt: "2%", }}>
          <Divider color="black" sx={{}} />

        </Grid>


      </Grid>
      <Dialog open={open}
        onClose={handleClose}>
        <EditProfileCom />
      </Dialog>
    </Box>
  )
}

export default EditIconCom