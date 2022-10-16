import { Box, Typography, styled } from '@mui/material'
import React from 'react'
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
  const handleAddConnection = async (e) => {
    // console.log(e.currentTarget.value);
    setConnectionReceiver(e.currentTarget.value);
    await addConnection(currentUser, connectionReceiver);
  }
  
  const addConnection = async(sender, receiver) => {
    const url = "http://localhost:3000/api/v1/connections/addConnection";
    console.log(receiver);
    const result = await fetch(url, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        sender: sender,
        receiver: receiver
       })
      
    })
    const jsonResult = await result.json()
    console.log(jsonResult);
  }

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
                      <IconButton edge="end" aria-label="add" value={user.email} onClick={handleAddConnection}>
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
                <ListItem>No data available</ListItem>
              }
                            
              <Typography sx={{ mt: 4, mb: 2 }} fontWeight={100} variant="h6" component="div">
                Review pending invites
              </Typography>
              { allUsersData.length>0 ? allUsersData.map( (user, i) => (
                  <ListItem key={i}
                    secondaryAction={ 
                    <Button variant='raised' sx={{
                      ml: "30%", 
                      // border:'1px solid white'
                     }}
                      value={user.email} onClick={handleAddConnection}>
                      Accept
                    </Button>
                    }
                    >
                    <ListItemAvatar sx={{marginRight: "4%" }}>
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
                <ListItem>No data available</ListItem>
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