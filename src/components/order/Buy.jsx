import axios from "axios";
import { useState } from "react";

export default function Buy() {
    const [values, setValues ] = useState({
        shipping: "",
        payment: ""
    })

    function handlechange (event) {
        const {name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        })
    }
    
    async function handlesubmit (event) {
        event.preventDefault();
        try{
            const responce = await axios({
                url: "/order",
                method: "post",
                headers: {
                    "Authorization": localStorage.getItem("jwt_token"),
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    shippingInfo: values.shipping,
                    paymentInfo: values.payment
                })
            })
            if(responce.status === 200) {
                console.log(responce.data);
            }
        } catch(error) {
            console.log(error);
        }

        setValues({
            shipping: "",
            payment: ""
        })
    }
    
    
    
    return(
        <>
        <form onSubmit={handlesubmit}>
            <input
            name="shipping"
            value={values.shipping}
            onChange={handlechange}
            type="textarea"
            placeholder="shippinginfo"
            />
            <input
            name="payment"
            value={values.payment}
            onChange={handlechange}
            type="text"
            placeholder="paymentinfo"
            />
            <button type="submit">Buy</button>
        </form>
        </>
    );
}