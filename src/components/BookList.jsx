import BookCard from "./BookCard"

export default function DefaultList({children}) {
    return (
            <ul className="mb-24">
                {children}
            </ul>
    )
}