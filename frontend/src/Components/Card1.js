import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import React from 'react'


function Card1() {
  return (
    // <Box sx={{ border: "ridge", Align: "center" }}>
    <Box flex={4} p={2}>
      <Card sx={{ maxWidth: 800 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title="Shrimp and Chorizo Paella" />
        <CardContent>
          <Typography >
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="20%"
          image="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Paella dish"
        />

        <CardActions disableSpacing>
          <IconButton aria-label="Like">
            <ThumbUpIcon />
            <Typography>
              Like
            </Typography>
          </IconButton>
          <IconButton aria-label="Comment">
            <CommentIcon />
          </IconButton>
          <Typography>
            Comments
          </Typography>
        </CardActions>

      </Card>
    </Box>
    // </Box>
  )
}

export default Card1