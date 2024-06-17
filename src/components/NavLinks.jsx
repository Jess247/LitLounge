import { NavLink } from "react-router-dom"

export default function NavLinks() {
    return(<>
        <NavLink className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300	" to="/">Home</NavLink>
        <NavLink className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" to="books">My Books</NavLink>
        <NavLink className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" to="login">Login</NavLink>
    </>)
}