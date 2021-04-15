import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useHistory } from "react-router-dom";
import { searchList, getDataFilter} from "../actions";
import '../assets/styles/components/Search.scss';


const Search = (props) => {
  const { match: { params } } = props;
  
  const { isHome } = props
  const inputStyle = classNames('input', {
    isHome,
  });

  let history = useHistory();
  console.log(`INPUT VALUE EN SEARCH..${params.inputVal}`)
  

  function keyPressed(event) {
    const inputVal = document.getElementById("myText").value;
    if (event.keyCode === 13){
      getDataFilter(inputVal)
      .then(data => { 
        console.log(JSON.stringify(data)) 
        props.searchList(data);
        //<Route exact path="/list/:inputVal" component={isLogged ? List : Login} />
        history.push(`/list/${inputVal}`)
      })
    }
      //window.location.href = "/list";
  }

  function getInputValue(){
    // Selecting the input element and get its value 
    const inputVal = document.getElementById("myText").value;
    // Displaying the value
    //console.log(inputVal);
    getDataFilter(inputVal)
    .then((data) => {
      props.searchList(data);
      history.push(`/list/${inputVal}`)
      //const payload = data.data
      //console.log (`EL DATA SE ENVIO DESDE .THEN getDataFilter ${JSON.stringify(payload)}`)
    })
    //props.searchList(filterList)
    //window.location.href = "/list";
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" id="myText" onKeyDown={keyPressed} className={inputStyle} placeholder="Buscar..." />
      <button type="button" onClick={getInputValue}>Search</button>
    </section>
  );
}

Search.propTypes = {
  isHome: PropTypes.bool,
};

const mapDispatchToProps = {
  searchList
};

export default connect(null, mapDispatchToProps)(Search);