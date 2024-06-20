import { NavLink } from "react-router-dom"

export default function NavLinks({toggle}) {
    return(<>
<<<<<<< HEAD
        <NavLink onClick={toggle} className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300	" to="/">Home</NavLink>
        <NavLink onClick={toggle} className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" to="books">My Books</NavLink>
        <NavLink onClick={toggle} className="mt-4 font-semibold hover:scale-x-105 hover:text-gray-600 duration-300" to="login">Login</NavLink>
=======
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
>>>>>>> b107fd9e806a3a48b8b40966c2c5dfc94d2d721b
    </>)
}