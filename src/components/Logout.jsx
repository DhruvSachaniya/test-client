import axios from "axios";

export default function Logout() {
    return(
        <>
            <button 
            onClick={() => {
                localStorage.removeItem("jwt_token")
            }}
            type="submit">Logout</button>
        </>
    );
}