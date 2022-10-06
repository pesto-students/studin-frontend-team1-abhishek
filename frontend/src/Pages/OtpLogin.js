
import React,{useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Loginimage from '../Assets/Loginimage.jpg';
import { Logincontext } from '../Components/Context/Contextprovider';
export default function OtpLogin() {
  const { email, setEmail } = useContext(Logincontext);
  const [otp, setOtp] = useState("")
  // console.log(email)
  
  const url = "http://localhost:4000/api/v1/auth/login"
  const obj = { email ,otp}
  const redir=useNavigate()
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
    console.log(data)
    if (data.status == 201) {
      redir("/landingpage")
    }else{
      redir("/register")
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
      <Box backgroundColor="blue"
        width={'100%'}
        height={52}>
        header component</Box>
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
            boxShadow={'10px 10px 15px #FFFFFF'}
            sx={{
              ":hover": {
                boxShadow: "20px 20px 30px #FFFFFF"
              }
            }}
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
              boxShadow={'-10px -10px 15px #FFFFFF'}
              sx={{
                ":hover": {
                  boxShadow: "-20px -20px 30px #FFFFFF"
                }
              }}
            >
              <Typography variant='h4' padding={1} textAlign="center">Login</Typography>
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
                onChange={(e)=>setOtp(e.target.value)} />
              <Button
                variant='contained'
                size="large"
                sx={{ marginTop: 2, marginBottom: 3, borderRadius: 3, }}
                onClick={Login}
              >Login</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  )

}

