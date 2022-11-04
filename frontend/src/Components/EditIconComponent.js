import { Avatar, CardMedia, Grid, Typography } from '@mui/material'

import Dialog from '@mui/material/Dialog';

import EditProfileCom from './EditProfileComponent';

import { Box } from '@mui/system'
import React from 'react'

import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import { GlobalInfo } from "../Pages/ProfilePage"
import { useContext } from 'react';

function EditIconComponent(props) {

  const {updateProfileFunc} = props;
  const { userdata } = useContext(GlobalInfo);
  console.log("user data arha h kya", userdata)
  const [open, setOpen] = React.useState(false);
  console.log(userdata)
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
              src={userdata.coverPhoto || require('../public/static/assets/images/defaultCover.jpg')}
              alt="Add a cover photo using the Edit icon"
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
                src={userdata.profilePhoto}
              // src='https://images.pexels.com/photos/1243046/pexels-photo-1243046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              />

            </Box>


          </Box>
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} sx={{ border: "", mx: "3%" }}>
          <Box sx={{ display: "flex", justifyContent: "right", border: "", }}>
            <EditIcon sx={{ p: 1, fontSize: "40px", mr: "", mt: 1, cursor: "pointer", "&:hover": { bgcolor: "lightgray" }, borderRadius: "50%" }}
              onClick={() => setOpen(true)}
            />
          </Box>

        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6} sx={{ border: "", mx: "3%", }}>

          <Typography sx={{ display: "flex", justifyContent: "", mt: "2%", fontWeight: "bold", fontSize: "1.3rem", }}>
            {userdata.firstName} {userdata.lastName}
          </Typography>
          <Typography sx={{}}>
            {userdata.schoolName}
          </Typography>
        </Grid>

        <Grid item lg={12} md={12} ms={12} mx={12} sx={{ mt: "2%", }}>
          <Divider color="black" sx={{}} />

        </Grid>

      </Grid>
      <Dialog open={open}
        onClose={handleClose}>
        <EditProfileCom handleClose={handleClose} updateProfileFunc={updateProfileFunc} />
      </Dialog>
    </Box>
  )
}

export default EditIconComponent