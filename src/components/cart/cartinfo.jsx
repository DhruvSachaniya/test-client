import axios from "axios";
import { useEffect, useState } from "react";
import Removecart from "./removecart";
import ProceedToBuy from "../order/proceedbuy";

export default function Cart() {
    const [carts, setCart] = useState([]);
    const [cartitmes, setcartitems] = useState([]);

    useEffect(() => {
        async function fetchCart() {
            try {
                const response = await axios({
                    url: "/cart",
                    method: "get",
                    headers: {
                        "Authorization": localStorage.getItem('jwt_token')
                    },
                })
                if (response.status === 200) {
                    setCart(response.data);
                    setcartitems(response.data.items);
                    // console.log(carts);
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchCart();
    }, [])

    return (
        <>
            <h1>your cart</h1>
            {!cartitmes ? <h1>{carts.meassage}</h1> :
                <div>
                    <ul>
                        <li>seller: {carts.seller}</li>
                        <li>subtotal: {carts.subtotal}</li>
                        <li>Quantity: {carts.quntity}</li>
                        <li>Created At: {new Date(carts.createdAt).toLocaleString()}</li>
                    </ul>
                    <h2>Items in Cart:</h2>
                    {console.log(carts.items)}
                    <ul>
                        {carts.items && carts.items.length > 0 ? (
                            carts.items.map((item, index) => (
                                <>
                                <li key={index}>{item}</li>
                                <Removecart id={item}/>
                                </>
                            ))
                        ) : (
                            <li>No items in cart</li>
                        )}
                    </ul>
                    <ProceedToBuy/>

                </div>}
        </>
    );
} 