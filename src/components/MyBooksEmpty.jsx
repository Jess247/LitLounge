import { MdOutlineMenuBook } from "react-icons/md"

export default function MyBooksEmpty() {
    return(
        <section className="flex flex-col items-center gap-2 mt-[15%] text-gray-500">
            <h2 className="border-t-2 rounded-xl pt-4 px-4">Your Library is empty</h2>
            <MdOutlineMenuBook size={50}/>
            <p className="border-b-2 rounded-xl pb-4 px-4">Add books more book</p>
        </section>
    )
}