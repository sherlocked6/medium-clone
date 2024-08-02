import { ChangeEvent, useState } from "react"
import { AppBar } from "../components/AppBar"
import axios from 'axios'
import { BACKENDURL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return <div>
        <AppBar></AppBar>
        <div className="flex justify-center pt-8 w-full ">
            <div className="max-w-screen-lg w-full  ">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="focus:outline-none text-gray-900 text-sm rounded-lg  block w-full p-2.5 border-full border border-gray-300" placeholder="Enter your blog title" required />
                <TextEditor onChange={(e) => 
                    setContent(e.target.value)
                }></TextEditor>
                <button onClick={async () => {
                    const response = axios.post(`${BACKENDURL}/api/v1/blog`, {
                        title,
                        content
                    },{
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    })
                    navigate(`/blog/${(await response).data.id}`)
                }} className="inline-flex px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish Post
                </button>
            </div>
        </div>
    </div>
}


function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div className="mt-2">
    <div className="w-full mb-4">
        <div className="border rounded-b-lg">
        <label className="sr-only">Publish post</label>
            <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none focus:ring-blue-500 focus:border-blue-500  block w-full px-0 text-sm " placeholder="Write an article..." required ></textarea>
        </div>
    </div>
 </div>
}