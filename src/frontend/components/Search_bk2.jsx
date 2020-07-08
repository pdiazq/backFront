import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

class Search extends Component{
  constructor ({ isHome }) {

      const inputStyle = classNames('input', {
        isHome,
      });

  }

    render () {
      return (
      <section className="main">
        <h2 className="main__title">¿Qué quieres ver hoy?</h2>
        <input type="text" id="myText" className={inputStyle} placeholder="Buscar..." />
      </section>
    );
  }
 
}
    Search.propTypes = {
      isHome: PropTypes.bool,
    };



export default Search;