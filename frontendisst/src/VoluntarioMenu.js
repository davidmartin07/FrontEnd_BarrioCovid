import React, { useState } from "react";
import axios from "axios";

const VoluntarioMenu = (props) => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      buyerName: "Ana García",
      address: "Calle Mayor 23",
      items: [{ name: "Leche", quantity: 2 }, { name: "Pan", quantity: 1 }],
      delivered: false,
    },
    {
      id: 2,
      buyerName: "Pedro Fernández",
      address: "Calle Gran Vía 45",
      items: [{ name: "Arroz", quantity: 1 }, { name: "Pasta", quantity: 2 }],
      delivered: true,
    },
  ]);
  const[idVoluntario, setIdVoluntario]= useState(props.id) //SPRINT 3

  const handleDeliveryConfirmation = (id) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, delivered: true };
      }
      return order;
    });
    setOrders(updatedOrders);

    axios.put(`http://localhost:3000/orders/${id}`, { delivered: true })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });    
  };

  return (
    <div>
      <h2>Lista de pedidos pendientes</h2>
      <table>
        <thead>
          <tr>
            <th>Comprador</th>
            <th>Dirección</th>
            <th>Productos</th>
            <th>Estado</th>
            <th>Confirmar entrega</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.buyerName}</td>
              <td>{order.address}</td>
              <td>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.name}>
                      {item.name} ({item.quantity})
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.delivered ? "Entregado" : "Pendiente"}</td>
              <td>
                {!order.delivered && (
                  <button onClick={() => handleDeliveryConfirmation(order.id)}>
                    Confirmar entrega
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoluntarioMenu;