import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Search from '../components/Search';
import '../assets/styles/Home.scss';


const Home = ({ myList, trends, originals }) => {

 

  return ( 
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (

          <Carousel title="Mi lista">
            {myList.map(item => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>

      )}

        <Carousel title="Tendencias">
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>

        <Carousel title="Originales de Platfix">
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>

    </>
  );

}


const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);
