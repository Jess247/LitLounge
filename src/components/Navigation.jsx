import {Link} from "react-router-dom"
import { FaBookOpen } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross2 } from "react-icons/rx"
import { useState } from "react"
import NavLinks from "./NavLinks"

function Navigation() {

    const [isOpen, setIsOpen] =  useState(false)

    function toggle() {
        setIsOpen(prevOpen => !prevOpen)
        console.log(isOpen)
    }

    return (
        <header className={"flex justify-between items-center w-full p-8 sticky top-0 flex-wrap"} >
            <p><FaBookOpen/>LitLonge</p>
            <nav className="w-1/3">
                <div className="hidden md:flex justify-between">
                    <NavLinks/>
                </div>
                <div className="md:hidden text-right">
                    <button onClick={toggle}>{isOpen ? <RxCross2 size={20}/> : <RxHamburgerMenu size={20}/>}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-center basis-full">
                    <NavLinks/>
                </div>
            )}
        </header>
    )
}

export default Navigation