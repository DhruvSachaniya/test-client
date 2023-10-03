import axios from "axios";
import { useEffect, useState } from "react";
import CancelOrder from "./cancelorder";

export default function OrderInfo () {
    const [values, setValues ] = useState([]);
    const [meass, setmeass ] = useState("");

    useEffect(() => {
        async function getOrder () {
            try{
                const responce = await axios({
                    url: "/order",
                    method: "get",
                    headers: {
                        "Authorization": localStorage.getItem("jwt_token")
                    }
                })
                if(responce.status === 200) {
                    setValues(responce.data);
                    console.log(responce)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getOrder();
    },[]);

    return(
        <>
            <h1>your order</h1>
            {/* <p>{values.meassage}</p> */}
            {values.meassage ? <h2>{values.meassage}</h2> : 
            
            <>
            <p>you have order</p>
            <CancelOrder/>
            </>
            }
        </>
    );
}