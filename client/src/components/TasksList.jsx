import { useEffect } from "react";
import { getAllTasks } from "../api/tasks.api";

export function TasksList(){
    useEffect(() => {
        function loadTasks(){
            const res = getAllTasks();
            console.log(res);
        }
        loadTasks();
    }, []); // [] para que solo se ejecute una vez al montar la pagina

    return <div>TaskList</div>
}