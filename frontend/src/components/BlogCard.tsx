import { Link } from "react-router-dom";

interface BlogCardProps  {
    id: string;
    authorName:  string;
    title:       string;
    content:     string;
    publishedDate: string
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-400 py-4 w-screen max-w-lg cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <Avatar name={authorName} /> 
            </div>
            <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                {authorName} 
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="flex justify-center flex-col pl-2 font-thin text-slate-500 text-sm">
                { publishedDate }
            </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            { title }
        </div>
        <div className="text-md font-thin">
            {content.slice(0,200) + '...'}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s)`}
        </div>
    </div>
    </Link>
}


export function Avatar({ name, size = "small" }: { name: string, size?: "big" | "small"}){
    return <div className={`relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 
    rounded-full dark:bg-gray-600 ${size == 'small' ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size == "small" ? "text-sm" : "text-md"} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
</div>
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-500">
        
    </div>
}