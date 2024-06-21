import Ratings from "../components/Ratings"
import { IoIosArrowDown } from "react-icons/io"

export default function BookDetail(){
    return(
        <main className="flex flex-col items-center mx-auto md:flex-row md: max-w-4xl gap-3 px-8">
            <div className="flex flex-col items-center gap-2">
            <img 
                src="https://m.media-amazon.com/images/I/710ULGj3jvL._AC_UF894,1000_QL80_.jpg" 
                alt=""
                className="w-60 md:w-[60vw] mx-auto my-8"/>
            <h1 className="text-2xl text-center">A game of Hearts and Heists</h1>
            <h2>Ruby Roe</h2>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start md:mt-[20vh]">
                <div className="md:ml-8 flex flex-col gap-3">
                    <Ratings/>
                    <button className="bg-green-400 py-1 px-4 rounded ">Want to read</button>
                    <p>Rate this book</p>
                </div>
                <div className="px-8">
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque sunt impedit harum corrupti ducimus quos eos, quidem molestiae aliquam. Explicabo, cum facere? Quo nulla ad sapiente officia provident minus!</p>
                    <button className="text-slate-600 font-semibold flex items-center gap-1">Show more <IoIosArrowDown /></button>
                </div>
                <ul className="flex gap-2 justify-center">
                    <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">Fantasy</li>
                    <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">Romance</li>
                    <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">LGBT</li>
                    <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">Adult</li>
                </ul>
            </div>
        </main>
    )
}