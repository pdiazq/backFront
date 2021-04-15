import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const cambio = e => {
    console.log (e)
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" id="myText" className={inputStyle} placeholder="Buscar..." onChange={cambio} />
    </section>
  );
}

Search.propTypes = {
  isHome: PropTypes.bool,
};

export default Search;