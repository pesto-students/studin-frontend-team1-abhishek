import React, { useState, useRef } from 'react'
import { Box, Stack, Typography, styled, Divider } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useAuth } from './Auth';

const style = {
  position: 'absolute',
  top: '30%',
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
  const fileRef = useRef();  
  const {open, handleClose, profilePhoto} = props;
  const [imageFile, setImageFile] = useState("");
  const [editorText, setEditorText] = useState("What's on your mind?");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const auth = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
		if (e.target !== e.currentTarget) {
			return;
		}
    // const email = get Current User's email id
		const payload = {
      user_id: auth.user,
			content: editorText,
      image: imageFile,
		};

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('user_id', auth.user);
    formData.append('content', editorText);
    try {
      const url = "http://localhost:3000/api/v1/posts/createPost";
      let res = await fetch( url, {
        method: "POST",
        body: formData,
        withCredentials: true,
        credentials: 'include',
      });
      let resJson = await res.json();
      if (res.status === 200) {
        reset(e)
        console.log("Post created successfully");
      } else {
        console.log("Some error occured while creating post");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setEditorText(e.target.value);
  }

  const handleShowEmoji = () => {
    console.log("Emoji state changed");
    console.log(!showEmojiPicker);
    setShowEmojiPicker(!showEmojiPicker)
  }

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setEditorText(editorText + emoji);
  };

  const reset = (event) => {
    event.preventDefault();
    setEditorText("");
    setImageFile("");
    setShowEmojiPicker(false);
    // props.clickHandler(event);
  };

  const handleImageFileChange = (e) => {
    const [file] = e.target.files;
    setImageFile(file);
    console.log(file);
    console.log(imageFile);
  };

  return (
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Typography variant='h6' color='gray' textAlign='center'>
              Create post
            </Typography>
            <Divider sx={{margin:"3%"}}/>
            <UserBox>
                {/* <Avatar 
                src={require('../public/static/assets/images/sample-profile-icon.jpg')}
                sx={{width: 30, height: 30}}/> */}
                <Avatar sx={{ bgcolor: "red", width: 30, height: 30 }} aria-label="recipe">
                  <img src={profilePhoto} height="120%" width="120%" alt="Profile icon" />
                </Avatar>
                {/* <Typography variant='span' fontWeight={500} color='gray' textAlign='center'>Create post</Typography> */}
            </UserBox>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{width: "100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                value={editorText}
                onChange={handleChange}
                // defaultValue="What's on your mind?"
                variant="standard"
              />
              <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotionsIcon color='success' onClick={handleShowEmoji}/>
                <ImageIcon color='success' onClick={() => fileRef.current.click()}/>
                <input ref={fileRef} onChange={handleImageFileChange}
                  multiple={false} type="file" hidden />
              </Stack>
              <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                <Button  onClick={handleSubmit}>
                  Post
                </Button>
              </ButtonGroup>
            </form>

            {showEmojiPicker && (
            <span>
              <Picker data={data} onEmojiSelect={addEmoji} style={{ position:"absolute",marginTop: "465px",
                  marginLeft: -40,maxWidth: "320px",borderRadius: "20px"}}
                theme="dark" autoFocus="true" previewPosition="top"
                title="Pick an emoji"
              />
            </span>
          )}
          </Box>
      </Modal>
  )
}
