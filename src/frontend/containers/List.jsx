import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Search from '../components/Search';
import '../assets/styles/Home.scss';


const List = ({mySearch ,...props}) => (
  <>
    <Header />
    <Search {...props} />
    <Categories title="Búsqueda">
      <Carousel>
        {mySearch.map(item => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
  </>
);

const mapStateToProps = state => {
  console.log(`LISTA ESTADO ${JSON.stringify(state.mySearch)}`)
  return {
    mySearch: state.mySearch
  };
};

export default connect(mapStateToProps, null)(List);