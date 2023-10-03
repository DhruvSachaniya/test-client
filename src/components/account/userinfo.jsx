import axios from "axios";
import { useEffect, useState } from "react";

export default function UserInfo () {
    
    const [ values, setValues ] = useState([]);
    
    useEffect(() => {
        async function GetUser () {
            const response = await axios({
                url: "/account",
                method: "get",
                headers: {
                    "Authorization": localStorage.getItem("jwt_token")
                }
            })
            if(response) {
                if(response.status === 200) {
                    setValues(response.data);
                    console.log(response.data)
                } 
            }
        }
        GetUser();
    }, [])
    return(
        <>
            <h1>name: {values.username}</h1>
            <h2>email: {values.email}</h2>
            <h2>Created At: {new Date(values.createdAt).toLocaleString()}</h2>
        </>
    );
}