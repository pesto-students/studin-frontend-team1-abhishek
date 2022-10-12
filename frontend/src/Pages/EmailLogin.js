import React, { useState, useContext } from 'react'
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import Loginimage from '../Assets/Loginimage.jpg';
import { useNavigate } from 'react-router-dom';
import { Logincontext } from '../Components/Context/Contextprovider';
import Navbar from '../Components/Navbar';

export default function EmailLogin() {
  const [useremail, setUseremail] = useState("")
  const { email, setEmail } = useContext(Logincontext);
  const redirect = useNavigate()
  const url = "http://localhost:4000/api/v1/auth/sendEmailOTP"
  const obj = { useremail }

  const sendOtp = async (e) => {
    e.preventDefault();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    const data = await response.json();
    console.log(data)
    if (data.status == 200) {
      setEmail(useremail)
      redirect("/otp")
    } else {
      alert("kindly check your email")
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

      <Grid container marginTop={6} spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={7}>
          <Box
            display="flex"
            flexDirection="column"
            flex-wrap="wrap"
            maxWidth={450}
            alignItems="center"
            backgroundColor="#00000060"
            justifyContent={"center"}
            margin="auto"
            color="whitesmoke"
            borderRadius={5}
            // boxShadow={'10px 10px 15px #FFFFFF'}
            // sx={{
            //   ":hover": {
            //     boxShadow: "20px 20px 30px #FFFFFF"
            //   }
            // }}
          >
            <Typography variant='h6' fontFamily="Times New Roman" fontSize={28} padding={"2,3,3,2"} textAlign="center">
              Millions of like minded Students are
              waiting for you.</Typography>
            <Typography variant='h6' fontFamily="Times New Roman" fontSize={28} padding={"2,3,3,2"} textAlign="center">
              connecting students to share their
              skills.</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={7}>
          <form>
            <Box
              display="flex"
              flexDirection="column"
              flex-wrap="wrap"
              maxWidth={450}
              alignItems="center"
              justifyContent={"center"}
              margin="auto"
              backgroundColor="#00000080"
              color="whitesmoke"
              borderRadius={5}
              // boxShadow={'-10px -10px 15px #FFFFFF'}
              // sx={{
              //   ":hover": {
              //     boxShadow: "-20px -20px 30px #FFFFFF"
              //   }
              // }}
            >
              <Typography variant='h4' padding={1} textAlign="center">Login</Typography>
              <TextField
                type={'email'}
                variant='outlined'
                name='email'
                value={useremail}
                id="standard-required"
                placeholder='vishusingh987@gmail.com'
                margin='normal'
                label="Enter Your Email"
                sx={{
                  input: { color: 'whitesmoke', fontWeight: 'bold', textAlign: 'center' },
                  label: { color: 'whitesmoke', fontWeight: 'bold', },
                }}
                onChange={(e) => { setUseremail(e.target.value) }} />
              <Button
                variant='contained'
                type='submit'
                size="large"
                sx={{ marginTop: 2, marginBottom: 3, borderRadius: 3, }}
                onClick={(e) => sendOtp(e)}
              >Login</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

