import BookCard from "./BookCard"

export default function DefaultList({children}) {
    return (
            <ul className="my-8">
                {children}
            </ul>
    )
}