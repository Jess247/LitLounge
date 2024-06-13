import hero from '../assets/hero.jpg'

function Hero() {
    return (
        <section 
            className={` h-[60vh] overflow-hidden`}
            style={{backgroundImage: "url(`${hero}`)"}}>
            <img src={hero} 
                 alt="Two open books in front of a blurry bookshelf."
                 className='relative z-0 object-fit'
            />
            <div className='bg-slate-50 h-10 z-10 absolute top-[50vh] left-1/2 -translate-x-1/2 w-2/3 pl-2 rounded-3xl gap-2 flex max-w-4xl'>
                <label 
                    htmlFor="search"
                    className='opacity-0 absolute'>
                    Search books
                </label>
                <input
                    type="text" 
                    placeholder='Author, Title, Keyword...'
                    className='font-light text-sm p-1 bg-transparent w-full'/>
                <button className='bg-slate-200 h-full py-2 px-4 rounded-r-3xl font-bold hover:bg-slate-300'>
                    Search
                </button>
            </div>
        </section>
    )
}

export default Hero