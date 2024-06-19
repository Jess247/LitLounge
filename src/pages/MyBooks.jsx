import { useContext, useState } from "react"
import BookCard from "../components/BookCard"
import Hero from "../components/Hero"
import BookList from "../components/BookList"
import { MyBooksContext } from "../components/MyBooksProvider"
import MyBooksEmpty from "../components/MyBooksEmpty"

export default function MyBooks() {

    const {myBooks, setIsBarHidden} = useContext(MyBooksContext)
    setIsBarHidden(true)

    return(<main className="mb-24">
        <Hero/>
        <section className="text-center">
            <h1 className="text-2xl font-semibold mt-8 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-fuchsia-600 after:mt-2 after:mx-auto after:rounded-xl uppercase">My books</h1>
            {myBooks.length > 0 ?
                <BookList>
                    {myBooks.map(book => <BookCard title={book.volumeInfo.title} 
                        description={book.volumeInfo.description} 
                        author={book.volumeInfo.authors} 
                        genres={book.volumeInfo.categories} 
                        img={book.volumeInfo.imageLinks.thumbnail} 
                        id={book.id}/>)}
                </BookList> 
                : <MyBooksEmpty size={40}/>}
        </section>
    </main>)
}