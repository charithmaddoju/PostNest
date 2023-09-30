import {auth, provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";

export const Login = () => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
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