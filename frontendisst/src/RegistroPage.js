import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isComprador, setIsComprador] = useState(false);
  const [isVulnerable, setIsVulnerable] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [sellerName, setSellerName] = useState('');
  const navigate = useNavigate();
  
  const handleRegister = async () => {
    const userData = {
      name,
      email,
      password,
      address,
      zipCode,
      isComprador: false,
      isVulnerable: false, 
      isSeller: false,
      sellerName: '',
    };

    if (isSeller) {
      userData.isSeller = true;
      userData.sellerName = sellerName;
    }
    if (isComprador) {
      userData.isVulnerable = true;
    }
/* 
    // Enviar los datos del usuario a la base de datos
    try {
      const response = await axios.post('BarrioCovid/signup', userData);
      console.log(response.data); // Mostramos en la consola la respuesta de la API
    } catch (error) {
      console.error(error);
    } */
  
    const form = document.querySelector('form');
      
    form.addEventListener('submit', event => {
      //petición post 
      axios.post('/api/registro', userData)
        .then(response => {
          // Si la petición es exitosa, redireccionar al usuario a la página de inicio de sesión
          navigate("/");
        })
        .catch(error => {
          // Si hay un error, mostrar un mensaje de error al usuario
          console.error(error);
        });
    });
    


    setName('');
    setEmail('');
    setPassword('');
    setAddress('');
    setZipCode('');
    setIsVulnerable(false);
    setIsSeller(false);
    setSellerName('');
  }

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Correo:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <label>Código Postal:</label>
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
        </div>
        <div>
          <label>Soy Comprador:</label>
          <input type="checkbox" checked={isComprador} onChange={() => setIsComprador(!isComprador)} />
        </div>
        {isComprador && (
          <div>
            <label>Soy vulnerable:</label>
            <input type="checkbox" value={isVulnerable} onChange={() => setIsVulnerable(!isVulnerable)} />
          </div>
        )}
        <div>
          <label>Soy Vendedor:</label>
          <input type="checkbox" checked={isSeller} onChange={() => setIsSeller(!isSeller)} />
        </div>
        {isSeller && (
          <div>
            <label>Nombre del Comercio:</label>
            <input type="text" value={sellerName} onChange={(e) => setSellerName(e.target.value)} required />
          </div>
        )}
        <button type="submit" onClick={(e) => { e.preventDefault(); handleRegister(); }}>Registrarse</button>
      </form>
    </div>
  );
}

export default Register;