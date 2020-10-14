import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deteleFavorite } from "../actions";
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/remove-icon.png'
import { favoriteMovie } from "../actions";
import { deleteFavoriteMovie } from "../actions";



if (typeof document !== 'undefined') {
  try {
    var uId = ((document.cookie.match(' id=[a-z A-Z 0-9]+'))[0]).match('[a-z A-Z 0-9]{5,}')[0];
  } catch {}
  //let uId2=JSON.stringify(uId0)
  //var uIdo=uId2.match('[a-z A-Z 0-9]{5,}')[0]
  //var uId=JSON.stringify(uIdo)
}
console.log(`CARGANDO CAROUSEL ITEM  ${uId}`)





const CarouselItemList = (props) => {
  console.log( `CAROUSEL ITEM PROPS ${JSON.stringify(props)}`)
  //console.log (`USER ID = ${uId} MOVIE ID = ${id}`);
  const { id, _id, cover, title, year, contentRating, duration, isList, slug, source } = props;
  console.log(`Carousel Item.............:id  ${id}  _id  ${_id}`)
  const handleSetFavorite = () => {
    props.setFavorite({
      _id, cover, title, year, contentRating,
      duration, isList, slug, source
    });
    favoriteMovie(uId, _id)
    console.log (`ejecutando Set Favorite de Carousel Item!!!!!!!!!!!!${uId} ${_id}`);
  }
  const handleDeleteFavorite = (itemId) => {
    console.log (`ejecutando delete Favorite de Carousel Item!!!!!!!!!!!! usuario ${uId} Peli ${_id}, item id ${itemId}`);
    props.deteleFavorite(itemId);
    deleteFavoriteMovie(uId, _id)
  }
  //<a href={`/detail/${id}`}>
  return (

    <div className="carousel-item">
    <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          </Link>
          {!isList ? (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Reproducir"
              onClick={handleSetFavorite}
            />
          ) :
            (
              <img
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Quitar de mi lista"
                onClick={() => handleDeleteFavorite(_id)}
              />
            )
          }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
      </div>
    </div>
  );
}

CarouselItemList.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
  deteleFavorite: PropTypes.func,
  setFavorite: PropTypes.func,
};

const mapDispatchToProps = {
  setFavorite,
  deteleFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItemList);

