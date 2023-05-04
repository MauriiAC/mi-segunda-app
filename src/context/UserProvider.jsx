import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {

  const [user, setUser] = useState({
    id: null,
    name: null,
    lastName: null,
    nick: null
  })

  const login = () => setUser(
    {
      id: 123,
      name: "Mauriio",
      lastName: "Cuello",
      nick: "Maurii_AC"
    }
  )

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  )
}
