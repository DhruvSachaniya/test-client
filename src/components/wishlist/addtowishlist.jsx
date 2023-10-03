import axios from "axios";

export default  function AddtoWishlist (props) {
    return(
        <>
            <button 
            onClick={() => {
                console.log(props.id);
                axios({
                    url: '/wishlist',
                    method: "post",
                    headers: {
                        "Authorization": localStorage.getItem('jwt_token'),
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                        productid: props.id
                    })
                })
                .then((res) => {
                    console.log(res);
                })
            }}
            type="submit">AddtoWishlist</button>
        </>
    );
}