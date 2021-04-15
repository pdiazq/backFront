import React from 'react';
import '../assets/styles/components/CarouselItemimage.scss';


const Photo = (product) => {
  //let [mouseOut, countMouse]= useState(0)

  
  function functionZoom(){
    console.log ('mouse in')
    let img = document.getElementById("myimage")
    let result = document.getElementById("myresult")

    var lens, cx, cy;
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("id", "img-zoom-lens");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = `url(${img.src})`
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`
    //result.style.backgroundImage = "url('" + img.src + "')";
    //result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      /* Calculate the position of the lens: */
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      //x = -pos.x
      //y = -pos.y
      //x =  (lens.offsetWidth / 2)- pos.x 
      //y =  (lens.offsetHeight / 2)- pos.y
      //changeString(`${lens.offsetHeight}`)
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /* Set the position of the lens: */
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* Display what the lens "sees": */
      //result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
      result.style.backgroundPosition = `-${x*cx}px -${y*cy}px` 
      //var pepe = "-" + (x * cx) + "px -" + (y * cy) + "px"
      //console.log('result', pepe)
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      //changeString(`${a.left}, ${a.top}`)
      return {x, y};
    }
  }
  
  function mouseOut(){
    let img = document.getElementById("img-zoom-lens")
    console.log('mouse fuera')
    console.log('img', img)
  }
    
    return (
        <>
          <h1> posición x : </h1>
          <div id="parentElement" className="img-zoom-container">
              <img id="myimage" className="carousel-item__img" src={product.cover} alt={product.title} 
                onMouseOut={() => mouseOut()}
                onMouseEnter={() => functionZoom()} />
              <div id="myresult" className="img-zoom-result"></div>
          </div>

        </>
    )
}

export default Photo