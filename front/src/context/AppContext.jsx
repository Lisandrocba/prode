import { createContext, useState } from "react";

export const MyContext = createContext([])

// eslint-disable-next-line react/prop-types
const AppContext = ({children}) => {
    const [userName, setUserName] = useState()
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [puntos, setPuntos] = useState(0)

    const values = {
        userName, 
        setUserName,
        puntos, 
        setPuntos,
        users, 
        setUsers,
        user, 
        setUser
    }

    return(
        <MyContext.Provider value={values}>
            {children}
        </MyContext.Provider>
    )
}

export default AppContext