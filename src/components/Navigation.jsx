import {Link} from "react-router-dom"
import { FaBookOpen } from "react-icons/fa6"

function Navigation() {
    return (
        <header >
            <div>
                <FaBookOpen/> Lit<span>Longe</span>
            </div>
            <ul className="flex">
            <Link
                to="/"
                >
                <li>Home</li>
            </Link>
            <Link
                to="books"
                >
                <li>my books</li>
            </Link>
            <Link
                to="login"
                >
                <li>Login</li>
            </Link>
        </ul>
        </header>
    )
}

export default Navigation