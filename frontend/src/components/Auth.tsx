import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { SignupInput } from "@sherlocked629/mediumcommon";
import axios from "axios";
import { BACKENDURL } from "../config";

export const Auth = ({ type } : { type: 'signup' | 'signin'}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest(){
        const response = await axios.post(`${BACKENDURL}/api/v1/user/${type == 'signup' ? 'signup' : 'signin'}`, postInputs);
        const jwt = response.data.jwt;
        console.log(jwt);
        console.log(response.data);
        localStorage.setItem("token", jwt)
        navigate('/blogs')
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        {type == 'signup' ? 'Create an account' : 'Login to your account'}
                    </div>
                    <div className="text-slate-400 text-center">
                        {type == 'signup' ? 'Already have an account?' : "Don't have an account?"}
                        <Link className="pl-2 underline" to={type == 'signup' ? "/signin" : '/signup'}>{type == 'signup' ? 'Login' : 'Signup'}</Link>
                    </div>
                </div>
                <div>
                    {type == 'signup' ? <LabelledInput label="Name" placeholder="Enter your username" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} ></LabelledInput> : null}
                    
                    <LabelledInput label="Email" placeholder="Enter your email" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value
                        })
                    }} ></LabelledInput>
                    <LabelledInput label="Password" placeholder="" type="password" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} ></LabelledInput>
                    <button onClick={sendRequest} type="button" className="mt-4 text-white bg-gray-800 w-full hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == 'signup' ? 'Signup' : 'Signin'}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return <div>
        <div>
            <label  className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
            <input onChange = {onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            " placeholder={placeholder} required />
        </div>
    </div>
}
