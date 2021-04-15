import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { searchList, getDataFilter} from "../actions";
import '../assets/styles/components/Search.scss';


const Search = (props) => {

  const { isHome } = props
  const inputStyle = classNames('input', {
    isHome,
  });
  const { match: { params } } = props;
  console.log(`INPUT VALUE EN SEARCH..${JSON.stringify(params)}`)

  return (
    <React.Fragment>
    <h1>Greeting page</h1>
    <p>
      {params.name}
    </p>
  </React.Fragment>
  );
}



Search.propTypes = {
  isHome: PropTypes.bool,
};

const mapDispatchToProps = {
  searchList
};

export default connect(null, mapDispatchToProps)(Search);