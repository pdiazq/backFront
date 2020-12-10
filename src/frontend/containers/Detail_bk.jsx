import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Search from '../components/Search';
import '../assets/styles/Home.scss';


const Home = ({ myList, trends, originals }) => (
  <>
    <Header />
    <Search isHome />
    {myList.length > 0 && (
      <Categories title="Mi lista">
        <Carousel>
          {myList.map(item => (
            <CarouselItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
    )}
  </>
);

const mapStateToProps = state => {
  return {
    myList: state.myList,
  };
};

export default connect(mapStateToProps, null)(Home);
