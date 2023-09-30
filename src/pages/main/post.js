import '../../styles/Main.css'
import { useState } from 'react';
import { addDoc, collection} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export const Post = (props) => {

    const likesRef = collection(db, "likes");
    const [user] = useAuthState(auth);

    const addLike = async () => {
        await addDoc(likesRef, {
            postId : props.id,
            userId : user.uid
        })
    }

    return(
        <div className="Post">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <b>@{props.username}</b>
            <div>
                <button onClick={addLike}> &#128077;</button>
                <button > &#128078;</button>
            </div>
        </div>
   )
}
 