import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Carousel.scss';


const Carousel = ({title, children }) => {
  // useState es arreglo con dos posiciones [0] y [1]
  // [0] = variable a manejar por useState que se inicializa con el argumento de useState
  // [1] = función que actualiza la variable que recibe el valor de la nueva variable
  // [1] = las funciones (setShow, setCount) setter, hacen re-render del componente 

  const [toShow, setShow]= useState([])
  const [count, setCount] = useState(1)
  

  // useEffect. la call back function de useEffect se ejecuta apenas se hace render del componente.  async  
  // las funciones setter de useState hace re dendering del componente

  useEffect(() =>{
    if (title === 'Mi lista') {
      const childrenA = children.slice(0, count);
      setShow(childrenA)
      console.log(`Counter ${toShow}`)
    } // la variable luego de la ',' [count], sirve para limitar el la ejecución de useEffect solo cuando dicha variable cambia 
  }, [count])






  

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
      <button onClick={() => setCount(count-1)}>Izquierdadada</button>

    </section>
    <section>
      <button onClick={() => setCount(count+1)}>Derecha</button>

    </section>
  </>
  );


}

export default Carousel;
