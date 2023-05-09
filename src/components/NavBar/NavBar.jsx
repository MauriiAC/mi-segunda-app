import { NavLink } from "react-router-dom"
import './NavBar.css'
import { UserContext } from "../../context/UserContext"
import { useContext } from "react"

export const NavBar = () => {

  const { user, login, logout} = useContext(UserContext)

  const handleSession = () => {
    if(user.id) logout()
    else login()
  }

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
          <NavLink to='/tateti' className='nav-link'>
            Tateti
          </NavLink>
        </li>
        {
          user.id
          &&
          <li className="nav-item">
            {`Bienvenido ${user.name}`}
          </li>
        }
        <li className="nav-item">
          <button onClick={handleSession}>
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
