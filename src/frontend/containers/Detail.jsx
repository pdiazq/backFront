import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
<<<<<<< HEAD
import Photo from '../components/Photo'
=======
>>>>>>> b2678cf0259f72468b27d5ff9d2020a794050e23
import { getVideoSource } from "../actions";
import '../assets/styles/components/Player.scss';
import Search from '../components/Search';
import PaypalBtn from '../components/PaypalBtn'
<<<<<<< HEAD
import Comment from '../components/Comment'
=======
>>>>>>> b2678cf0259f72468b27d5ff9d2020a794050e23
import NotFount from "./NotFount";



const Detail = (props) => {
<<<<<<< HEAD
  const {product, user} = props

  console.log(`DESDE DETAILS..... ${JSON.stringify(product)}`)
  console.log(`DESDE DETAILS USER..... ${JSON.stringify(user)}`)
=======
  const {detail} = props
  const {user} = props

  console.log(`DESDE DETAILS..... ${JSON.stringify(detail)}`)
>>>>>>> b2678cf0259f72468b27d5ff9d2020a794050e23

  const paymentHandler = (details, data) => {
    /** Here you can call your backend API
      endpoint and update the database */
    alert(`${JSON.stringify(user.name)}, tu compra fué realizada :)`);
    console.log(details, data);
  }

  
  return (
    <>
      <Header />
      <Search isHome />
      <div>
<<<<<<< HEAD
        <Photo {...product} />
      </div>
      <div>
          <h1>Hola {user.name}</h1>
          <h1>Título: {product.title}</h1>
          <h1>Año: {product.year}</h1>
          <h1>Descripción: {product.description}</h1>
          <h1>Tags: {product.tags}</h1>
=======
        <img className="carousel-item__img" src={detail.cover} alt={detail.title} />
      </div>
      <div>
          <h1>Título: {detail.title}</h1>
          <h1>Año: {detail.year}</h1>
          <h1>Descripcion: {detail.description}</h1>
          <h1>Tags: {detail.tags}</h1>
>>>>>>> b2678cf0259f72468b27d5ff9d2020a794050e23
      </div>

      <div>
        <div>Payment section</div>
        <PaypalBtn
            amount = {1}
            currency = {'USD'}
            onSuccess={paymentHandler}/>
      </div>
<<<<<<< HEAD
        <div>Comments section</div>
      <Comment isHome />
=======
>>>>>>> b2678cf0259f72468b27d5ff9d2020a794050e23
   
    </>
    )

}


const mapStateToProps = state => {
<<<<<<< HEAD
  // el estado es todo lo que existe en memoria y va inicializado desde server??
  console.log(`DESDE DETAILS STATE..... ${JSON.stringify(state.product)}`)
  return {
    product: state.product,
=======
  return {
    detail: state.detail,
>>>>>>> b2678cf0259f72468b27d5ff9d2020a794050e23
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Detail);