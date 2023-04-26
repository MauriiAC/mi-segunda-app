import { NavLink } from "react-router-dom"
import './NavBar.css'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className='nav-link'>
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/products' className='nav-link'>
            Productos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/sobre-nosotros' className='nav-link'>
            Sobre Nosotros
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
