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
  const {first_name, last_name, school_name} = profileData;

  return (
    <Box bgcolor="primary.white" flex={1.5} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      {/* <Typography variant='h6' fontWeight={100}>Sidebar</Typography> */}
      <Box position="fixed" width={200}>
        <List sx={{display:"flex",flexDirection:"column"}}>
          <ListItem disablePadding sx={{justifyContent: 'center'}}>
                <Avatar sx={{width: 70, height: 70}}>
                  <img src={require("../public/static/assets/images/sample-profile-icon.jpg")} height="120%" width="120%" alt="Profile icon" />
                </Avatar>
          </ListItem>
          <ListItem disablePadding sx={{textAlign: "center"}}>
            <ListItemText primary={`${first_name} ${last_name}`} />
          </ListItem>
          <Divider sx={{margin: "6%"}} />
          <ListItem disablePadding>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Position title" />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={school_name} />
          </ListItem>
          <ListItem disablePadding>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Connections" />
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