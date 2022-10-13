import React, {useState} from 'react';
import { AppBar, Box, Toolbar, Typography, styled, InputBase } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  // backgroundColor: "white",
  // color: theme.palette.common.white,
  // backgroundColor: theme.palette.common.white,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  // width: "40%",
  // border: '0.5px solid white',
  // '&:hover': {
  //   backgroundColor: theme.palette.common.white,
  // },
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
  // color: theme.palette.grey,
  // color: "gray",
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

const Navbar = (props, {theme}) => {
  const [open, setOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const {profileData} = props;

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  }

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <img src={
          require('../public//static/assets/images/logo-no-background.png')
        }
        style={{width: '80px', height: '44px'}}
        alt="StudIn logo" 
        />
        <Search onClick={handleSearchClick} style={{
          backgroundColor: searchActive ? "white" : "black",
          width: searchActive ? "40%" : "30%"
          }}>
          <StyledInputBase placeholder='search...' style={{
            color: searchActive ? "black" : "white"}}
          />
        </Search>
        <Icons>
          <Avatar sx={{width:30, height:30}}  
          onClick={e => {setOpen(true)}}
        />
        </Icons>
        <UserBox onClick={e => {setOpen(true)}} >
          <Avatar sx={{ width: 30, height: 30 }}  />
          {/* <Typography variant='span'>{profileData.firstName}</Typography> */}
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