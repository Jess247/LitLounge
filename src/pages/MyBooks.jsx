import BookCard from "../components/BookCard"
import Hero from "../components/Hero"
import BookList from "../components/BookList"

export default function MyBooks() {
    return(<main>
        <Hero/>
        <section>
            <h1>My books</h1>
            <BookList>
                
            </BookList>
        </section>
    </main>)
}