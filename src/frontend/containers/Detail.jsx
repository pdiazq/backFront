import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { getVideoSource } from "../actions";
import '../assets/styles/components/Player.scss';
import Search from '../components/Search';
import PaypalBtn from '../components/PaypalBtn'
import NotFount from "./NotFount";



const Detail = (props) => {
  const {detail} = props
  const {user} = props

  console.log(`DESDE DETAILS..... ${JSON.stringify(detail)}`)

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
          <h1>Título: {detail.title}</h1>
          <h1>Año: {detail.year}</h1>
          <h1>Descripcion: {detail.description}</h1>
          <h1>Tags: {detail.tags}</h1>
      </div>

      <div>
        <div>Payment section</div>
        <PaypalBtn
            amount = {1}
            currency = {'USD'}
            onSuccess={paymentHandler}/>
      </div>
   
    </>
    )

}


const mapStateToProps = state => {
  return {
    detail: state.detail,
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Detail);