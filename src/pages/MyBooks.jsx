import { useContext, useState } from "react"
import BookCard from "../components/BookCard"
import Hero from "../components/Hero"
import BookList from "../components/BookList"
import { MyBooksContext } from "../components/MyBooksProvider"

export default function MyBooks() {

    const {myBooks} = useContext(MyBooksContext)


    console.log(myBooks)
    return(<main>
        <Hero/>
        <section>
            <h1>My books</h1>
            <BookList>
                {myBooks.map(book => <BookCard title={book.volumeInfo.title} description={book.volumeInfo.description} author={book.volumeInfo.authors} genres={book.volumeInfo.categories} img={book.volumeInfo.imageLinks.thumbnail} id={book.id}/>)}
            </BookList>
        </section>
    </main>)
}