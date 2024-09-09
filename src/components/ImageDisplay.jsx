import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import heic2any from 'heic2any';


const ImageDisplay = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(src);
  console.log(imageSrc)

//   const handleImageLoad = () => {
//     console.log(src)
//     console.log(src.toLowerCase())
//     const isHeic = src.toLowerCase().endsWith('.heic');
//     console.log(isHeic)
//     if (isHeic) {
//       heic2any({ blob: imageSrc, toType: 'image/jpg' })
//         .then((result) => {
//           setImageSrc(result);
//         });
//     }
//   };

  return (
    <Box>
      {imageSrc && (
        <img 
          src={imageSrc} 
          alt={alt} 
        //   onLoad={handleImageLoad}
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      )}
    </Box>
  );
};

export default ImageDisplay;
