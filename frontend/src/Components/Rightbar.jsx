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

// function generate(element) {
//   return [0, 1, 2, 3, 4].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// };
const Demo = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  // backgroundColor: theme.palette.primary.dark,
}));

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
  const bearer_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpqYWdhbm5uQGdtYWlsLmNvbSIsImlhdCI6MTY2NTc1NDM5MSwiZXhwIjoxNjY2MDEzNTkxfQ.DzePMQS9xHCgHP_e5nhh6honyUK5hzm4rIQwAbyrpPw"
  
  const addConnection = async(sender) => {
    const url = "http://localhost:4000/api/v1/connections/addConnection";
    const bearer = 'Bearer ' + bearer_token;
    console.log(connectionReceiver);
    const result = await fetch(url, {
      method: 'POST',
      withCredentials: true,
      credentials: 'include',
      headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        sender: sender,
        receiver: connectionReceiver
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
          <Typography sx={{ mt: 4, mb: 2 }} fontWeight={100} variant="h6" component="div">
            Recommended connections for you
          </Typography>
          <Demo>
            <List dense={dense}>
              { allUsersData.map( (user, i) => (
                  <ListItem key={i}
                    secondaryAction={
                      <IconButton edge="end" aria-label="add" value={user.email} onClick={handleAddConnection}>
                        <PersonAddIcon />
                      </IconButton>
                    }
                    >
                    <ListItemAvatar >
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
                ))
              }
              <ListItem>Review pending invites</ListItem>
            </List>
          </Demo>
        </Grid>
      </Box>
    </Box>
  )
}

export default Rightbar