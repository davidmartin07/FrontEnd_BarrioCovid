import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './CompradorTiendas.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.jpg';

function CompradorTiendas() {
  const [tiendas, setTiendas] = useState([
    { id: 1, nombre: 'Tienda 1', direccion: 'Calle Falsa 123', foto: "https://via.placeholder.com/150x150.png?text=Tienda+1", tipo: 'App'},
    { id: 2, nombre: 'Tienda 2', direccion: 'Avenida Siempreviva 742', foto: "https://via.placeholder.com/150x150.png?text=Tienda+2", tipo: 'App'},
    { id: 3, nombre: 'Tienda 3', direccion: 'Calle del Hambre 84', foto: "https://via.placeholder.com/150x150.png?text=Tienda+3", tipo: 'App'},
  ]);
  
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/ProductList/tienda=${id}`);
  };

  useEffect(() => {
    // Hacemos una petición GET a la API para obtener las tiendas
    //axios.get('BarrioCovid/tiendas') 
    axios.get('http://localhost:3001/tiendas')//petición GET a la API simulada
      .then(response => {
        // Si la petición es exitosa, actualizamos el estado con los datos recibidos
        setTiendas(response.data);
      })
      .catch(error => {
        // Si hay un error, lo mostramos en la consola
        console.error(error);
      });
  }, 
  []);

  return (
    <div>
      <h2 className="selecciona-tienda" style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: "center"}}>Selecciona tu tienda más cercana:</h2>
      <ul style={{display: "flex", flexWrap: "wrap", alignItems: "center"}}>
        {tiendas.map((tienda) => (
          <li key={tienda.id} className='store' style={{width: "50%", marginBottom: "80px"}}>
            <h2><img src='./logo.jpg'></img></h2>
            <h2>{tienda.nombre}</h2>
            <p>Direccion:{tienda.direccion}</p>
            <p>Tipo de servicio:{tienda.tipo}</p>
            {/*<Link to={"/ProductList/tienda="+tienda.id}>
              <button>Seleccionar</button>
        </Link>*/}
            <button onClick={() => handleClick(tienda.id)}>Seleccionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompradorTiendas;