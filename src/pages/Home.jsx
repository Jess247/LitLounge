import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import BookList from "../components/BookList"
import BookCard from "../components/BookCard"
export default function Home() {
    return(
        <main>
            <Hero/>
            <BookList>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </BookList>
        </main>
    )
}
