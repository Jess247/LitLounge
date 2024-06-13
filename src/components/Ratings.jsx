import { FaRegStar } from "react-icons/fa"
import { FaStar } from "react-icons/fa"

export default function Ratings() {
    return (
        <div className="">
            <div className="flex gap-2">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaRegStar/>
            </div>
            <div className="flex gap-2 mt-2">
            <p className="text-xs text-slate-700">158.000 ratings</p>
            <p className="text-xs text-slate-700">3,98 avg rating</p>
            </div>
        </div>
    )
}