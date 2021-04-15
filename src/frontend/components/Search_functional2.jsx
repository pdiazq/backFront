import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { searchList, getDataFilter}  from "../actions";
import '../assets/styles/components/Search.scss';

class Search extends Component{
  constructor(props){
    super(props)
    if (props ) {
      //const { match: { params } } = props;
      console.log(`INPUT VALUE EN SEARCH..${JSON.stringify(props)}`)
  
    }
    const { isHome } = props
    this.inputStyle = classNames('input', {
      isHome
    });
  }


  keyPressed(event) {
    this.inputVal = this.myText.current.value;
    console.log(JSON.stringify(this.inputVal)) 
  }



  render( ) {
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" ref={this.myText} onKeyDown={this.keyPressed} className={this.inputStyle} placeholder="Buscar..." />
      <button type="button" onClick={this.getInputValue}>Get Value</button>
    </section>
  );
  }

}

Search.propTypes = {
  isHome: PropTypes.bool,
};

const mapDispatchToProps = {
  searchList
};

export default connect(null, mapDispatchToProps)(Search);