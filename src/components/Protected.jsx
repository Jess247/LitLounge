import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"

export default function Protected({element}) {
    const {isAuthenticated} = useContext(AuthContext)

    if(!isAuthenticated) {
        return <Navigate to="/login" replace/>
    } 

    return element
}