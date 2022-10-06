import React from 'react'
import {Box, TextField, Typography,Button,Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Loginimage from '../Assets/Loginimage.jpg';
export default function EmailLogin() {
return(
<div>
  <Box  backgroundColor="red"
  width={'100%'}
  height={52}>hello</Box>
<Card sx={{ Width: '100%', }}>
<CardMedia
        component="img"
        image={require('../Assets/Loginimage.jpg')}
        alt="Paella dish"
        sx={{ height: 410 }}
      />
  </Card>
<Grid container >
<Grid item xs={12} sm={6} md={6} lg={6} marginTop={7} >
<Box 
 display="flex" 
 flexDirection="column"
 flex-wrap="wrap"
 maxWidth={450}
 alignItems="center"
 justifyContent={"center"}
 margin="auto"
 backgroundColor="#ffffff"
 // position="relative"
 // left={600}
 borderRadius={5}
 boxShadow={'10px 10px 15px #ccc'}
//  sx={{ml:'50%',mr:"20%"}}
// sx={{position:'relative',left:'30%'}}
>


<Typography variant='h6' fontFamily="Times New Roman" fontSize={28} padding={"2,3,3,2"} textAlign="center">
  Millions of like minded Students are
waiting for you.</Typography>
<Typography variant='h6'  fontFamily="Times New Roman" fontSize={28}  padding={"2,3,3,2"}textAlign="center">
connecting students to share their

skills.</Typography>
</Box>
</Grid>
  <Grid item xs={12} sm={6} md={6} lg={6} marginTop={7}>
<form>
<Box 
 display="flex" 
 flexDirection="column"
 flex-wrap="wrap"
 maxWidth={450}
 alignItems="center"
 justifyContent={"center"}
 margin="auto"
 backgroundColor="#ffffff"
 // position="relative"
 // left={600}
 borderRadius={5}
 boxShadow={'-10px -10px 15px #ccc'}
//  sx={{ml:'50%',mr:"20%"}}
// sx={{position:'relative',right:'30%'}}
>

<Typography variant='h4' marginBottom={5}>Login</Typography>
<Typography variant='h6' marginBottom={1}>Enter Your Email</Typography>
<TextField/>
<Button>Login</Button>
</Box>
</form>
</Grid>

</Grid>
</div>
)

}



// const sendOtp = async (e) => {
//   e.preventDefault();
//   const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(obj)
//   })
//   if(response.success){
//     const data = await response.json();
//     console.log(data);
//   }
  
// }


// const sendOtp = async (e) => {
//   e.preventDefault();
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data),
//      history("/otp"));
// };

//mongodb+srv://admin:<password>@cluster0.age5klw.mongodb.net/?retryWrites=true&w=majority

//protected123

//  mongodb+srv://admin:<password>@cluster0.ex8jxp9.mongodb.net/?retryWrites=true&w=majority

// vishalsingh