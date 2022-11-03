import React from "react";
import { deleteTask, editTaskStatus } from "../helper/deleteHelper";

function Tasks({ data, bg }) {
    return (
        <div className="row">
            {data.map((item, i) => (
                <div key={i.toString()} className="col-lg-4 col-6">
                    <div className={`small-box ${bg}`}>
                        <div className="inner">
                            <h5>{item.taskName}</h5>
                            <p>{item.taskDesc}</p>
                        </div>
                        <div
                            className="small-box-footer"
                            style={{
                                padding: "10px",
                            }}
                        >
                            <div className="clearfix">
                                <div className="float-left">
                                    <i
                                        style={{ marginRight: "8px" }}
                                        className="fa fa-calendar"
                                        aria-hidden="true"
                                    ></i>
                                    {item.createdAt}
                                </div>
                                <div className="float-right">
                                    <a
                                        onClick={editTaskStatus.bind(
                                            this,
                                            item._id,
                                            item.taskStatus
                                        )}
                                        style={{
                                            fontSize: "20px",
                                            marginRight: "15px",
                                        }}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </a>
                                    <a
                                        onClick={() => deleteTask(item._id)}
                                        style={{ fontSize: "20px" }}
                                    >
                                        <i className="fa fa-trash"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tasks;
