import React, { useState, useContext } from 'react'
import { Box, Avatar, Typography, Button, Grid, TextField } from '@mui/material';
import Loginimage from '../Assets/Loginimage.jpg';
import Navbar from '../Components/Navbar';
import LoginTextfield from '../Components/LoginTextfield';
import SelectInterests from '../Components/SelectInterests';
import { Logincontext } from '../Components/Context/Contextprovider';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { email, setEmail } = useContext(Logincontext);
  const [imageFile, setImageFile] = useState("");
  // const [email, setEmail] = useState("Email");
  const [firstName, setFirstName] = useState("First");
  const [lastName, setLastName] = useState("Last");
  const [schoolName, setSchoolName] = useState("School");
  const [collegeName, setCollegeName] = useState("College");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const redirect = useNavigate();
console.log(interests,firstName,lastName);
  const reset = (e) => {
    // e.preventDefault();
    setImageFile('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setSchoolName('');
    setCollegeName('');
    setInterests([]);
  };

  const handleImageFileChange = (e) => {
    const [file] = e.target.files;
    setImageFile(file);
    console.log(imageFile);
  };

  //   const [inpval, setInpval] = useState({
  //     fname: "",
  //     email: "",
  //     password: "",
  //     cpassword: ""
  // });

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    if (firstName === '' || lastName === '' || email === '' || schoolName === '' || collegeName === '') {
      setError(true);
    } else{
      setSubmitted(true);
      setError(false);
    }
    // const email = get Current User's email id
    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('userId', email);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('schoolName', schoolName);
    formData.append('collegeName', collegeName);
    formData.append('interests', interests);
    try {
      const url = "http://localhost:3000/api/v1/auth/register";
      let res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const resJson = await res.json();
      console.log(resJson);
      if (resJson.status == 200) {
        console.log("User registered successfully");
        // reset()
        redirect("/dashboard")
      } else {
        console.log("User registeration Unsuccessful");
        redirect("/register")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${Loginimage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backdropFilter: "blur(3px)",
      minHeight: '100vh',

    }}>

      <Navbar />
      <Grid container marginTop={5} spacing={1} >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  >
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              flex-wrap="wrap"
              maxWidth="70%"
              alignItems="center"
              justifyContent={"center"}
              margin="auto"
              backgroundColor="#00000080"
              opacity="0.1"
              color="whitesmoke"
              borderRadius={5}
            >
            <Grid container marginTop={2} spacing={1} justifyContent={"center"} >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent={"center"}>
            <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={"center"}>
              <Typography variant='h4' padding={1} textAlign="center">Complete Your Profile</Typography>
              <Avatar
                alt="Remy Sharp"
                src=""
                // type="file"
                sx={{ width: 80, height: 80 }}
              >
              </Avatar>
              <input onChange={handleImageFileChange}
                  multiple={false} type="file"/>
              {/* <LoginTextfield type="file" name="imageUrl" onChange={handleImageFileChange} /> */}
              </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
          <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={"center"}>
              <LoginTextfield  type="email" name='email' value={email}  placeholder={'*@*.com'} label="Enter Your Email"/>
             
              <LoginTextfield type="text" name='firstName' value={firstName} onChange={setFirstName} placeholder={'Vishal'} label="Enter Your first name" />
              
              <LoginTextfield type="text" name='lastName' value={lastName} onChange={setLastName} placeholder='singh' label="Enter Your last name" />
              </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
              <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={"center"}>
              <LoginTextfield type="text" name='schoolName' value={schoolName} onChange={setSchoolName} placeholder='Delhi Public School' label="Enter Your school name" />
              <LoginTextfield type="text" name='collegeName' value={collegeName} onChange={setCollegeName} placeholder='IIT DELHI' label="Enter Your College name" />
              <SelectInterests interest={interests} setInterest={setInterests} />
              </Box>
              </Grid>

              <Button
                variant='contained'
                type='submit'
                size="large"
                sx={{ marginTop: 2, marginBottom: 3, borderRadius: 3, }}
              >Finish</Button>
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
