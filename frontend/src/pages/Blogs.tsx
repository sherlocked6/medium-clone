import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { UseBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = UseBlogs();

    if(loading){
        return <div>
            <AppBar></AppBar>
            <div className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    console.log("I'mm here")
    return <div>
        <AppBar></AppBar>
        <div className="flex justify-center">
            <div className="">
                {blogs.map(blog => <BlogCard 
                    id={blog.id}
                    authorName= {blog.author.name}
                    title= {blog.title}
                    content= {blog.content}
                    publishedDate="31 Jul 2024"
                ></BlogCard>
                )}
            </div>
        </div>
    </div>
}