import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom';

export function TasksFormPage(){

    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            // console.log(data);
            await updateTask(params.id, data);
        }else{
            await createTask(data);
        }
        navigate("/tasks");
    });

    useEffect(()=>{
        async function loadTask(){
            if(params.id){
                const {data} = await getTask(params.id);
                setValue('title', data.title);
                setValue("description", data.description); 
            }
        }
        loadTask();
    },[])

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
            {params.id && <button onClick={async()=>{
                const accepted = window.confirm("Are you sure?");
                if(accepted) {
                    await deleteTask(params.id);
                    navigate("/tasks");
                }
            }}>Delete</button>}
            
        </div>
    )
}