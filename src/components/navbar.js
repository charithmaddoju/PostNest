import { Link } from "react-router-dom"
import {auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../styles/navbar.css'
export const Navbar = () => {

    const [user] = useAuthState(auth);
    const signOut = () => {
        auth.signOut();
    }

    return (
        <nav className="Navbar">
            <div className="Title">PostNest</div>
            <ul>
                <li>
                    <Link to='/'>Home </Link>
                    {!user && <Link to='/login'>Login</Link>}
                    {user && <Link to='/create'>CreatePost</Link>}
                </li>
            </ul>
            {user &&
                <div className="User">
                    <p className="User-name">{user?.displayName}</p>
                    <img className="User-img" src={user?.photoURL || "" } alt="user" />
                    <button onClick={signOut}>Sign out</button>
                </div>
            }
        </nav>
    )
}