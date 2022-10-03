import { Box, Stack } from '@mui/material'
import React from 'react'
import { Post } from './Post'
import { PostModal } from './PostModal';
import { NewPost } from './NewPost';

const Feed = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack bgcolor="primary.white" flex={4} p={2}>
      <NewPost handleOpen={handleOpen}/>
      <PostModal open={open} handleClose={handleClose}/>
      <Box className='feedExistingPosts'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </Stack>
  )
}

export default Feed