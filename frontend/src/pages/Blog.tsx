import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { UseBlog } from "../hooks"
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = UseBlog({ id: id || ""});

    if(loading){
        return <div>
            <AppBar />
            <div className="h-screen flex items-center justify-center">
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}