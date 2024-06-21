import { createContext, useState } from "react"

export const MyBooksContext =  createContext()

export const MyBooksProvider = ({children}) => {
    const [myBooks, setMyBooks] = useState([])
    const [isBarHidden, setIsBarHidden] = useState(false)
    const [query, setQuery] = useState("trending")

    function addBooks(book){
        setMyBooks(prevBooks => [...prevBooks, ...book])
    }

    return (
        <MyBooksContext.Provider value={{myBooks, addBooks, query, setQuery, isBarHidden,setIsBarHidden}}>
            {children}
        </MyBooksContext.Provider>
    )
}