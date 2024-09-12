import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageDisplay from './ImageDisplay';
import StackCarousel from './StackCarousel';


const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [currentVisibleItems, setCurrentVisibleItems] = useState([]);

  // useEffect(() => {
  //   const newVisibleItems = renderItems();
  //   setCurrentVisibleItems(newVisibleItems);
  // }, [currentIndex]);

  const goToPreviousSlide = () => {
    // setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const goToNextSlide = () => {
    // setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const renderItems = (items) => {
    let visibleItems = [];
    let index = currentIndex;
    // Push the current configuration
    visibleItems.push(items[index], items[index+1]);
    // return visibleItems;
    // Vérifiez que vous avez toujours au moins deux éléments
    console.log("Visible items :", visibleItems)
    return visibleItems;
  };

  // const renderItems = () => {
  //   let visibleItems = [...currentVisibleItems]; // Copier l'état actuel de visibleItems
  //   let index = currentIndex;
  
  //   // Vérifiez si l'élément actuel est un paysage
  //   const isNewLandscape = items[index]?.landscape?.exists || false;
  
  //   // Si l'élément actuel est un paysage et que visibleItems contient déjà un paysage
  //   if (isNewLandscape && visibleItems.some(item => item.landscape?.exists)) {
  //     // Remplacer tous les éléments par le nouveau paysage
  //     visibleItems = [items[index]];
  //   } else {
  //     // Sinon, appliquer la logique normale pour afficher deux éléments
  //     if (!visibleItems.length) { // Si visibleItems est vide
  //       visibleItems.push(items[index]);
        
  //       // Trouver le prochain élément qui n'est pas un paysage
  //       let nextIndex = index + 1;
  //       while (nextIndex < items.length && !items[nextIndex]?.landscape?.exists) {
  //         nextIndex++;
  //       }
        
  //       if (nextIndex < items.length) {
  //         visibleItems.push(items[nextIndex]);
  //       }
  //     } else {
  //       // Si visibleItems n'est pas vide, remplacer son contenu
  //       visibleItems[0] = items[index];
  //       if (visibleItems.length === 3) {
  //         visibleItems.pop();
  //       }
  //     }
  //   }
  
  //   console.log('New Visible Items:', visibleItems);
  //   return visibleItems;
  // };

  return (
    <Box display={"flex"} flexDirection={"horizontal"} alignContent={"center"}
    sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <IconButton onClick={goToPreviousSlide} sx={{ position: 'absolute', top: "40vh", left: 10 }}>
        <NavigateBeforeIcon fontSize='large'/>
      </IconButton>
        {/* {items.map((item, index) => ( */}
        {renderItems(items).map((item, index) => (
          <Box className="HOLA-QUE-TAL" key={index} sx={{ width: '50%' }} marginLeft={2} marginRight={2}>
            {/* src={item.img_url} */}
            <StackCarousel item={item}/>
          </Box>
        ))}
      <IconButton onClick={goToNextSlide} sx={{ position: 'absolute', top: "40vh", right: 10}}>
        <NavigateNextIcon fontSize="large"/>
      </IconButton>
    </Box>
  );
};

export default Carousel;
