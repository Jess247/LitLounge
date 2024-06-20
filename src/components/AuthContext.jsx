import { onAuthStateChanged } from "firebase/auth"
import { Children, createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase/firebase"


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser)

        return unsubscribe
    },[])

    async function initializeUser(user) {
        if(user) {
            setCurrentUser({...user})
            setIsAuthenticated(true)
        } else {
            setCurrentUser(null)
            setIsAuthenticated(false)
        }

        setLoading(false)
    }
   
    return (
        <AuthContext.Provider value={{isAuthenticated, currentUser, loading}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}


