import React, { useRef } from "react";
import { toastWarn, toastSuccess } from "./../helper/formHelper";
import { CreateTask } from "../APIRequest/TaskAPI";
import { useNavigate } from "react-router-dom";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/state/settingSlice";

function Create() {
    let taskname,
        taskdesc = useRef();
    const navigate = useNavigate();

    function TaskSubmit() {
        if (!taskname.value) {
            toastWarn("Task name is required");
        } else if (!taskdesc.value) {
            toastWarn("Task description is required");
        } else {
            store.dispatch(showLoader());
            const data = {
                taskName: taskname.value,
                taskDesc: taskdesc.value,
            };
            CreateTask("/tasks", data).then((res) => {
                if (res == true) {
                    store.dispatch(hideLoader());
                    toastSuccess("Task Successfully Created");
                    navigate("/");
                } else {
                    store.dispatch(hideLoader());
                    toastWarn("Task Insetted Failed");
                }
            });
        }
    }
    return (
        <div className="col-md-8">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Create New Task</h3>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task Name</label>
                        <input
                            ref={(input) => (taskname = input)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Task Name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Task Details</label>
                        <textarea
                            ref={(input) => (taskdesc = input)}
                            className="form-control"
                            rows="3"
                            placeholder="Enter Task Description"
                        ></textarea>
                    </div>
                </div>

                <div className="card-footer">
                    <button onClick={TaskSubmit} className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Create;
