import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Addtocart from "../cart/addtocart";
import AddtoWishlist from "../wishlist/addtowishlist";

function ProductInfo() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        async function fetchProductInfo() {
            try {
                const response = await axios.get(`/productinfo/${productId}`, {
                    headers: {
                        'Authorization': localStorage.getItem('jwt_token')
                    }
                });
                if (response.status === 200) {
                    setProduct(response.data);
                    setImage(response.data.fileURL);
                } else {
                    console.log("Status is wrong!");
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchProductInfo();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={"http://localhost:5000/"+image} width="50%"></img>
            {/* Other product details */}
            <br/>
            <Addtocart
              id={productId}      
            />
            <br/>
            <AddtoWishlist
            id={productId}
            />
        </div>
    );
}

export default ProductInfo;
