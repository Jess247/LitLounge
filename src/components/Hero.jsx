import hero from '../assets/hero.jpg'
import { useState, useContext } from 'react'
import { MyBooksContext } from './MyBooksProvider'

function Hero({setQuery}) {
    const [inputValue, setInputValue] = useState("")
    const [text, setText] = useState("")

    const inputEl = document.querySelector("input")

    const {isBarHidden, setIsBarHidden} = useContext(MyBooksContext) 

    function handleClick() {
        setText(inputValue)
        setQuery(text)
        inputEl.value = ""
    }

    return (
        <section 
            className={` bg-gray-600 h-[40vh] overflow-hidden filter bg-blend-overlay`}
            style={{
                backgroundImage: `url(${hero})`, 
                backgroundPosition: "center", 
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
<<<<<<< HEAD
            {isBarHidden ? null :
                <div className='bg-slate-50 h-10 z-10 relative top-[25vh] left-1/2 -translate-x-1/2 w-2/3 pl-2 rounded-3xl gap-2 flex max-w-4xl'>
                    <label 
                        htmlFor="search"
                        className='opacity-0 absolute'>
                        Search books
                    </label>
                    <input
                        type="text" 
                        id="search"
                        placeholder='Author, Title, Keyword...'
                        className='font-light text-sm pl-3 p-1 bg-transparent w-full border-none'
                        onChange={() => setInputValue(inputEl.value.toLocaleLowerCase().split(" ").join("+"))}/>
                    <button 
                        className='bg-slate-200 h-full py-2 px-4 rounded-r-3xl font-bold hover:bg-slate-300'
                        onClick={handleClick}>
                        Search
                    </button>
                </div>}
=======
            <div className='bg-slate-50 h-10 z-10 relative top-[25vh] left-1/2 -translate-x-1/2 w-2/3 pl-2 rounded-3xl gap-2 flex max-w-4xl'>
                <label 
                    htmlFor="search"
                    className='opacity-0 absolute'>
                    Search books
                </label>
                <input
                    type="text" 
                    placeholder='Author, Title, Keyword...'
                    className='font-light text-sm p-1 bg-transparent w-full border-none'
                    onChange={() => setInputValue(inputEl.value.toLocaleLowerCase().split(" ").join("+"))}/>
                <button 
                    className='bg-slate-200 h-full py-2 px-4 rounded-r-3xl font-bold hover:bg-slate-300'
                    onClick={handleClick}>
                    Search
                </button>
            </div>
>>>>>>> b107fd9e806a3a48b8b40966c2c5dfc94d2d721b
        </section>
    )
}

export default Hero