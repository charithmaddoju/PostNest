import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection} from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import '../../styles/Form.css'
import { useNavigate } from "react-router-dom";

export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const schema = yup.object().shape({
        title: yup.string().required(),
        content: yup.string().required()
    });
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    });


    const postsRef = collection(db, "posts");

    const onCreatePost = async (data) => {
        await addDoc(postsRef, {
            // title: data.title,
            // content: data.content,
            ...data,
            username : user?.displayName,
            userId : user?.uid,
        })
        navigate('/');
    }

    return(
        <div>
            <form className="Form" onSubmit={handleSubmit(onCreatePost)}>
                <input placeholder="Title.." {...register("title")}/>
                <p style={{color : "red"}}>{errors.title?.message}</p>
                <textarea placeholder="Content.." {...register("content")}/>
                <p style={{color : "red"}}>{errors.content?.message}</p>
                <input type="submit" />
            </form>
        </div>
    )
}