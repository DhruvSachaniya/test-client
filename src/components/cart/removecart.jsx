import axios from "axios";

export default function Removecart(props) {
    return(
        <>
          <button 
          onClick={() => {
            axios({
                url: '/cart',
                method: "delete",
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
          
          
          type="submit">removeitem</button>  
        </>
    );
}