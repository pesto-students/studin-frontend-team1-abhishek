import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';

const Demo = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  // backgroundColor: theme.palette.primary.dark,
}));

const AcceptButton = styled('span')(({theme}) => ({
  // borderWidth: 1,
  // borderColor: 'red',
  border: "1px solid white",
  // alignItems: 'center',
  // justifyContent:'center',
  width: 70,
  height: 20,
  // backgroundColor: 'grey',
  borderRadius: 20,
  verticalAlign: "center"
}))

const Rightbar = (props) => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);
  const { allUsersData, currentUser } = props;
  const [connectionReceiver, setConnectionReceiver] = React.useState('');
  const [acceptedConnId, setAcceptedConnId] = useState('')
  const [myConnRequests, setMyConnRequests] = useState([]);

  const handleAddConnChange = (e) => {
    setConnectionReceiver(e.currentTarget.value);
  }
  const handleAcceptConnChange = (connReqId) => {
    console.log('connReqId to accept-->', connReqId)
    setAcceptedConnId(connReqId);
  }

  useEffect(() => {
    if (connectionReceiver){
      // handleAddConnection();
      console.log("Inside UE for add");
      console.log(connectionReceiver);
      addConnection(currentUser, connectionReceiver);
    }
    return () => {
      setConnectionReceiver('');
    }
  }, [connectionReceiver]);

  useEffect(() => {
    if(acceptedConnId){
      handleAcceptConnection();
    }
    return () => {
      setAcceptedConnId('');
    }
  }, [acceptedConnId]);
  
  // const handleAddConnection = () => {
  //   if (connectionReceiver){
  //     console.log("Inside UE for add");
  //     console.log(connectionReceiver);
  //     addConnection(currentUser, connectionReceiver);
  //   }
  // };
  
  const addConnection = async(sender, receiver) => {
    const url = "http://localhost:3000/api/v1/connections/addConnection";
    console.log('sender -->',sender);
    console.log('receiver -->',receiver);
    const result = await fetch(url, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        senderEmail: sender,
        receiverEmail: receiver
       })
      
    })
    const jsonResult = await result.json()
    console.log(jsonResult);
  };
  const handleAcceptConnection = async () => {
    const url = "http://localhost:3000/api/v1/connections/acceptConnection";
    console.log('accepted Id -->',acceptedConnId);
    const result = await fetch(url, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        connectionRequestId: acceptedConnId
       })
      
    })
    const jsonResult = await result.json()
    console.log(jsonResult);
  };
  
  const getMyConnRequests = async () => {
    const url = "http://localhost:3000/api/v1/connections/myConnRequests";

    const result = await fetch(url, {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const jsonResult = await result.json();
    setMyConnRequests(jsonResult.data);
    console.log('Printing 5 Conn Reqs -->',jsonResult.data);
  };

  useEffect(() => {
    getMyConnRequests();
  
  }, []);

  return (
    <Box bgcolor="primary.white" flex={2}  sx={{display: {xs: "none", sm: "block"} }}>
      <Box position="fixed">
        {/* <Typography variant='h6' fontWeight={100} sx={{ mt: 4, mb: 2 }}>Connection Suggestions</Typography> */}
        <Grid item xs={12} md={6}>

          <Demo>
            <List dense={dense}>
              <Typography sx={{ mt: 4, mb: 2 }} fontWeight={100} variant="h6" component="div">
                Recommended connections for you
              </Typography>
              { allUsersData.length>0 ? allUsersData.map( (user, i) => (
                  <ListItem key={i}
                    secondaryAction={
                      <IconButton edge="end" aria-label="add" value={user.email} onClick={(event) =>{handleAddConnChange(event);}}>
                        <PersonAddIcon />
                      </IconButton>
                    }
                    >
                    <ListItemAvatar sx={{marginRight: "8px" }}>
                      <Avatar sx={{border: "5px solid white"}}>
                        <img 
                        src={ user.profilePhoto}
                        height="120%" width="120%" alt="Paella dish" />
                        {/* <FolderIcon /> */}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${user.firstName} ${user.lastName}`}
                      secondary= {user.schoolName}
                    />
                  </ListItem>                
                )) :
                <ListItem>Uh-oh! We don't have any suggestions for you today.</ListItem>
              }
                            
              <Typography sx={{ mt: 4, mb: 2 }} fontWeight={100} variant="h6" component="div">
                Review pending invites
              </Typography>
              { myConnRequests.length>0 ? myConnRequests.map( (user, i) => (
                  <ListItem key={i}
                    secondaryAction={ 
                    <Button variant='raised' sx={{
                      ml: "30%", 
                      // border:'1px solid white'
                     }}
                      value={user.senderId.email} onClick={() =>{handleAcceptConnChange(user._id);}}>
                      Accept
                    </Button>
                    }
                    >
                    <ListItemAvatar sx={{marginRight: "4%" }}>
                      <Avatar sx={{border: "5px solid white"}}>
                        <img 
                        src={ user.senderId.profilePhoto}
                        height="120%" width="120%" alt="Paella dish" />
                        {/* <FolderIcon /> */}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${user.senderId.firstName} ${user.senderId.lastName}`}
                      secondary= {user.senderId.schoolName}
                    />
                  </ListItem>                
                )) :
                <ListItem>No pending connection requests</ListItem>
              }
              {/* <ListItem>Review pending invites</ListItem> */}
            </List>
          </Demo>
        </Grid>
      </Box>
    </Box>
  )
}

export default Rightbar