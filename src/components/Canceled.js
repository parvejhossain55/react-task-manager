import React, { useEffect } from "react";
import { selectTaskByStatus } from "../APIRequest/TaskAPI.js";
import Tasks from "./Tasks.js";
import { useSelector } from "react-redux";

function Canceled() {
    useEffect(() => {
        selectTaskByStatus("cancel");
    }, []);

    const CanceledList = useSelector((state) => state.task.canceledTask);

    return (
        <div>
            <Tasks data={CanceledList} bg='bg-danger'/>
        </div>
    );
}

export default Canceled;
