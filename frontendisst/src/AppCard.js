import React from 'react';
import logo from './logo.jpg';
import "./AppCard.css";
import {Link} from 'react-router-dom';

const AppCard = () => {
  return (
    <div className="app-card">
      <img src={logo} className="app-card__logo" />
      <Link to={"/seleccionarTienda"}><button className='botonInicio'>Inicio</button></Link>
      {/*<Link to={"/seleccionarTienda"}>*/}<button className='botonCerrar'>Cerrar Sesión</button>{/*</Link>*/}
    </div>
  );
};

export default AppCard;
