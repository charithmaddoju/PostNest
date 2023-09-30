import '../../styles/Main.css'
import { useEffect, useState } from 'react';
import { addDoc, getDocs, collection, query, where} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export const Post = (props) => {
    const [likeAmount,setLikeAmount] = useState(null);
    
    const [user] = useAuthState(auth);

    const likesRef = collection(db, "likes");
    const likesDoc = query(likesRef, where("postId", "==", props.id));
    const getLikes = async() => {
        const data = await getDocs(likesDoc)
        setLikeAmount(data.docs.length);
    }
    
    const addLike = async () => {
        await addDoc(likesRef, {
            postId : props.id,
            userId : user.uid
        })
    }

    useEffect(() => {
        getLikes();
    },[])

    return(
        <div className="Post">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <b>@{props.username}</b>
            <div>
                <button onClick={addLike}> &#128077;</button>
                {likeAmount && <p>Likes : {likeAmount}</p>}
            </div>
        </div>
   )
}
 