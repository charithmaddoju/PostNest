import { getDocs, collection } from "firebase/firestore"
import { db } from "../../config/firebase"
import { useEffect, useState } from "react";
import '../../styles/Main.css'
import { Post } from "./post";

export const Home = () => {
    const [postsLists, setPostsLists] = useState([]);
    const postsRef = collection(db, "posts");
    
    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsLists(data.docs.map(doc => ({...doc.data(), id : doc.id})));
        console.log(data);
    }

    useEffect(() => {
        getPosts();
    },[])

    return (
        <div className="Home">
            <h1>Home Page</h1>
            {postsLists?.map((post) => (
                <Post 
                title={post.title}
                content={post.content}
                username={post.username}
                userId={post.userId}
                id = {post.id}
                key={post.id}
                />
            ))}
        </div>
    )

}