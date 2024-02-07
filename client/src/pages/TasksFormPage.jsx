import {useForm} from 'react-hook-form';
import { createTask } from '../api/tasks.api'
import {useNavigate} from 'react-router-dom';

export function TasksFormPage(){

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async data => {
        await createTask(data);
        navigate("/tasks");
    });
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" placeholder="Title" {...register("title", {required:true})}/>
                {errors.title && <span>Title is required</span>}
                <br />
                <textarea name="description" id="" cols="30" rows="10" placeholder="Description" {...register("description", {required:true})}></textarea>
                {errors.description && <span>Description is required</span>}
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}