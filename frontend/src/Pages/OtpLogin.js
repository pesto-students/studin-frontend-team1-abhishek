
import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import Loginimage from '../Assets/Loginimage.jpg';
import { Logincontext } from '../Components/Context/Contextprovider';
import Navbar from '../Components/Navbar';
import { useAuth } from '../Components/Auth';

export default function OtpLogin() {
  
  const { email, setEmail } = useContext(Logincontext);
  const [otp, setOtp] = useState("")
  const url =  process.env.REACT_APP_API_URL + "/api/v1/auth/login"
  const obj = { email, otp }
  const redirect = useNavigate()
  const location = useLocation();
  const redirectPath = location.state?.path || '/dashboard';
  const auth = useAuth();

  const Login = async (e) => {
    e.preventDefault();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    const data = await response.json();

    if (data.status == 201) {

      window.localStorage.setItem('accessToken', data.accessToken);
      window.localStorage.setItem('userEmail', data.userEmail);
      window.localStorage.setItem('userId', data.userId);
      
      console.log("cookie received -->", data);
      // redirect("/dashboard")
      auth.login(email);
      redirect( "/dashboard", {replace: true})
    } else {
      redirect("/register")
    }
  }

  return (
    <div style={{
      backgroundImage: `url(${Loginimage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backdropFilter: "blur(3px)",
      height: '100vh'
    }}>

    <Navbar/>
    <Typography variant='h1' fontFamily="Times New Roman" fontSize={20} padding={"2,3,3,2"} textAlign="center" marginLeft={3}
            marginTop={2} marginRight={3} color="common.white">An OTP has been sent to your mail</Typography>
      <Grid container marginTop={1} spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} margin="auto" marginTop="7%">
          <Box
            display="flex"
            flexDirection="column"
            flex-wrap="wrap"
            maxWidth={500}
            alignItems="center"
            backgroundColor="#00000060"
            justifyContent={"center"}
            margin="auto"
            color="whitesmoke"
            borderRadius={5}
          >
            <Typography variant='h6' fontFamily="Times New Roman" fontSize={32} padding={"2,3,3,2"} textAlign="center" marginLeft={3}
            marginTop={3} marginRight={3}>
              Millions of like minded Students are
              waiting for you.</Typography>
            <Typography variant='h6' fontFamily="Times New Roman" fontSize={32} padding={"2,3,3,2"} textAlign="center">
              connecting students to share their
              skills.</Typography>
              <form>
              <TextField
                type={'password'}
                variant='outlined'
                id="standard-required"
                placeholder='*******'
                margin='normal'
                label="Enter Your OTP"
                sx={{
                  input: { color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center' },
                  label: { color: 'whitesmoke', fontWeight: 'bold', },
                }}
                onChange={(e) => setOtp(e.target.value)} />
                <br></br>
              <Button
                variant='contained'
                size="large"
                sx={{ marginTop: 2, marginBottom: 3,marginLeft:8, borderRadius: 3, }}
                onClick={Login}
              >Login</Button>
              </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

