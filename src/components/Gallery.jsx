import React from "react";
import "./home.css";
import { ImageList, ImageListItem, Box } from '@mui/material'
import data from "../data/data.json"

function Gallery({ selectedView }) {

  return (
    <div className="background-container">
      <Box sx={{ overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.paintings.map((item) => (
          <ImageListItem key={item.img_url}>
            <img
              srcSet={`${item.img_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img_url}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
    </div>
  )
}


export default Gallery;
