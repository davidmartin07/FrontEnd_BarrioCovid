import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VendedorMenu(props) {
  const [pedidos, setPedidos] = useState([
    { id: "1", comprador: "ninguno", productos: ['Television', 'Coche'] }, //De momento ha pedido 2 productos
    { id: "2", comprador: "ninguno", productos: ['Boligrafo'] } //De momento ha pedido 1 producto
  ]);

  const [productos, setProductos] = useState([
    { nombre: "Television", precio: '500'},
    { nombre: "Coche", precio: '280000'},
  ]);

  const[idVendedor, setIdVendedor]= useState(props.id)
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [nombreProducto, setNombreProducto] = useState('');  


  useEffect(() => {
    // Cargar los pedidos pendientes que me han hecho. PETICION GET
    axios.get(`/BarrioCovid/pendientes/${idVendedor}`) //pasamos la id del vendedor
      .then(response => {
        setPedidos(response.data); //ESto de JSON.stringify no es necesario
      })
      .catch(error => {
        console.log(error);
      });

    // Cargar los productos del catálogo que tengo en venta. PETICIÓN GET
    axios.get(`/BarrioCovid/productos/${idVendedor}`) //idVendedor
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  []);

  // Función para aceptar un pedido. PUT
  function aceptarPedido(idPedido) {
    // Realizar la petición HTTP para aceptar el pedido
    axios.put(`/BarrioCovid/pendientes/${idPedido}`, { estado: 'aceptado' })
      .then(response => {
        // Actualizar la lista de pedidos pendientes
        setPedidos(pedidos.filter(pedido => pedido.id !== idPedido));
      })
      .catch(error => {
        console.log(error);
      });
  }

  // Función para rechazar un pedido
  function rechazarPedido(idPedido) {
    axios.put(`/BarrioCovid/pendientes/${idPedido}`, { estado: 'rechazado' })
    .then(response => {
      // Actualizar la lista de pedidos pendientes
      setPedidos(pedidos.filter(pedido => pedido.id !== idPedido));
    })
    .catch(error => {
      console.log(error);
    });  }

  // Función para añadir un nuevo producto al catálogo. POST
  function agregarProducto(producto) {
    axios.post(`/BarrioCovid/productos/${idVendedor}`, { nombre: nombreProducto, precio: precio })
    .then(response => {
      // Actualizar la lista de productos del catálogo
      setProductos([...productos, response.data]);
      setNombreProducto('');
      setPrecio('');
    })
    .catch(error => {
      console.log(error);
    });
    }

  return (
    <div>
      <h1>Menú de Vendedor</h1>

      <h2>Pedidos pendientes:</h2>
      <ul>
        {pedidos.map(pedido => (
        <li key={pedido.id}>
          <p>Comprador: {pedido.comprador}</p>
          <p>Productos:</p>
          <ul>
            {pedido.productos.map(producto => (
              <li key={producto}>{producto}</li>
            ))}
          </ul>
          <button onClick={() => aceptarPedido(pedido.id)}>Aceptar</button>
          <button onClick={() => rechazarPedido(pedido.id)}>Rechazar</button>
        </li>
       ))}
      </ul>


      <h2>Catálogo de productos:</h2>
      <ul>
      {productos.map(producto => (
          <li key={producto.id}>
            <p>Nombre: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
          </li>
        ))}
      </ul>


      <h3>Agregar nuevo producto:</h3>
      <form onSubmit={agregarProducto}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombreProducto} onChange={e => setNombreProducto(e.target.value)} required />
          </div>
    <div>
      <label>Precio:</label>
      <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} required />
    </div>
    <button type="submit">Agregar</button>
  </form>
</div>
  );      
}

export default VendedorMenu;