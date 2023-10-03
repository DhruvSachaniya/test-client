import axios from "axios";

export default function Addtocart(props) {
    return(
        <>
            <button onClick={() => {
                console.log(props.id);
                axios({
                    url: '/cart',
                    method: "post",
                    headers: {
                        "Authorization": localStorage.getItem('jwt_token'),
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify({
                        productid: props.id,
                        quntity: 1
                    })
                })
                .then((res) => {
                    console.log(res);
                })
            }
            } type="submit">Addtocart</button>
        </>
    );
}