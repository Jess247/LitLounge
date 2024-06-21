import { useEffect, useState, createContext, useContext } from "react"
import { MyBooksContext } from "../components/MyBooksProvider"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BookList from "../components/BookList"
import BookCard from "../components/BookCard"

const BooksContext = createContext()

export default function Home() {

    const {addBooks, query, setQuery, setIsBarHidden, books, setBooks} = useContext(MyBooksContext)
    
    setIsBarHidden(false)
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
        <main className="mb-24">
            <BooksContext.Provider value={{books}}>
                <Hero setQuery={setQuery}/>
                <h1 className="text-3xl text-center font-semibold mt-8 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-fuchsia-600 after:mt-2 after:mx-auto after:rounded-xl uppercase">Books you might like</h1>
                <BookList>
                    {books?.map(book=> <BookCard title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors} genres={book.volumeInfo.categories} img={book.volumeInfo.imageLinks?.thumbnail} id={book.id}  addBooks={addBooks}/>)}
                </BookList>
            </BooksContext.Provider>
        </main>
    )
}


export {BooksContext}