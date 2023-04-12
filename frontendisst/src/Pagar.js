import React, { useState } from "react";

const Pagar = ({ carrito, vaciarCarrito }) => {
  const [direccionEnvio, setDireccionEnvio] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [total, setTotal] = useState(0);

  // Calcula el total del carrito
  const calcularTotal = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    setTotal(total);
  };

  // Actualiza la dirección de envío
  const actualizarDireccion = (e) => {
    setDireccionEnvio(e.target.value);
  };

  // Actualiza el método de pago
  const actualizarMetodoPago = (e) => {
    setMetodoPago(e.target.value);
  };

  // Procesa el pago y vacía el carrito
  const procesarPago = () => {
    // Realiza el proceso de pago...
    // Vacía el carrito
    vaciarCarrito();
    // Redirige a la página de confirmación
    // (No incluido en este ejemplo)
  };

  return (
    <div>
      <h2>Carrito de Compra</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto, index) => (
            <tr key={index}>
              <td>{producto.nombre}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.precio}</td>
              <td>{producto.precio * producto.cantidad}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">Total:</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h3>Dirección de Envío:</h3>
        <input type="text" value={direccionEnvio} onChange={actualizarDireccion} />
      </div>
      <div>
        <h3>Método de Pago:</h3>
        <input type="text" value={metodoPago} onChange={actualizarMetodoPago} />
      </div>
      <button onClick={calcularTotal}>Calcular Total</button>
      <button onClick={procesarPago}>Pagar</button>
    </div>
  );
};

export default Pagar;