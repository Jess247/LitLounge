import { NavLink } from "react-router-dom"

export default function NavLinks({toggle}) {
    return(<>
        <NavLink 
            className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" 
            to="/"
            onClick={toggle}>
                Home
            </NavLink>
        <NavLink 
            className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" 
            to="books"
            onClick={toggle}>
                My Books
        </NavLink>
        <NavLink 
            className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" 
            to="login"
            onClick={toggle}>
                Login
        </NavLink>
    </>)
}