import { FullBlog } from "../components/FullBlog";
import { UseBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = UseBlog({ id: id || ""});

    if(loading){
        return <div>
            loading...
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}