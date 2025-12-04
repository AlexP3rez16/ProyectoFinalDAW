// src/App.jsx
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import CategoriaAlimentos from "./components/CategoriaAlimentos"
import Emprendedores from "./components/Emprendedores"
import ProductDetail from "./components/ProductDetail"

function App() {
  return (
    <>
      <Navbar />

      <main id="contenido" className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/alimentos" element={<CategoriaAlimentos />} />
          <Route path="/emprendedores" element={<Emprendedores />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
