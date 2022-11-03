import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTaskByStatus } from "../APIRequest/TaskAPI.js";
import Tasks from "./Tasks.js";

function NewTask() {
    useEffect(() => {
        selectTaskByStatus("new");
    }, []);

    const TaskList = useSelector((state) => state.task.newTask);

    return (
        <div>
            <Tasks data={TaskList} bg='bg-info'/>
        </div>
    );
}

export default NewTask;
