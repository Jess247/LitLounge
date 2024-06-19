import Ratings from "./Ratings"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import {BooksContext} from "../pages/Home"
import { MyBooksContext } from "./MyBooksProvider"
import MyBooks from "../pages/MyBooks"


export default function BookCard(props) {

    const {books} = useContext(BooksContext) || []// fix bug
    const {addBooks} = useContext(MyBooksContext)


    return(
        <section className=" w-4/5 h-full max-w-3xl shadow-2xl p-6 mx-auto mt-8 rounded-lg" >
            <Link to="books/1"
                className="flex flex-wrap gap-5 md:gap-8 lg:justify-between">
                <img src={props.img}
                    alt={props.title}
                    className="w-24 h-32 md:w-auto max-w-24 rounded "/>
                <h2 className="text-base w-32 md:text-lg font-semibold max-w-60 text-ellipsis">{props.title}</h2>
                <div className="flex flex-col gap-2 basis-60">
                    <h3 className="ml-4 italic">by {props.author}</h3>
                    <ul className="flex gap-2 text-sm ">
                        <h4>Genre:</h4>
                        {props.genres?.map(genre => <li className="">{genre}</li>)}
                    </ul>
                </div>
                <div className="flex gap-4 lg:flex-col w-30 items-center">
                    <Ratings/>
                    <button id={props.id} className=" bg-green-400 py-1 px-4 rounded hover:text-white leading-tight" onClick={(event) => {
                            event.preventDefault()
                            const currentBook = books.filter(book => book.id === event.target.id)
                            console.log(currentBook)
                            addBooks(currentBook)
                        }} >Want to read</button>
                </div>
            </Link>
        </section>
    )
}


