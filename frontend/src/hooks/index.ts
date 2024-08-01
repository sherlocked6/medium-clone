import { useEffect, useState } from "react"
import { BACKENDURL } from "../config";
import axios from 'axios'

export interface Blog {
    "title": string,
    "content": string,
    "id": string,
    "author": {
        "name": string
    }
}

export const UseBlog = ({id}: {id: string}) => {
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKENDURL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log("imside axios")
            setBlog(response.data.post)
            setLoading(false)
        })
    }, [])

    return {
        loading,
        blog
    }
}

export const UseBlogs = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BACKENDURL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log("imside axios")
            setBlogs(response.data.posts)
            setLoading(false)
        })
    }, [])

    return {
        loading,
        blogs
    }
}