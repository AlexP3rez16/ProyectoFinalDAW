import { NavLink, Link } from "react-router-dom"

function Navbar() {
  return (
    <header className="topbar">
      <div className="wrapper topbar-inner">
        <Link className="brand" to="/">
          <span className="brand-badge">NL</span>
          <span>Hecho en Nuevo León</span>
        </Link>
      </div>

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
