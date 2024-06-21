import Ratings from "../components/Ratings"
import { IoIosArrowDown } from "react-icons/io"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { MyBooksContext } from "../components/MyBooksProvider"

export default function BookDetail(){

    const location = useLocation()
    const {books} = useContext(MyBooksContext) || []
    const currentBookId = location.pathname.split("/")[2]
    const currentBook = books.filter(book => book.id === currentBookId)
    return(
        <main className="flex flex-col items-center mx-auto md:flex-row md: max-w-4xl gap-3 px-8 mb-24">
            <div className="flex flex-col items-center gap-2">
            <img 
                src={currentBook[0].volumeInfo.imageLinks.thumbnail} 
                alt=""
                className="w-60 md:w-[60vw] mx-auto my-8"/>
            <h1 className="text-2xl text-center">{currentBook[0].volumeInfo.title}</h1>
            <h2>{currentBook[0].volumeInfo.authors}</h2>
            </div>
            <div className="flex flex-col items-center gap-3 md:items-start md:mt-[20vh]">
                <div className="md:ml-8 flex flex-col gap-3">
                    <Ratings/>
                    <button className="bg-green-400 py-1 px-4 rounded ">Want to read</button>
                    <p>Rate this book</p>
                </div>
                <div className="px-8">
                    <p >{currentBook[0].volumeInfo.description}</p>
                    <button className="text-slate-600 font-semibold flex items-center gap-1">Show more <IoIosArrowDown /></button>
                </div>
                <ul className="flex gap-2 justify-center self-start ml-6">
                    {currentBook[0].volumeInfo.categories.map((category, index) => <li key={index} className="bg-slate-100  px-4 py-1 rounded-lg font-semibold">{category}</li>)}
                </ul>
            </div>
        </main>
    )
}