import Swal from "sweetalert2";
import { deleteTaskById, selectTaskByStatus, updateTaskByStatus } from "../APIRequest/TaskAPI.js";

export function deleteTask(id) {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            // delete code execute here
            deleteTaskById(id).then((res) => {
                if (res === true) {
                    Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                    selectTaskByStatus("new");
                } else {
                    Swal.fire("Sorry!", "Something went wrong", "wrong");
                }
            });
            // alert(id)
        }
    });
}

export function editTaskStatus(id, status) {
    Swal.fire({
        title: "Update Task Status",
        input: "select",
        inputOptions: {
            new: "New",
            progress: "Progress",
            complete: "Complete",
            cancel: "Cancel",
        },
        inputValue: status,
        showCancelButton: true,
        inputValidator: (value) => {
            updateTaskByStatus(id, {taskStatus: value}).then(res => {
                if(res === true) {
                    Swal.fire(
                        "Updated!",
                        "Your task status successfully updated!",
                        "success"
                    );
                    selectTaskByStatus(status);
                }
            })
            // console.log(value)
        },
    });
}
