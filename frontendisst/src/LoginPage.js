import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";
import axios from 'axios';

function LoginPage() {
  const [error, setError] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({ email: '', password: '' }); //Almacen correo y contraseña
  const navigate = useNavigate();// Importamos useNavigate

  const handleLogin = (event) => {
    event.preventDefault();

    // enviar la solicitud HTTP POST para verificar el inicio de sesión
    axios.post('/BarrioCovid/login', datosUsuario)
      .then(response => {
        if (response.status === 200 && response.data.mensaje==="voluntario") { //Correo y contraseña correctos 
              navigate(`/VoluntarioMenu/${response.data.id}`);

        } else  if(response.status === 200 && response.data.mensaje==="comprador") {
          navigate("/seleccionarTienda"); 

        } else if(response.status === 200 && response.data.mensaje==="vendedor") {
              navigate(`/VendedorMenu/${response.data.id}`);
        
        } else {
          setError("El email o la contraseña son incorrectos");
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
          <input type="email" value={datosUsuario.email} onChange={(event) => setDatosUsuario.email(event.target.value)} required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={datosUsuario.password} onChange={(event) => setDatosUsuario.password(event.target.value)} required />
        </label>
        <br />
        <Link to={"/RegistroPage"}>
          <button id="registro" variant="primary">Crea una cuenta</button>
        </Link> 
        <form><button type="submit">Aceptar</button> </form>
        {error && <p>{error}</p>} {/* Mostramos el mensaje de error si existe */}  

      </form>
    </div>
  );
}

export default LoginPage;