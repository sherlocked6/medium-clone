import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return <div className="border-b flex justify-between px-10 py-2">
        <Link to='/blogs' className="flex flex-col justify-center cursor-pointer">
            Medium
        </Link>
        <div>
            <Link to='/publish'>
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 
                focus:ring-4 focus:ring-green-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-4">New</button>
            </Link>
            
            <Avatar size="big" name="Chad"></Avatar>
        </div>
    </div>
}