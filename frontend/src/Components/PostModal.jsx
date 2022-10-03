import React from 'react'
import { Box, Stack, Typography, InputBase,styled, Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { width } from '@mui/system';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 280,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
  };
  
  const StyledModal = styled(Modal)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  }));

export const PostModal = (props) => {
    const {open, handleClose} = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box sx={style}>
            <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
            <Divider sx={{margin:"3%"}}/>
            <UserBox>
                <Avatar 
                src={require('../public/static/assets/images/sample-profile-icon.jpg')}
                sx={{width: 30, height: 30}}/>
                {/* <Typography variant='span' fontWeight={500} color='gray' textAlign='center'>Create post</Typography> */}
            </UserBox>
            <TextField
            sx={{width: "100%"}}
            id="standard-multiline-static"
            multiline
            rows={3}
            defaultValue="What's on your mind?"
            variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotionsIcon color="success" />
                <ImageIcon color="success" />
                <VideoCameraBackIcon color='success'/>
                <PersonAddIcon color='success'/>
            </Stack>
            <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                <Button>Post</Button>
                <Button sx={{width: "100px"}}>
                <DateRangeIcon />
                </Button>
            </ButtonGroup>
            </Box>
        </Modal>
  )
}
