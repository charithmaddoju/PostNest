import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            navigate('/');
        }).catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <h3>Sign in with google to continue!</h3>
            <button onClick={signInWithGoogle}>Sign in</button>
            
        </div>
    )
}