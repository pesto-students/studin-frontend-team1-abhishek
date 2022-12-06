import React, { useState, useContext, useEffect } from 'react'
import { Box, Avatar, Typography, Button, Grid, } from '@mui/material';
import Loginimage from '../Assets/Loginimage.jpg';
import Navbar from '../Components/Navbar';
import LoginTextfield from '../Components/LoginTextfield';
import SelectInterests from '../Components/SelectInterests';
import { Logincontext } from '../Components/Context/Contextprovider';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';

export const Register = () => {

  const { email, setEmail } = useContext(Logincontext);
  const [imageFile, setImageFile] = useState("");
  // const [email, setEmail] = useState("Email");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [preview, setPreview] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const redirect = useNavigate();


  console.log(interests, firstName, lastName);
  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result)
      };
      reader.readAsDataURL(imageFile);
    } else {
      setPreview(null);
    }
  },[imageFile]);
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
    setButtonLoading(true);
    if (e.target !== e.currentTarget) {
      return;
    }
    if (firstName === '' || lastName === '' || email === '' || schoolName === '' || collegeName === '') {
      setError(true);
    } else {
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
      const url =  process.env.REACT_APP_API_URL + "/api/v1/auth/register";
      let res = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const resJson = await res.json();
      console.log(resJson);
      if (resJson.status == 200) {
        console.log("User registered successfully");
        // reset()
        setButtonLoading(false);
        window.localStorage.setItem('accessToken', resJson.accessToken);
        window.localStorage.setItem('userEmail', resJson.userEmail);
        window.localStorage.setItem('userId', resJson.userId);
        redirect("/dashboard")
      } else {
        console.log("User registeration Unsuccessful");
        alert("User registration failed! Make sure the file size is lesser than 5 mb")
        setButtonLoading(false);
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
                      src={preview}
                      // type="file"
                      sx={{ width: 80, height: 80 }}
                    >
                    </Avatar>
                    <input onChange={handleImageFileChange}
                      multiple={false} type="file" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent={"center"}>
                    <LoginTextfield type="email" name='email' value={email} placeholder={'*@*.com'} label="Email" />

                    <LoginTextfield type="text" name='firstName' value={firstName} onChange={setFirstName}  label="First name" />

                    <LoginTextfield type="text" name='lastName' value={lastName} onChange={setLastName} label="Last name" />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent={"center"}>
                    <LoginTextfield type="text" name='schoolName' value={schoolName} onChange={setSchoolName}  label="School name" />
                    <LoginTextfield type="text" name='collegeName' value={collegeName} onChange={setCollegeName} label="College name" />
                    <SelectInterests interest={interests} setInterest={setInterests} />
                  </Box>
                </Grid>
                {
                  buttonLoading ? 
                    <LoadingButton loading variant="outlined" sx={{marginTop: 2, marginBottom: 3, borderRadius: 3,
                    //  backgroundColor: "common.white",
                     color: "common.black"}}>
                      Loading
                    </LoadingButton>
                  :
                    <Button
                      variant='contained'
                      type='submit'
                      size="large"
                      sx={{ marginTop: 2, marginBottom: 3, borderRadius: 3, }}
                    >Finish</Button>
                }
              </Grid>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  )
}
