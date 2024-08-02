import { Circle } from "./BlogCard"

export const BlogSkeleton = () => {
    return <div role="status" className=" animate-pulse">
               <div className="border-b border-slate-400 py-4 w-screen max-w-lg cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
            <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div> 
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle />
            </div>
            <div className="flex justify-center flex-col pl-2 font-thin text-slate-500 text-sm">
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
            </div>
        </div>
        <div className="text-xl font-semibold pt-2">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>        
        </div>
        <div className="text-md font-thin">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
        </div>
    </div>
       
        <span className="sr-only">Loading...</span>
    </div>
}