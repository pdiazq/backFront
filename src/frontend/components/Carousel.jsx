import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Carousel.scss';


const Carousel = ({title, children }) => {
  // useState es arreglo con dos posiciones [0] y [1]
  // [0] = variable a manejar por useState que se inicializa con el argumento de useState
  // [1] = función que actualiza la variable que recibe el valor de la nueva variable
  // [1] = las funciones (setShow, setCount) setter, hacen re-render del componente 
  // 'toShow' mas abajo en JSX es el que finalmente se renderea mas no children
  const [toShow, setShow]= useState([])
  const [count, setSlide] = useState(0)
  

  // useEffect. la call back function de useEffect se ejecuta apenas se hace render del componente.  async  
  // las funciones setter de useState hace re dendering del componente

  useEffect(() =>{
    const childrenA = children.slice(0+count, 6+count);
    if (count < 0) {
      setSlide(0)
    }
    if (count >= children.length) {
      setSlide(children.length-1)
    }
    setShow(childrenA)
    
  // la variable luego de la ',' [count], sirve para limitar el la ejecución de useEffect solo cuando dicha variable cambia 
  }, [count])

  return (
  <>
    <div className="carousel">
      <div className="carousel__container">
        <div className="Categories">
          <h3 className="categories__title">{title}</h3>
          {toShow}
          <button className="Left_button" onClick={() => setSlide(count-2)}>&lt;</button>
          <button className="Rigth_button" onClick={() => setSlide(count+2)}>&gt;</button>
        </div>
      </div>
    </div>
  </>
  );
}

export default Carousel;
