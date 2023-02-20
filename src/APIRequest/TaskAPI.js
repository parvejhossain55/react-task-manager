import axios from "axios";
import { toastWarn } from "../helper/formHelper";
import { getToken, getUserDetail } from "../helper/sessionHelper";
import { setSamary } from "../redux/state/summarySlice";
import {
    setCanceledTask,
    setCompleteTask,
    setNewTask,
    setProgressTask,
} from "../redux/state/taskSlice";
import store from "../redux/store/store";

const base = "https://frightened-lamb-fez.cyclic.app/api/v1";

const axiosHeader = {
    headers: { Authorization: "Bearer " + getToken() },
};

export async function CreateTask(url, data) {
    let baseURL = base + "/" + url;
    return await axios
        .post(baseURL, { ...data, user: getUserDetail()._id }, axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                if (res.data.status === "Success") {
                    return true;
                } else {
                    return false;
                }
            }
        })
        .catch((error) => {
            if (error) {
                toastWarn("Something went wrong eror");
                return false;
            }
        });
}

export async function selectTaskByStatus(Status) {
    let baseURL = base + "/tasks/" + Status + "/status";

    return await axios
        .get(baseURL, axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                if (Status === "new") {
                    store.dispatch(setNewTask(res.data.data));
                } else if (Status === "progress") {
                    store.dispatch(setProgressTask(res.data.data));
                } else if (Status === "complete") {
                    store.dispatch(setCompleteTask(res.data.data));
                } else if (Status === "cancel") {
                    store.dispatch(setCanceledTask(res.data.data));
                }
            } else {
                toastWarn("Something went wrong");
                return false;
            }
        })
        .catch((error) => {
            if (error) {
                toastWarn("Something went wrong");
                return false;
            }
        });
}

export async function selectTaskCount() {
    let baseURL = base + "/tasks/count";

    return await axios
        .get(baseURL, axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                store.dispatch(setSamary(res.data.data));
            } else {
                toastWarn("Something went wrong");
            }
            // console.log(res.data.data)
        })
        .catch((error) => {
            if (error) {
                toastWarn("Something went wrong");
            }
        });
}

export async function deleteTaskById(id) {
    let baseURL = base + "/tasks/" + id;

    return await axios
        .delete(baseURL, axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            if (error) {
                console.log(error);
                return false;
            }
        });
}

export async function updateTaskByStatus(id, task) {
    let baseURL = base + "/tasks/" + id;

    return await axios
        .put(baseURL, task, axiosHeader)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            if (error) {
                console.log(error);
                return false;
            }
        });
}
