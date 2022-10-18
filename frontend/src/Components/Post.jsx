import React from 'react'
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

export const Post = (props) => {

  const {postsData, profilePhoto} = props;

  return (
    <>
    { postsData.length>0 ? postsData.map((post) => (
      
          post.data.map((dat,i)=>(   

            <Card sx={{margin: 5, boxShadow: "0.25px 0.25px 0.5px"}} key={i}>
            <CardHeader 
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  <img src={require("../public/static/assets/images/image1.jpg")}  height="120%" width="120%" alt="Profile icon" />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={dat.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              // height="20%"
              // maxWidth="100%"
              height="auto"
              image={dat.imageUrl}
              // src={dat.image_url}
              // src={require("../public/static/assets/images/image1.jpg")} 
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="subtitle1" color="text.secondary">
                {dat.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<ThumbUpOutlinedIcon />} checkedIcon={<ThumbUpIcon />} />
              </IconButton>
              <IconButton aria-label="add to favorites">
                <Checkbox icon={<CommentOutlinedIcon />} checkedIcon={<CommentIcon />} />
              </IconButton>
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
          ))) : <div>No data available</div>

    } 
</>
  )
}
