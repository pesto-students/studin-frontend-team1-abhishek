import React, {useState} from 'react';
import { AppBar, Box, Toolbar, Typography, styled, InputBase } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledNavLink = styled(NavLink)(({theme})=>({
  textDecoration: "none",
  color: theme.palette.common.white
}));

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
  const redirect = useNavigate();
  const auth = useAuth();

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  const handleLogout = async () => {
    const url = "http://localhost:3000/api/v1/auth/logout";
    const result = await fetch(url, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      
    })
    const jsonResult = await result.json()
    console.log(jsonResult);
    if (jsonResult.status === 200){
      auth.logout();
      redirect("/")
    } else {
      alert("Please login first!")
    }
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
      <MenuItem>
        <NavLink to='/dashboard'>
          <img src={require('../public//static/assets/images/logo-no-background.png')}
            style={{width: '80px', height: '44px'}} alt="StudIn logo" />
        </NavLink>
      </MenuItem>

        <Search onClick={handleSearchClick} style={{
          backgroundColor: searchActive ? "white" : "white",
          width: searchActive ? "40%" : "30%",
          marginRight: '8%'
          }}>
          <StyledInputBase placeholder='search...' style={{
            color: searchActive ? "black" : "black"
          }}/>
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
        <MenuItem><StyledNavLink to='/profile'> Profile</StyledNavLink></MenuItem>
        <MenuItem><StyledNavLink to='/dashboard'>Dashboard</StyledNavLink></MenuItem>
        {/* <MenuItem><StyledNavLink to='/profile'>My account</StyledNavLink></MenuItem> */}
        <MenuItem onClick={handleLogout}><StyledNavLink>Logout</StyledNavLink></MenuItem>
        { !auth.user && (
          <MenuItem><StyledNavLink to='/'>Login</StyledNavLink></MenuItem>
        )}
      </Menu>

      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar