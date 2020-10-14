import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { logoutRequest } from "../actions";
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/eorganifin_Eorganic_H1_B.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;
  const HeaderClass = classNames('header', {
    isLogin,
    isRegister,
  });
  const handleLogout = () => {
    document.cookie = "email=";
    document.cookie = "name=";
    document.cookie = "id=";
    document.cookie = "token="
    props.logoutRequest({});
    window.location.href = '/login'
  };
  return (
    <header className={HeaderClass}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userIcon} alt="Usuario" />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? <li><a href="/">{user.name}</a></li> : null}
          {hasUser ? <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li> : <li><Link to="login">Iniciar Sesión</Link></li>}
        </ul>
      </div>


    <div className="nav-search-scope nav-sprite">
      <div className="nav-search-facade" data-value="search-alias=aps">
        <span className="nav-search-label">Todos</span>
        <i className="nav-icon"></i>
      </div>
      <span id="searchDropdownDescription">Selecciona el departamento donde deseas realizar tu búsqueda</span>
        <select
        aria-describedby="searchDropdownDescription"
        className="nav-search-dropdown searchSelect"
        data-nav-digest="TblzKLEKvPepHfxwBN/zXoGlYo8="
        data-nav-selected="0"
        id="searchDropdownBox"
        name="url"

        tabindex="0"
        title="Buscar en"
      >
          <option selected="selected" value="search-alias=aps">Todos los departamentos</option>
          <option value="search-alias=audible">Libros y Originales de Audible</option>
          <option value="search-alias=alexa-skills">Alexa Skills</option>
          <option value="search-alias=warehouse-deals">Amazon Warehouse</option>
          <option value="search-alias=appliances">Aparatos</option>
          <option value="search-alias=mobile-apps">Apps y Juegos</option>
          <option value="search-alias=arts-crafts">Arte, Manualidades y Costura</option>
          <option value="search-alias=automotive">Auto</option>
          <option value="search-alias=baby-products">Bebé</option>
          <option value="search-alias=beauty">Belleza</option>
          <option value="search-alias=mobile">Celulares y Accesorios</option>
          <option value="search-alias=amazon-devices">Dispositivos Amazon</option>
          <option value="search-alias=stripbooks">Libros</option>
          <option value="search-alias=popular">Música</option>
          <option value="search-alias=fashion">Ropa, Calzado y Joyería</option>
          <option value="search-alias=fashion-womens">   Mujeres</option>
          <option value="search-alias=fashion-mens">   Hombres</option>
          <option value="search-alias=fashion-girls">   Niñas</option>
          <option value="search-alias=fashion-boys">   Niños</option>
          <option value="search-alias=fashion-baby">   Bebé</option>
          <option value="search-alias=prime-exclusive">Ahorros de Prime Exclusive</option>
          <option value="search-alias=grocery">Alimentos y Productos Gourmet</option>
          <option value="search-alias=pantry">Amazon Pantry</option>
          <option value="search-alias=luxury-beauty">Belleza Premium</option>
          <option value="search-alias=subscribe-with-amazon">Campos de suscripción</option>
          <option value="search-alias=smart-home">Casa Inteligente</option>
          <option value="search-alias=movies-tv">Cine y TV</option>
          <option value="search-alias=computers">Computadoras</option>
          <option value="search-alias=courses">Cursos</option>
          <option value="search-alias=sporting">Deportes y Aire libre</option>
          <option value="search-alias=electronics">Electrónicos</option>
          <option value="search-alias=fashion-luggage">Equipaje para Viajar</option>
          <option value="search-alias=handmade">Handmade</option>
          <option value="search-alias=tools">Herramientas y Mejora del hogar</option>
          <option value="search-alias=garden">Hogar y cocina</option>
          <option value="search-alias=industrial">Industria y ciencia</option>
          <option value="search-alias=mi">Instrumentos Musicales</option>
          <option value="search-alias=lawngarden">Jardín y Exteriores</option>
          <option value="search-alias=toys-and-games">Juguetes y Juegos de Mesa</option>
          <option value="search-alias=pets">Mascotas</option>
          <option value="search-alias=under-ten-dollars">Menos de $10</option>
          <option value="search-alias=digital-music">Música MP3 </option>
          <option value="search-alias=collectibles">Objetos coleccionables</option>
          <option value="search-alias=instant-video">Prime Video</option>
          <option value="search-alias=office-products">Productos y suministros de oficina</option>
          <option value="search-alias=edu-alt-content">Recursos educativos digitales</option>
          <option value="search-alias=hpc">Salud y cuidado personal</option>
          <option value="search-alias=local-services">Servicios para el Hogar</option>
          <option value="search-alias=software">Software</option>
          <option value="search-alias=magazines">Suscripción a Revistas</option>
          <option value="search-alias=financial">Tarjetas de crédito</option>
          <option value="search-alias=gift-cards">Tarjetas de regalo</option>
          <option value="search-alias=digital-text">Tienda Kindle</option>
          <option value="search-alias=unionsquarewine">unionsquarewine</option>
          <option value="search-alias=vehicles">Vehículos</option>
          <option value="search-alias=videogames">Videojuegos</option>
          <option value="search-alias=wholefoods">Whole Foods Market</option>
      </select>
    </div>


    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
  logoutRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);