import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import axios from 'axios';

function LoginPage() {
  const [error, setError] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({ correoElectronico: '', contrasena: '' }); //Almacen correo y contraseña
  const navigate = useNavigate();// Importamos useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    
    // enviar la solicitud HTTP POST para verificar el inicio de sesión
    axios.post('http://localhost:8080/BarrioCovid/login', datosUsuario)
    .then(response => {
      console.log(response);
      if (response.status === 200 && response.data.hasOwnProperty('mensaje')) {
        switch (response.data.mensaje) {
          case "voluntario":
            navigate(`/VoluntarioMenu/${response.data.id}`);
            break;
          case "comprador":
            navigate("/seleccionarTienda");
            break;
          case "vendedor":
            navigate(`/VendedorMenu/${response.data.id}`);
            break;
          default:
            setError("El email o la contraseña son incorrectos");
            break;
        }
      } else {
        setError("No se pudo iniciar sesión");
        console.error(response);
      }
    })
      .catch(error => {
        console.error('Error al iniciar sesión', error);
        setError('Inicio de sesión fallido');
      });
  }; 


  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Correo electrónico:
          <input type="email" value={datosUsuario.correoElectronico} onChange={(event) => setDatosUsuario({ ...datosUsuario, correoElectronico: event.target.value })} required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={datosUsuario.contrasena} onChange={(event) => setDatosUsuario({ ...datosUsuario, contrasena: event.target.value })} required />
        </label>
        <br />
        <Link to={"/RegistroPage"}>
          <button id="registro" variant="primary">Crea una cuenta</button>
        </Link> 
        <button type="submit">Aceptar</button>
      </form>
      {error && <p>{error}</p>} {/* Mostramos el mensaje de error si existe */}  
    </div>
  );
}

export default LoginPage;