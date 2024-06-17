import { createContext, useState } from "react"

export const MyBooksContext =  createContext()

export const MyBooksProvider = ({children}) => {
    const [myBooks, setMyBooks] = useState([])

    const [query, setQuery] = useState("trending")

    function addBooks(book){
        setMyBooks(prevBooks => [...prevBooks, ...book])
        console.log(myBooks)
    }

    return (
        <MyBooksContext.Provider value={{myBooks, addBooks, query, setQuery}}>
            {children}
        </MyBooksContext.Provider>
    )
}