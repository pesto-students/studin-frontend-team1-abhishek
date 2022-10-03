import { Box, InputBase,styled} from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Button from '@mui/material/Button';


const NewPostBox = styled(Box)(({theme}) => ({
    borderRadius: theme.shape.borderRadius,
    bgcolor:theme.palette.common.black
  }))
  const Search = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.common.white,
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "70%",
  }));
  const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: theme.palette.common.black,
  }));
  const StyledVideoCallIcon = styled(VideoCallIcon)(({theme}) => ({
    // color: theme.palette.primary,
    padding: "1%",
    color: theme.palette.grey[500],
  }));
  const StyledAvatar = styled(Avatar)(({theme}) => ({
    bgcolor: theme.palette.primary,
    color:  theme.palette.primary,
  }));

export const NewPost = (props) => {
    const {handleOpen} = props;

    return (
        <Box className='createNewPostArea' sx={{p:"4%", m:"1% 0% 0% 5.75%", bgcolor:"primary.main", justifyContent:"space-evenly", width:"80%", height: "100%", display: "flex", flexDirection:"row", gap:5, borderRadius:4, boxShadow: "5px 5px 10px" }}>
            <StyledAvatar aria-label="recipe" flex={1}>
            <img src={require("../public/static/assets/images/sample-profile-icon.jpg")} height="120%" width="120%" alt="Profile icon" />
            </StyledAvatar>
            <Search flex={4} onClick={handleOpen}>
            <StyledInputBase placeholder='create post...' />
            </Search>
            <Button>
            <StyledVideoCallIcon flex={1} />
            </Button>
        </Box>
    )
}
