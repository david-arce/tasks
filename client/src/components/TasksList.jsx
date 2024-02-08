import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList(){
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks();
            setTasks(res.data);
        }
        loadTasks();
    }, []); // [] para que solo se ejecute una vez al montar la pagina

    return( 
        <div className="grid grid-cols-3 gap-3">
            {tasks.map((task) => (
                <TaskCard key = {task.id} task = {task}/>
            ))}
        </div>
    );
}