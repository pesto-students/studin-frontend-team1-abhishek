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
import LoadingButton from '@mui/lab/LoadingButton';

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
  const [imageUploaded, setImageUploaded] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const auth = useAuth();

  const handleModalClose = () => {
    handleClose();
    setImageFile("");
    setEditorText("What's on your mind?");
    setShowEmojiPicker(false);
    setImageUploaded(false);
  }

  const handleSubmit = async (e) => {
    setButtonLoading(true);
    e.preventDefault();
		if (e.target !== e.currentTarget) {
			return;
		}
    // const email = get Current User's email id
		// const payload = {
    //   user_id: auth.user,
		// 	content: editorText,
    //   image: imageFile,
		// };

    const formData = new FormData();
    console.log("no image attached");
    console.log(imageFile);
    let userId = localStorage.getItem('userId');

    formData.append('image', imageFile);
    formData.append('user_id', userId);
    formData.append('content', editorText);
    try {
      const url =  process.env.REACT_APP_API_URL + "/api/v1/posts/createPost";
      let accessToken = localStorage.getItem('accessToken');
      let res = await fetch( url, {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
        // withCredentials: true,
        // credentials: 'include',
      });
      let resJson = await res.json();
      console.log('resJson --> ');
      console.log(resJson);
      if (resJson.status === 200) {
        reset(e)
        console.log("Post created successfully");
        // setTimeout(() => {
        handleModalClose();
        setButtonLoading(false);
        // }, 500);
        
      } else {
        console.log("Some error occured while creating post");
        alert("Post creation failed! Make sure the file size is lesser than 6 mb")
        setButtonLoading(false);
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
    setImageUploaded(true);
    console.log(file);
    console.log(imageFile);
  };

  return (
      <Modal
          open={open}
          onClose={handleModalClose}
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
                <EmojiEmotionsIcon color='success' onClick={handleShowEmoji} style={{cursor: "pointer"}}/>
                <ImageIcon color='success' onClick={() => fileRef.current.click()} style={{cursor: "pointer", marginLeft: "3%"}}/>
                <input ref={fileRef} onChange={handleImageFileChange} size="6" accept=".png,.jpg,.jpeg"
                  multiple={false} type="file" hidden />
                
                {
                  buttonLoading ? 
                    <LoadingButton loading variant="outlined" sx={{ml: "58%", mt: "-1%", p: "1%",
                    //  backgroundColor: "common.white",
                     color: "common.black"}}>
                      Loading
                    </LoadingButton>
                  :
                    <Button sx={{ml: "58%", mt: "-1%", p: "1%", 
                    //  backgroundColor: "common.white",
                    //  color: "common.white"
                    }} onClick={handleSubmit}>
                      Post
                    </Button>
                }
              </Stack>
              {imageUploaded ? <Typography variant='p' fontWeight={500} color="primary.main">Image uploaded!</Typography> : <div></div> }
              {/* <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
              </ButtonGroup> */}
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
