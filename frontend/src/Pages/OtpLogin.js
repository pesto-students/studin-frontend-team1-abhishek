
import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import Loginimage from '../Assets/Loginimage.jpg';
import { Logincontext } from '../Components/Context/Contextprovider';
import Navbar from '../Components/Navbar';

export default function OtpLogin() {
  
  const { email, setEmail } = useContext(Logincontext);
  const [otp, setOtp] = useState("")
  const url = "http://localhost:3000/api/v1/auth/login"
  const obj = { email, otp }
  const redirect = useNavigate()
  const location = useLocation();
  const redirectPath = location.state?.path || '/dashboard';

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
    console.log(data);
    if (data.status == 201) {
      // redirect("/dashboard")
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
            boxShadow={'5px 5px 5px #FFFFFF'}
            sx={{
              ":hover": {
                boxShadow: "10px 10px 10px #FFFFFF"
              }
            }}
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

