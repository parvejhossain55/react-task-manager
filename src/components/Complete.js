import React, { useEffect } from "react";
import { selectTaskByStatus } from "../APIRequest/TaskAPI.js";
import Tasks from "./Tasks.js";
import { useSelector } from 'react-redux';

function Complete() {
    useEffect(() => {
        selectTaskByStatus("complete");
    }, []);

    const CompleteList = useSelector((state) => state.task.completeTask);

    return (
        <div>
            <Tasks data={CompleteList} bg='bg-success'/>
        </div>
    );
}

export default Complete;
