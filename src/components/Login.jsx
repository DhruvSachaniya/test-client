import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    
    const [ values, setValues ] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    function handlechange (event) {
        const { name, value } = event.target;

        setValues({
            ...values,
            [name] : value
        })
    }

    async function handlesubmit (event) {

        event.preventDefault();
        try {
            const responce = await axios({
                url: "/auth/Login",
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    email: values.email,
                    password: values.password
                })
            });
            
            if (responce.status === 200) {
                localStorage.setItem('jwt_token', responce.data.token);
            }
            setValues({
                email: "",
                password: ""
            })
            navigate("/main", {replace: true});
        } catch (error) {
            console.log(error);
        }
    }
    
    return(
        <>
        <h1>Login page</h1>
        <form onSubmit={handlesubmit}>
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