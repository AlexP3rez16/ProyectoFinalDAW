// Barra superior de navegación con el branding del sitio y los enlaces principales
import { NavLink, Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="topbar">
      <div className="wrapper topbar-inner">
        {/* Logo / marca que siempre regresa al inicio */}
        <Link className="brand" to="/">
          <span className="brand-badge">NL</span>
          <span>Hecho en Nuevo León</span>
        </Link>
      </div>

      {/* Navegación principal del sitio */}
      <nav className="primary">
        <ul className="nav-list">
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/categoria/alimentos">Alimentos</NavLink></li>
          <li><NavLink to="/emprendedores">Emprendedores</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
