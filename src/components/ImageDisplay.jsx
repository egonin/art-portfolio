import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import heic2any from 'heic2any';


const ImageDisplay = ({ src, alt }) => {
  console.log(src)
  const [imageSrc, setImageSrc] = useState(src);
  console.log(imageSrc)
  console.log('File type:', src.type);
  // const isImageFile = (file) => {
  //   const imageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp', 'image/svg+xml'];
  //   return file && imageTypes.includes(file.type);
  // };

  // console.log( isImageFile(src), "true if is an image, false if not")
  
  useEffect(() => {setImageSrc(src)
  },[src]
  )

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
      {src && (
        <img 
        src={src} 
        alt={alt} 
      //   onLoad={handleImageLoad}
        style={{ width: 'auto', height: '75vh', objectFit: 'contain' }}
        onError={(e) => console.error('Erreur de chargement de l\'image:', e)}
      />
      )}
    </Box>
  );
};

export default ImageDisplay;
