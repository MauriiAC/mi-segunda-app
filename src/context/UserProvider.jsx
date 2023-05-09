import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const initialValue = {
    id: null,
    name: null,
    lastName: null,
    nick: null
  }

  const [user, setUser] = useState(initialValue)

  const login = () => setUser(
    {
      id: 123,
      name: "Mauricio",
      lastName: "Cuello",
      nick: "Maurii_AC"
    }
  )

  const logout = () => setUser(
    initialValue
  )

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
