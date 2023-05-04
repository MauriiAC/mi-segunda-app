import { NavLink } from "react-router-dom"
import './NavBar.css'
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

export const NavBar = () => {

  const { user, login} = useContext(UserContext)

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' className='nav-link'>
            Coderhouse
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
        <li className="nav-item">
          <button onClick={login}>
            {
              user.id
              ?
              "Logout"
              :
              "Login"
            }
          </button>
        </li>
      </ul>
    </nav>
  )
}
