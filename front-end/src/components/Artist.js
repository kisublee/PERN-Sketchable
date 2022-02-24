import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import NonFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


export default function Artist({ post }) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card
        sx={{
          mt: 5,

          maxWidth: 600,
          maxHeight: 680,
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          <Link to={`detail/${post.id}`}>
            {post.service_images ? (
              <CardMedia
                component="img"
                height="350"
                image={post.service_images[1]}
                alt={post.name}
                sx={{
                  "&:hover": {
                    backgroundColor: "info.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            ) : (
              <CardMedia
                component="img"
                height="350"
                // post={NotFoundImage}
                alt={post.name}
              />
            )}
          </Link>
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              fontSize={16}
              component="div"
              sx={{ height: 20 }}
            >
              Artist: {post.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              fontSize={16}
              component="div"
              sx={{ height: 30 }}
            >
              Specialty: {post.art_type}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: 200, overflow: "scroll" }}
            >
              Services: {post.services}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{display:"flex"}}
            >
             Can travel: {post.can_travel ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon />}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {/* {!post.can_travel ? <NonFavoriteIcon /> : <FavoriteIcon />} */}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
