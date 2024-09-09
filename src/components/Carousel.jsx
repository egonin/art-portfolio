import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageDisplay from './ImageDisplay';


const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  {items.map((item, index) => (console.log(item.img_url)))}
  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.3s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <Box key={index} sx={{ width: '100%' }}>
            {/* src={item.img_url} */}
            <ImageDisplay src={item.img_url} alt={item.title} />
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        ))}
      </Box>
      <IconButton onClick={goToPreviousSlide} sx={{ position: 'absolute', top: 10, left: 10 }}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton onClick={goToNextSlide} sx={{ position: 'absolute', top: 10, right: 10 }}>
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
