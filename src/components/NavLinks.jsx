import { NavLink } from "react-router-dom"

export default function NavLinks({toggle}) {
    return(<>
        <NavLink onClick={toggle} className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300	" to="/">Home</NavLink>
        <NavLink onClick={toggle} className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" to="books">My Books</NavLink>
        <NavLink onClick={toggle} className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" to="login">Login</NavLink>
    </>)
}