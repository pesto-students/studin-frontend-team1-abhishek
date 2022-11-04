import { Box, Stack } from '@mui/material'
import React from 'react'
import { Post } from './Post'
import { PostModal } from './PostModal';
import { NewPost } from './NewPost';

const Feed = (props) => {
  const {postsData, profilePhoto, postsCount} = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack bgcolor="primary.white" flex={4} p={1.5}>
      <NewPost handleOpen={handleOpen} profilePhoto={profilePhoto}/>
      <PostModal open={open} handleClose={handleClose} profilePhoto={profilePhoto}/>

      {/* {postsData.length > 0 ? 
      <> */}
      <Stack direction="column" spacing={0.1} justifyContent="space-evenly">
        <Box className='feedExistingPosts' style={{flexGrow: "1"}}>
          <Post postsData={postsData} />
        </Box>
        <div  style={{display: postsCount>0?'none':'', flexGrow: "10", height: "100vh", width: "50vw", textAlign: "center", marginTop: "10%"}}>
          No posts to show
        </div>
        <div  style={{display: postsCount>0?'':'none',flexGrow: "0", height: "10vh", width: "50vw", textAlign: "center", marginTop: "20%"}}>
          No further posts to show
        </div>
      </Stack>

      {/* </>
      : <div  style={{height: '100vh', visibility : 'hidden', backgroundColor: "white"}}>Displaying data</div>} */}

      {/* <Box className='feedExistingPosts' style={{visibility : postsData.length>1 ?  'visible':'hidden', flexShrink: "8"}}>
        <Post postsData={postsData} />
      </Box>
      <div  style={{color: "white",height: '100vh', visibility : postsData.length > 1 ? 'hidden':'visible', backgroundColor: "white",  flexGrow: "20"}}>
        Displaying data
      </div> */}
    </Stack>
  )
}

export default Feed;