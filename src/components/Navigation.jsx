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
    }

    return (
        <header className={"flex justify-between items-center w-full p-8 sticky top-0 flex-wrap bg-white z-20 shadow"} >
            <p className="flex items-center gap-2"><FaBookOpen/>LitLonge</p>
            <nav className="w-1/3">
                <div className="hidden md:flex justify-between">
                    <NavLinks/>
                </div>
                <div className="md:hidden text-right">
                    <button onClick={toggle}>{isOpen ? <RxCross2 size={25}/> : <RxHamburgerMenu size={25}/>}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex flex-col items-center basis-full">
                    <NavLinks toggle={() => toggle()}/>
                </div>
            )}
        </header>
    )
}

export default Navigation