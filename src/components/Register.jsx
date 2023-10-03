import { useState } from "react";
import axios from 'axios';

export default function Register()  {

    const [ values, setValues ] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handlechange (event) {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name] : value
        })

    }

    async function handleinput (event) {
        event.preventDefault();
        try {
            axios({
                url: "/auth/register",
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                data: JSON.stringify({
                    username: values.username,
                    email: values.email,
                    password: values.password
                }), 
            });
            setValues({
                username: "",
                email: "",
                password: ""
            });
        } catch (error) {
            console.log(error);
        }
    }

    
    
    return(
        <>
            <h3>Registerpage</h3>
            <form onSubmit={handleinput}>
                <input
                value={values.username}
                onChange={handlechange}
                name="username" 
                type="text"
                placeholder="username"
                />
                <input
                value={values.email}
                onChange={handlechange}
                name="email"
                type="email"
                placeholder="email"
                />
                <input
                value={values.password}
                onChange={handlechange}
                name="password" 
                type="password"
                placeholder="password"  
                />
                <button type="submit">submit</button>
            </form>
        </>
    );
}