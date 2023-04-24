import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ProductList = ({ props }) => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  //const tiendaId = new URLSearchParams(location.search).get('tienda');
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {                                           //Ahi va el id de la tienda
        //const response = await axios.get(`/BarrioCovid/tiendas/${props.id}/products`); 
        const response = await axios.get(`http://localhost:3001/tiendas/${props.id}/productos`); //petición GET a la API simulada
        console.log(response.data);
        //campos que necesitamos recibir=id,name,description,price
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, [props.id]);

  const handleAddToCart = (product) => {
    // implementar lógica para añadir el producto al carrito del comprador
  };

  return (
    <div>
      <h2>Productos:</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: {product.price}€</p>
          <button onClick={() => handleAddToCart(product)}>Añadir al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;