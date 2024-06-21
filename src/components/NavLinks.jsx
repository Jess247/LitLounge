import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"
import { doSignOut } from "../firebase/auth"

export default function NavLinks({toggle}) {

    const navigate = useNavigate()
    const {isAuthenticated} = useContext(AuthContext)

    return(<>
        <NavLink 
            onClick={toggle} 
            className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300"
                to="/">
                    Home
        </NavLink>
        <NavLink 
            onClick={toggle} 
            className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" 
                to="books">
                    My Books
        </NavLink>
       {isAuthenticated ? 
        <button 
            type="button"
            className="mt-3 vertical bg-slate-600 text-white px-3 py-1 rounded hover:bg-slate-500 hover:scale-x-105 duration-300"
            onClick={() => doSignOut().then(() => navigate("/"))}>
                Logout
        </button>: 
        <NavLink 
            onClick={toggle} 
            className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" 
                to="login">
                    Login
        </NavLink>}
    </>)
}