import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Carousel.scss';


const Carousel = ({title, children }) => {
  const [toShow, setShow]= useState([])
  const [count, setCount] = useState(1)
  

  

  useEffect(() =>{
    if (title === 'Mi lista') {
      const childrenA = children.slice(0, count);
      setShow(childrenA)
      console.log(`Counter ${toShow}`)
    }
  }, [count])



  
  function left(){
    console.log(`PERROS`)
  }


  

  return (
  <>
    <div className="carousel">
      <div className="carousel__container">
        <div className="Categories">
          <h3 className="categories__title">{title}</h3>
          {title === 'Mi lista' ? toShow: children}
        </div>
      </div>
    </div>
    <section>
      <button onClick={left}>Izquierda</button>

    </section>
    <section>
      <button onClick={() => setCount(count + 1)}>Derecha</button>

    </section>
  </>
  );


}

export default Carousel;
