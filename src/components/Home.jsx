import { Link } from "react-router-dom";
import Logout from "./Logout";

export default function Home () {
    return(
        <>
            <Link to='/register'>Register</Link>
            <br/>
            <Link to='/login'>Login</Link>
            <br/>
            <hr></hr>
            <Logout/>
        </>
    );
}