import React, {useState, useEffect} from "react";
import "./home.css";
import { ImageList, ImageListItem, Box, Typography } from '@mui/material'
import data from "../data/data.json"

function Gallery({ selectedView }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      const visibleItemIndices = [currentIndex, (currentIndex + 1) % data.paintings.length];
      
      const preloadPromises = visibleItemIndices.map(index => 
        loadImage(data.paintings[index])
      );

      await Promise.all(preloadPromises);

      setIsLoading(false);
      setVisibleItems(visibleItemIndices.map(index => data.paintings[index]));
    };

    preloadImages();
  }, [currentIndex]);

  const loadImage = async (item) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load image: ${item.img_url}`));
      img.src = item.img_url;
    });
  };

  useEffect(() => {
    if (!isLoading) {
      console.log("All images loaded and visibleItems updated");
    }
  }, [isLoading]);

  return (
    <div className="background-container">
      {isLoading ? (
        <div/>
      ) : (
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
    )}
    </div>
  )
}


export default Gallery;
