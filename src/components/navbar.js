import { Link } from "react-router-dom"
import {auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../styles/navbar.css'
export const Navbar = () => {

    const [user] = useAuthState(auth);

    return (
        <nav className="Navbar">
            <div className="Title">PostNest</div>
            <ul>
                <li>
                    <Link to='/'>Home </Link>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
            <div className="User">
                <p className="User-name">{user?.displayName}</p>
                <img className="User-img" src={user?.photoURL || "" } alt="user" />
            </div>
        </nav>
    )
}