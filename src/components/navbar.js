import { Link } from "react-router-dom"
import {auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {

    const [user] = useAuthState(auth);

    return (
        <nav>
            <Link to='/'>Home </Link>
            <Link to='/login'>Login</Link>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || "" } alt="user" />
        </nav>
    )
}