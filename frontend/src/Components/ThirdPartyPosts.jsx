import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import { useDebouncedEffect } from '../Utils/Hooks/useDebouncedEffect';
import { Grid } from '@mui/material'
import { useAuth } from './Auth';

export const ThirdPartyPosts = (props) => {

    const {connectionId} = props;
    //   const { profilePhoto} = props;
    const [likedPostId, setLikedPostId] = useState('');
    const [dislikedPostId, setDislikedPostId] = useState('');
    const [likedPosts, setLikedPosts] = useState([]);
    const [disLikedPosts, setDisLikedPosts] = useState([]);
    const [postsCount, setPostsCount] = useState(0);
    const [postsData, setPostsData] = useState([]);
    let userEmail = localStorage.getItem('userEmail');
    let userId = localStorage.getItem('userId');
    const auth = useAuth();

    const handleLike = (event) => {
    // console.log("Liked");
    // console.log(event.currentTarget.value);
    setLikedPostId(event.currentTarget.value);
    // setLikedPosts([...likedPosts,event.currentTarget.value])
    };

    const handleDislike = (event) => {
    // console.log("Removing like");
    // console.log(event.currentTarget.value);
    setDislikedPostId(event.currentTarget.value);
    // setDisLikedPosts([...disLikedPosts, event.currentTarget.value])
    };


  const fetchPostData = async() => {
    const url =  process.env.REACT_APP_API_URL + "/api/v1/posts/getThirdPartyPosts";
    let accessToken = localStorage.getItem('accessToken');
    const result = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({ connectionId: connectionId })
    });

    const jsonResult = await result.json()
    console.log(jsonResult)
    if (jsonResult.data){
      setPostsCount(jsonResult.data.length);
      console.log('count',jsonResult.data.length);
    }
    if (jsonResult.status === 200){
        setPostsData([jsonResult]);    
    }
}

  const addLike = async (postId) => {
    const url =  process.env.REACT_APP_API_URL + "/api/v1/posts/addLike";
    let accessToken = localStorage.getItem('accessToken');
    console.log("adding like");
    const result = await fetch(url, {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({ 
        postId: postId
       })
      
    })
    const jsonResult = await result.json()
    console.log(jsonResult);
  };

  const disLike = async (postId) => {
    const url =  process.env.REACT_APP_API_URL + "/api/v1/posts/disLike";
    let accessToken = localStorage.getItem('accessToken');
    console.log('accessToken from local storage --> ',accessToken);
    const result = await fetch(url, {
      method: 'POST',
      // withCredentials: true,
      // credentials: 'include',

      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({ 
        postId: postId
       })
      
    })
    const jsonResult = await result.json()
    console.log(jsonResult);
  };

  useEffect(() => {
    if (postsData.length === 0){
      fetchPostData();
    }
    }, [postsData]);
  

  useDebouncedEffect(() => {
    // fetchPostData();
    if (likedPostId){

      addLike(likedPostId);
      setTimeout(() => {
        fetchPostData();
      }, 500);
      
    }
      return (...args) => {
        console.log("Cleanup of liked data")
        setLikedPostId('');
        console.log("calling post data");
        fetchPostData();
      }
    
    }, [likedPostId], 1000);

  useDebouncedEffect(() => {
    // fetchPostData();
    if (dislikedPostId){
      disLike(dislikedPostId);
      setTimeout(() => {
        fetchPostData();
      }, 500);
    }
    return (...args) => {
      console.log("Cleanup of disliked data")
      setDislikedPostId('');
      console.log("calling post data");
      fetchPostData();
    }
  }, [dislikedPostId], 1000);

  return (
    <>
    { postsData.length > 0 ? postsData.map((post) => (
      
          post.data.map((postInfo,i)=>(

            <Card sx={{margin: 5, boxShadow: "0.25px 0.25px 0.5px"}} key={i}>
            <CardHeader 
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  <img 
                  src={postInfo.userId.profilePhoto}
                  // src={require("../public/static/assets/images/image1.jpg")}
                    height="120%" width="120%" alt="Profile icon" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={postInfo.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              // height="20%"
              // maxWidth="100%"
              height="auto"
              image={postInfo.imageUrl}
              // src={postInfo.image_url}
              // src={require("../public/static/assets/images/image1.jpg")} 
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="subtitle1" color="text.secondary">
                {postInfo.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              { postInfo.likes.includes(userId) ?
                <Typography paragraph>
                  <IconButton aria-label="add to favorites" value={postInfo._id} onClick={handleDislike}>
                    <ThumbUpIcon value={postInfo._id}/>
                  </IconButton>
                  You have liked
                </Typography>
                :
                <Typography paragraph>
                  <IconButton aria-label="remove from favorites" value={postInfo._id} onClick={handleLike}>
                    <ThumbUpOutlinedIcon value={postInfo._id}/>
                  </IconButton>
                  Like
                </Typography>
              }

              <Typography paragraph marginLeft={4}>
                <IconButton aria-label="add to favorites">
                  <Checkbox icon={<CommentOutlinedIcon />} checkedIcon={<CommentIcon />} />
                </IconButton>
                Comment
              </Typography>

              {/* <ExpandMoreIcon
                // expand={expanded}
                // onClick={handleExpandClick}
                // aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMoreIcon> */}
            </CardActions>
            <Collapse 
            // in={expanded}
            timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                  aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                  medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                  occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                  large plate and set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                  stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and
                  peppers, and cook without stirring, until most of the liquid is absorbed,
                  15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                  mussels, tucking them down into the rice, and cook again without
                  stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don&apos;t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          )
          ))) : <div>User has no posts created...</div>

    } 
</>
  )
}
