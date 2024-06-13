import Ratings from "./Ratings"
import { Link } from "react-router-dom"

export default function BookCard() {
    return(
        <section >
            <Link to="books/1"
                className="flex gap-8 w-4/5 max-w-3xl bg-slate-50 p-6 mx-auto mt-8 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/710ULGj3jvL._AC_UF894,1000_QL80_.jpg" 
                    alt="sample"
                    className="w-24"/>
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-semibold">A game of Hearts and Heists</h2>
                    <h3 className="ml-4 italic">by Ruby Roe</h3>
                    <p>Fantasy/Romance</p>
                </div>
                <div className="flex flex-col justify-around w-30 ">
                    <Ratings/>
                    <button className="bg-green-400 py-1 px-4 rounded ">Want to read</button>
                </div>
            </Link>
        </section>
    )
}