import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function CompradorTiendas() {
  const [tiendas, setTiendas] = useState([
    { id: 1, nombre: 'Tienda 1', direccion: 'Calle Falsa 123' },
    { id: 2, nombre: 'Tienda 2', direccion: 'Avenida Siempreviva 742' },
    { id: 3, nombre: 'Tienda 3', direccion: 'Calle del Hambre 84' },
  ]);


  useEffect(() => {
    // Hacemos una petición GET a la API para obtener las tiendas
    axios.get('BarrioCovid/tiendas')
      .then(response => {
        // Si la petición es exitosa, actualizamos el estado con los datos recibidos
        setTiendas(JSON.stringify(response.data));
      })
      .catch(error => {
        // Si hay un error, lo mostramos en la consola
        console.error(error);
      });
  }, 
  []);

  //const navigate = useNavigate();
  /* const handleTiendaSeleccionada = (tienda) => {
    setTiendaSeleccionada(tienda);
    navigate(`/ProductList?tienda=${tienda.id}`);
  }; */

  return (
    <div>
      <h1>Lista de tiendas</h1>
      <ul>
        {tiendas.map((tienda) => (
          <li key={tienda.id}>
            <h2>{tienda.nombre}</h2>
            <p>{tienda.direccion}</p>
            <Link to={"/ProductList/tienda="+tienda.id}> {/*Tienda o tiendas???? */}
              <button>Seleccionar</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompradorTiendas;