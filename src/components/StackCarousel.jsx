import React from "react";
import ImageDisplay from "./ImageDisplay";
import { Box, Typography } from "@mui/material";

function StackCarousel({item}) {

    console.log(item)
    if (item != undefined) 
        console.log(item.img_url)
  return ((item!=undefined) ?
    <Box display={"flex"} sx={{ width: '100%' }} flexDirection={"row"} alignContent={"center"} alignSelf={"center"}>
        <Box flexShrink={0} ><ImageDisplay src={item.img_url} alt={item.title} /></Box>
        <Box flexGrow={1} display="flex" sx={{ width: '50%' }} flexDirection={"column"} alignItems={"center"} alignSelf={"top"} marginLeft={5}>
            <Typography variant="h3" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"} top={10}>{item.title}</Typography>
            <Typography variant="h5" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"}>{item.artist}</Typography>
            <Typography variant="h6" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"center"}>- {item.date} -</Typography>
            <Typography variant="body1" fontFamily={"Abril FatFace"} color="rgba(241, 203, 213, 0.929)" textAlign={"justify"}>{item.description}</Typography>
        </Box>
    </Box>
    : <div/>
)
}


export default StackCarousel;
