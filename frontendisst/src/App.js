import { useState, useEffect } from "react";
import './App.css';
import LoginPage from './LoginPage';
import VoluntarioMenu from "./VoluntarioMenu";
import VendedorMenu from "./VendedorMenu";
import CompradorTiendas from './CompradorTiendas';
import RegistroPage from './RegistroPage';
import Pagar from "./Pagar";
import ProductList from "./ProductList";
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const { idVendedor } = useParams();
  const { idVoluntario } = useParams();
  const { idTienda } = useParams();

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

    fetchData();
  }, [idVendedor, idVoluntario, idTienda]);

  return (
    <div className="App">
      {loading ? (
        <Spinner id="loading" className="spinner" animation="border" size="sm" />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route path="/RegistroPage" element={<RegistroPage />} />

            <Route path="/seleccionarTienda" element={<CompradorTiendas />} />
            <Route path="/ProductList/tienda=:tiendaId" element={<ProductList id={idTienda}/>} />
            <Route path="/Pagar" element={<Pagar />} />

            <Route path="/VendedorMenu/:idVendedor" element={<VendedorMenu id={idVendedor}/>} />
            
            <Route path="/VoluntarioMenu/:idVoluntario" element={<VoluntarioMenu id={idVoluntario}/>} />

          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

