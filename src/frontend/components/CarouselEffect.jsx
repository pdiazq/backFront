import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Carousel.scss';


const Carousel = ({title, children }) => {
  const [toShow, setShow]= useState([])
  

  

  useEffect(() =>{
    if (title === "Mi lista") {
      const childrenA = children.slice(0, 3);
      setShow(childrenA)
    }
  }, [])


  function rigth(){
    const l= Object.keys(toShow).length 
    console.log(`TOSHOW ${(l)}`)
  }
  
  function left(){
    console.log(`PERROS`)
  }


  

  return (
  <>
    <div className="carousel">
      <div className="carousel__container">
        <div className="Categories">
          <h3 className="categories__title">{title}</h3>
          {toShow}
        </div>
      </div>
    </div>
    <section>
      <button onClick={left}>Izquierda</button>

    </section>
    <section>
      <button onClick={rigth}>Derecha</button>

    </section>
  </>
  );


}

export default Carousel;
