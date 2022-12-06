import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import { Post } from './Post'
import { PostModal } from './PostModal';
import { NewPost } from './NewPost';
import CircularProgress from '@mui/material/CircularProgress';

const Feed = (props) => {
  const {postsData, profilePhoto, postsCount} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const StyledCircularProgress = styled(CircularProgress)(({theme}) => ({
    height:"100%", width:"100%",
    justifyContent: 'center',
    alignItems:'center'
  }));

  return (
    <Stack bgcolor="primary.white" flex={4} p={1.5}>
      <NewPost handleOpen={handleOpen} profilePhoto={profilePhoto}/>
      <PostModal open={open} handleClose={handleClose} profilePhoto={profilePhoto}/>
      <Stack direction="column" spacing={0.1} justifyContent="space-evenly">
        <Box className='feedExistingPosts' style={{flexGrow: "1"}}>
          <Post postsData={postsData} />
        </Box>
        <div  style={{display: postsCount>0?'none':'', flexGrow: "10", height: "100vh", width: "50vw", textAlign: "center", marginTop: "10%"}}>
          <StyledCircularProgress />
        </div>
        <div  style={{display: postsCount>0?'':'none',flexGrow: "0", height: "10vh", width: "50vw", textAlign: "center", marginTop: "20%"}}>
          No further posts to show
        </div>
      </Stack>
    </Stack>
  )
}

export default Feed;