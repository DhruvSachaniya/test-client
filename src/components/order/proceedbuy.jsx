import { useNavigate } from "react-router-dom";

export default function ProceedToBuy () {
    const navigate = useNavigate();
    return(
        <>
            <button 
            onClick={() => {
                navigate('/Buy');
            }}
            type="submit">ProceedToBuy</button>
        </>
    );
}