import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Showproduct() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('/products', {
                    headers: {
                        'Authorization': localStorage.getItem('jwt_token')
                    }
                });

                if (response.status === 200) {
                    console.log(response.data);
                    setProducts(response.data);
                } else {
                    console.log("Status is wrong!");
                }

            } catch (error) {
                console.log(error);
                console.log('no')
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <div>
                <Link to='/wishinfo'>wishlist</Link>
                <br/>
                <Link to='/cartinfo'>cart</Link>
                <br/>
                <Link to='/order'>Order</Link>
                <br/>
                <Link to='/User'>Account</Link>
            </div>
            <h1>Products Page</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/main/productinfo/${product._id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
            <br/>
            <Link to={`/postproduct`}>add product</Link>
        </div>
    );
}
