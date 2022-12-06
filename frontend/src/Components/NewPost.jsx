import { Box, InputBase,styled} from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

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
    padding: "1%",
    color: theme.palette.grey[500],
  }));
  const StyledAvatar = styled(Avatar)(({theme}) => ({
    bgcolor: theme.palette.primary,
    color:  theme.palette.primary,
  }));

export const NewPost = (props) => {
    const {handleOpen, profilePhoto} = props;

    const StyledCircularProgress = styled(CircularProgress)(({theme}) => ({
      size:"0.1%",
      // flex: "1", 
      width: "0.1%",
      height: "0.1%",
      // marginTop: "1vh",
      // marginLeft: "1vw",
      // marginBottom: "1vh",
      // justifyContent: 'center',
      // alignItems:'center'
    }));

    return (
        <Box className='createNewPostArea' sx={{p:"4%", m:"1% 0% 0% 10%", bgcolor:"primary.light", 
          justifyContent:"space-evenly", width:"80%", height: "100%", display: "flex", flexDirection:"row", 
          gap:5, borderRadius:4, boxShadow: "1px 1px 2px lightgrey" }}
        >
          { profilePhoto === undefined ? 
          <StyledAvatar aria-label="recipe" flex={1}>
            <StyledCircularProgress />
          </StyledAvatar>
          :
            <StyledAvatar aria-label="recipe" flex={1}>
               <img src={profilePhoto } height="120%" width="120%" alt="Profile icon" />
            </StyledAvatar>
          }
            <Search flex={4} onClick={handleOpen} >
              <StyledInputBase placeholder='create post...' />
            </Search>
            <Button>
              <StyledVideoCallIcon flex={1} sx={{color:"grey"}}/>
            </Button>
        </Box>
    )
}
