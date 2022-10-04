import React, {useState} from 'react';
import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge } from '@mui/material'
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  // backgroundColor: "white",
  backgroundColor: theme.palette.common.white,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: "gray",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  gap: 20,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex"
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none"
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        {/* <Typography variant="h6" sx={{display: {xs: "none", sm: "block"}}}>
          StudIn
        </Typography> */}
        <img src={require('../public//static/assets/images/logo-no-background.png')} style={{width: '80px', height: '44px'}}alt="StudIn logo" />
        {/* <AcUnitIcon sx={{display: {xs: "block", sm: "none"}}} /> */}
        <Search>
          <StyledInputBase placeholder='search...' bgcolor='black'/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{width:30, height:30}} src="" onClick={e => {setOpen(true)}}/>
        </Icons>
        <UserBox onClick={e => {setOpen(true)}}>
          <Avatar sx={{width:30, height:30}} src="../../public/sample-profile-icon.jpg"/>
          <Typography variant='span'>Jagan</Typography>
        </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => {setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar