import React, { useEffect } from "react";
import { selectTaskByStatus } from "../APIRequest/TaskAPI.js";
import Tasks from "./Tasks.js";
import { useSelector } from 'react-redux';

function ProgressList() {
    useEffect(() => {
        selectTaskByStatus("progress");
    }, []);

    const Progress = useSelector((state) => state.task.progressTask);

    return (
        <div>
            <Tasks data={Progress} bg='bg-success'/>
        </div>
    );
}

export default ProgressList;
