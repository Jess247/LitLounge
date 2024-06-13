import {Link} from "react-router-dom"
import { FaBookOpen } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"

function Navigation() {
    const isHidden = true
    const isMobile = true
    const hideNav = "absolute -top-40 -left-60"

    return (
        <header className={`flex justify-between p-8`} >
            <div className="flex items-center gap-1">
                <FaBookOpen/> Lit<span>Longe</span>
            </div>
            <div>
                <button><RxHamburgerMenu size={25}/></button>
                <ul className={`flex gap-4 ${isHidden ? hideNav : null}  ${isMobile ? "flex-col mt-4  bg-red-50 w-full" : null}`}>
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
            </div>
        </header>
    )
}

export default Navigation