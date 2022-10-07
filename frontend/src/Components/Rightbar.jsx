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

function generate(element) {
  return [0, 1, 2, 3, 4].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
};
const Demo = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  // backgroundColor: theme.palette.primary.dark,
}));

const Rightbar = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(true);

  return (
    <Box bgcolor="primary.white" flex={1.5} p={2} sx={{display: {xs: "none", sm: "block"} }}>
      <Box position="fixed">
        {/* <Typography variant='h6' fontWeight={100} sx={{ mt: 4, mb: 2 }}>Connection Suggestions</Typography> */}
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} fontWeight={100} variant="h6" component="div">
            Recommended connections for you
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <PersonAddIcon />
                    </IconButton>
                  }
                  >
                  <ListItemAvatar>
                    <Avatar sx={{border: "5px solid white"}}>
                      <img src={require("../public/static/assets/images/sampler2.jpg")} height="120%" width="120%" alt="Paella dish" />
                      {/* <FolderIcon /> */}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Connection name"
                    secondary={secondary ? 'School name' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Box>
    </Box>
  )
}

export default Rightbar