import axios from "axios";

export default function CancelOrder () {
    return(
        <>
            <button 
            onClick={() => {
                try{
                    axios({
                        url: "/order",
                        method: "delete",
                        headers: {
                            "Authorization": localStorage.getItem("jwt_token")
                        }
                    })
                    .then((res) => {
                        console.log(res);
                    })
                } catch(error) {
                    console.log(error);
                }
            }}
            type="submit">CancelOrder</button>
        </>
    );
}