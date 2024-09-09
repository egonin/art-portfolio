import React from "react";
import data from "../data/data.json"
import Carousel from "./Carousel";

function Portfolio({ selectedView }) {
    console.log("portfolio rendered")
    console.log(data)
    console.log(data.paintings[0]); // Logs the first item in the array
    console.log(data.paintings.length); // Logs the number of items in the array
    return (
        <div className="background-container">
        <Carousel items = {data.paintings}></Carousel>
    </div>
    )
    }
    
    export default Portfolio;