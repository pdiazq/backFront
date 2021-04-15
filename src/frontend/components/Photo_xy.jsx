import React from 'react';
import { useState, useEffect } from "react"
import '../assets/styles/components/CarouselItemimage.scss';


const Photo = (product) => {
    function mouse() {
        let img = document.getElementById("myimage");
        const updateMousePosition = ev => {
            console.log ('coor', ev.clientX, ev.clientY )
          };
        img.addEventListener("mousemove", updateMousePosition)
    }


    
    return (
        <>
            <div id="parentElement" className="img-zoom-container">
                <img id="myimage" className="carousel-item__img" src={product.cover} alt={product.title} onMouseOver={mouse} />
                <div id="myresult" className="img-zoom-result"></div>
            </div>
        </>
    )
}

export default Photo