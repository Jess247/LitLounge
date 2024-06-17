import { useEffect, useState, createContext } from "react";
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BookList from "../components/BookList"
import BookCard from "../components/BookCard"

const BooksContext = createContext()

export default function Home() {

    const [query, setQuery] = useState("trending")
    const [books, setBooks] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            try{
                const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                const data = await res.json()
                setBooks(data.items)
            } catch(e){
                console.log(e)
            }
        } 

        fetchData()
    },[query])



    return(
        <main>
            <BooksContext.Provider value={{books}}>
                <Hero setQuery={setQuery}/>
                <BookList>
                    {books?.map(book=> <BookCard title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors} genres={book.volumeInfo.categories} img={book.volumeInfo.imageLinks.thumbnail} id={book.id}/>)}
                </BookList>
            </BooksContext.Provider>
        </main>
    )
}


export {BooksContext}