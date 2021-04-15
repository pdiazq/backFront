import React, { useState , useEffect} from 'react';
import ListComment from '../components/ListComment'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from "react-router-dom";
import { comment, sendComment, getComments} from "../actions";
import '../assets/styles/components/Comment.scss';



const Comment = (props) => {

  const {product, user ,isHome } = props
  const [comments, setComment]= useState(product.comments || [])
  const inputStyle = classNames('input', {
    isHome,
  });

  let history = useHistory();

  useEffect(() =>{
    if ( product.comments ) {
      getComments(product._id)
      .then(data => { 
        setComment (data.data.data.comments)
      })
      .catch(err => void(0))
    }
  })
  

  function keyPressed(event) {
    const comment = document.getElementById("myComment").value;
    if (event.keyCode === 13){
      sendComment(user.id, comment ,product._id)
      getComments(product._id)
      .then(data => { 
        setComment (data.data.data.comments)
        //console.log(JSON.stringify(data)) 
        //<Route exact path="/list/:comment" component={isLogged ? List : Login} />
        //history.push(`/list/${comment}`)
      })
    }
      //window.location.href = "/list";
  }

  function getInputValue(){
    // Selecting the input element and get its value 
    const comment = document.getElementById("myComment").value;
    sendComment(user.id, comment ,product._id)
    // Displaying the value
    //console.log('COMENTARIO!',product._id ,user.id);
    getComments(product._id)
    .then(data => { 
      //console.log('LOS COMMENTS SON:', JSON.stringify(data.data.data.comments)) 
      setComment (data.data.data.comments)
      //props.searchList(data);
    })
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Tienes un comentario?</h2>
      <input type="text" id="myComment" onKeyDown={keyPressed} className={inputStyle} placeholder="Comenta..." />
      <button type="button" onClick={getInputValue}>Publica tu comentario</button>
        
      <h1>Comentarios:</h1>
      {Object.values(comments).reverse().map(item => (
            <h2>{item}</h2>
          ))}
    </section>
  );
}

Comment.propTypes = {
  isHome: PropTypes.bool,
};

const mapStateToProps = state => {
  // el estado es todo lo que existe en memoria y va inicializado desde server??
  //console.log(`DESDE DETAILS STATE..... ${JSON.stringify(state.product)}`)
  return {
    product: state.product,
    user: state.user
  };
};


export default connect(mapStateToProps, null )(Comment);