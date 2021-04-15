import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getVideoSource } from "../actions";
import '../assets/styles/components/Player.scss';
import Search from '../components/Search';
import PaypalBtn from '../components/PaypalBtn'
import Comment from '../components/Comment'
import NotFount from "./NotFount";



const Detail = (props) => {
  const {detail} = props
  const {user} = props

  console.log(`DESDE DETAILS..... ${JSON.stringify(detail)}`)
  console.log(`DESDE DETAILS USER..... ${JSON.stringify(user)}`)

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
        <img className="carousel-item__img" src={detail.cover} alt={detail.title} />
      </div>
      <div>
          <h1>Hola {user.name}</h1>
          <h1>Título: {detail.title}</h1>
          <h1>Año: {detail.year}</h1>
          <h1>Descripción: {detail.description}</h1>
          <h1>Tags: {detail.tags}</h1>
      </div>

      <div>
        <div>Payment section</div>
        <PaypalBtn
            amount = {1}
            currency = {'USD'}
            onSuccess={paymentHandler}/>
      </div>
        <div>Comments section</div>
      <Comment isHome />
   
    </>
    )

}


const mapStateToProps = state => {
  // el estado es todo lo que existe en memoria y va inicializado desde server??
  console.log(`DESDE DETAILS STATE..... ${JSON.stringify(state.detail)}`)
  return {
    detail: state.detail,
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Detail);