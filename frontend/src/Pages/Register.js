import React from 'react'
import { Box, Avatar, Typography, Button, Grid, TextField } from '@mui/material';
import Loginimage from '../Assets/Loginimage.jpg';
import Navbar from '../Components/Navbar';
import LoginTextfield from '../Components/LoginTextfield';
import SelectInterests from '../Components/SelectInterests';
export default function Register() {
  return (
    <div style={{
      backgroundImage: `url(${Loginimage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backdropFilter: "blur(3px)",
      height: '100%'
    }}>

      <Navbar />
      <Grid container marginTop={2} spacing={1} justifyContent={"center"}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10} >
          <form>
            <Box
              display="flex"
              flexDirection="column"
              flex-wrap="wrap"
              maxWidth={700}
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
              <Typography variant='h4' padding={1} textAlign="center">Register</Typography>
              <Avatar
                alt="Remy Sharp"
                src=""
                // type="file"
                sx={{ width: 80, height: 80 }}
              >
              </Avatar>
              <LoginTextfield type="file" />
              <LoginTextfield type={"text"} name={'firstname'} placeholder={'Vishal'} label="Enter Your first name" />
              <LoginTextfield type="text" name='lastname' placeholder='singh' label="Enter Your last name" />
              <LoginTextfield type="text" name='schoolname' placeholder='Delhi Public School' label="Enter Your school name" />
              <LoginTextfield type="text" name='collegename' placeholder='IIT DELHI' label="Enter Your College name" />
              <SelectInterests />
              <Button
                variant='contained'
                type='submit'
                size="large"
                sx={{ marginTop: 2, marginBottom: 3, borderRadius: 3, }}
              >Finish</Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
