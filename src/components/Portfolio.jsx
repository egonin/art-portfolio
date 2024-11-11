import React, {useState} from "react";
import data from "../data/data.json"
import MyCarousel from "./Carousel";

function Portfolio({ selectedView }) {
    const [carouselIndex, setCarouselIndex] = useState(0);
    console.log("portfolio rendered")
    console.log(data)
    console.log(data.paintings[0]); // Logs the first item in the array
    console.log(data.paintings.length); // Logs the number of items in the array
    return (
        <div className="background-container">
        <MyCarousel items = {data.paintings}
        currentIndex={carouselIndex} 
        setCurrentIndex={setCarouselIndex}/>
    </div>
    )
    }
    
    export default Portfolio;