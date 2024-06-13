import Ratings from "./Ratings"
import { IoIosArrowDown } from "react-icons/io"

export default function BookDetail(){
    return(
        <main className="flex flex-col items-center mx-auto max-w-4xl gap-3">
            <img 
                src="https://m.media-amazon.com/images/I/710ULGj3jvL._AC_UF894,1000_QL80_.jpg" 
                alt=""
                className="w-60 mx-auto my-8"/>
            <h1 className="text-2xl text-center">A game of Hearts and Heists</h1>
            <h2>Ruby Roe</h2>
            <Ratings/>
            <button className="bg-green-400 py-1 px-4 rounded ">Want to read</button>
            <p>Rate this book</p>
            <div className="px-8">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque sunt impedit harum corrupti ducimus quos eos, quidem molestiae aliquam. Explicabo, cum facere? Quo nulla ad sapiente officia provident minus!</p>
                <button className="text-slate-600 font-semibold flex items-center gap-1">Show more <IoIosArrowDown /></button>
            </div>
            <ul className="flex gap-2">
                <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">Fantasy</li>
                <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">Romance</li>
                <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">LGBT</li>
                <li className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">Adult</li>
            </ul>
        </main>
    )
}