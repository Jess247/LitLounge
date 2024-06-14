import { NavLink } from "react-router-dom"

export default function NavLinks() {
    return(<>
        <NavLink className="mt-4" to="/">Home</NavLink>
        <NavLink className="mt-4" to="discover">Discover</NavLink>
        <NavLink className="mt-4" to="books">My Books</NavLink>
        <NavLink className="mt-4" to="login">Login</NavLink>
    </>)
}