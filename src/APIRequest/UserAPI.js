import axios from "axios";
import store from "../redux/store/store";
import { toastSuccess, toastWarn } from "../helper/formHelper";
import { hideLoader, showLoader } from "../redux/state/settingSlice";
import {
    getToken,
    setToken,
    setUserDetail,
    setVerifyEmail,
} from "../helper/sessionHelper";
import { setUser } from "../redux/state/userSlice";

const axiosHeader = {
    headers: { Authorization: "Bearer " + getToken() },
};

export async function PostUserRegistration(url, data) {
    store.dispatch(showLoader);
    let baseURL = "https://simple-task-managerr.herokuapp.com/api/v1" + url;
    return await axios
        .post(baseURL, data)
        .then((res) => {
            store.dispatch(hideLoader);
            if (res.status === 200) {
                if (res.data.status === "Success") {
                    toastSuccess("Registration Successfully Completed");
                    return true;
                } else {
                    return false;
                }
            }
        })
        .catch((error) => {
            store.dispatch(hideLoader);
            if (error.response.data.data.keyPattern.email === 1) {
                toastWarn("Email Address Already Exist");
                return false;
            } else {
                toastWarn("Something went wrong");
                return false;
            }
        });
}

export async function setUserInfoById(id) {
    // store.dispatch(showLoader);
    let baseURL =
        "https://simple-task-managerr.herokuapp.com/api/v1/user/" + id;
    return await axios
        .get(baseURL)
        .then((res) => {
            // store.dispatch(hideLoader);
            // console.log(res.data.data[0])
            if (res.status === 200) {
                store.dispatch(setUser(res.data.data));
            }
        })
        .catch((error) => {
            // store.dispatch(hideLoader);
            if (error) {
                console.log(error.message);
                toastWarn("Somethin Error...");
            }
        });
}

export async function LoginUser(url, data) {
    store.dispatch(showLoader);

    let baseURL = "https://simple-task-managerr.herokuapp.com/api/v1" + url;

    return await axios
        .post(baseURL, data)
        .then((res) => {
            store.dispatch(hideLoader);
            if (res.status === 200) {
                setToken(res.data.data.token);
                setUserDetail(res.data.data.user);
                toastSuccess("Successfully Logedin");
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            store.dispatch(hideLoader);
            // console.log(error);
        });
}

export async function ProfileUpdate(id, data) {
    store.dispatch(showLoader);
    let baseURL =
        "https://simple-task-managerr.herokuapp.com/api/v1/profileUpdate/" + id;
    return await axios
        .put(baseURL, data, axiosHeader)
        .then((res) => {
            // store.dispatch(hideLoader);
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            store.dispatch(hideLoader);
            if (error) {
                toastWarn("Something went wrong");
                return false;
            }
        });
}

export async function sendVerificationCodeByEmail(email) {
    let baseURL =
        "https://simple-task-managerr.herokuapp.com/api/v1/user/forgot/" +
        email;
    return await axios
        .get(baseURL)
        .then((res) => {
            if (res.data.data.accepted.length === 1) {
                setVerifyEmail(email);
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            if (error) {
                toastWarn("Your Email Does Not Found");
            }
        });
}

export async function userCodeVerify(data) {
    let baseURL =
        "https://simple-task-managerr.herokuapp.com/api/v1/user/verifycode";
    return await axios
        .post(baseURL, data)
        .then((res) => {
            // console.log(res.data.data.total);
            if (res.data.data.total === 1) {
                return true;
            } else {
                return false;
            }
        })
        .catch((error) => {
            if (error) {
                console.log(error.message);
                toastWarn("Invalid Verification Code");
            }
        });
}

export async function UpdateUserPassword(data) {
    let baseURL =
        "https://simple-task-managerr.herokuapp.com/api/v1/user/changePassword";
    return await axios
        .post(baseURL, data)
        .then((res) => {
            if (res.status === 200 && res.data.status === 'success') {
                return true
            } else {
                return false
            }
        })
        .catch((error) => {
            if (error) {
                console.log(error.message);
                toastWarn("Invalid Verification Code");
            }
        });
}
