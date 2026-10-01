import Layout from "./components/layout/Layout.jsx"
import Inicio from "./Inicio.jsx"
import ProductosListContainer from "./components/products/ProductosListContainer.jsx"
import DetalleProductoContainer from "./components/products/DetalleProductoContainer.jsx"
import { Routes, Route } from 'react-router-dom';
import "./App.css"

function App() {

  return (
    <Routes>
      <Route element={<Layout />} >
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosListContainer />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        <Route path="/carrito" element={<h1>El Carrito</h1>} />
        <Route path="/productos/:id" element={<DetalleProductoContainer />} />
      </Route>
    </Routes>
  )
}

export default App
