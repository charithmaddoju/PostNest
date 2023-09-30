import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const CreateForm = () => {
    
    const schema = yup.object().shape({
        title: yup.string().required(),
        content: yup.string().required()
    });
    
    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Title.." {...register("title")}/>
                <textarea placeholder="Content.." {...register("content")}/>
                <input type="submit" />
            </form>
        </div>
    )
}