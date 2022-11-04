import { Avatar, Box, Divider, Switch, Typography } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = ({mode, setMode, profileData}) => {
  const {firstName, lastName, schoolName, profilePhoto, connections} = profileData;

  return (
    <Box bgcolor="primary.white" flex={1.5} ml={3} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      {/* <Typography variant='h6' fontWeight={100}>Sidebar</Typography> */}
      <Box position="fixed" width={200}>
        <List sx={{display:"flex",flexDirection:"column"}}>
          <ListItem disablePadding sx={{justifyContent: 'center'}}>
                <Avatar sx={{width: 150, height: 150}}>
                  <img src={profilePhoto || require('../public/static/assets/images/placeholder3.png')} height="100%" width="100%" alt="Profile icon" />
                  {/* <img src={require("../public/static/assets/images/sample-profile-icon.jpg")} height="120%" width="120%" alt="Profile icon" /> */}
                </Avatar>
          </ListItem>
          <ListItem disablePadding sx={{textAlign: "center"}}>
            <ListItemText primary={`${firstName} ${lastName}`} />
          </ListItem>
          <Divider sx={{margin: "6%"}} />
          <ListItem disablePadding>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Student" />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={schoolName} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={`${connections ? connections.length : ""} Connections`} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar