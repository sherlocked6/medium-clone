import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"
import { Blog } from "../hooks"

export const FullBlog = ({blog}: {blog: Blog}) => {
    return <div>
        <AppBar></AppBar>
        <div className="grid grid-cols-3">
        <div className="pt-6 px-20 col-span-2 mr-4">
            <div className="w-full text-4xl font-extrabold">
                {blog.title}
            </div>
            <div className="pt-2 font-thin text-sm">
                Posted on 1st Aug 2024
            </div>
            <div className="w-full pt-4 font-light">
                {blog.content}
            </div>
        </div>
        <div className="flex flex-col pt-10">
            <div>
                Author
            </div>
            <div className="flex pt-4">
                <div className="flex flex-col justify-center">
                    <Avatar name={blog.author.name} size="small"></Avatar>
                </div>
                <div className="pl-2">
                    <div className="font-bold">
                        {blog.author.name}
                    </div>
                    <div  className="font-thin text-sm">
                        I used to write epic fiction
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
}