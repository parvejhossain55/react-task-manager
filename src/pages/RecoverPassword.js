import React, { useRef } from "react";
import {
    getLocalData,
    getVerifyEmail,
    removeSession,
} from "../helper/sessionHelper";
import { toastSuccess, toastWarn } from "./../helper/formHelper";
import { UpdateUserPassword } from "../APIRequest/UserAPI";

function RecoverPassword() {
    let pass,
        repass = useRef();

    function ChangePassword() {
        if (!pass.value) {
            toastWarn("Please type new password");
        } else if (!repass.value) {
            toastWarn("Please re-type confirm password");
        } else if (pass.value != repass.value) {
            toastWarn("Does not match password and confirm password");
        } else {
            const data = {
                password: pass.value,
                code: getLocalData("verifyCode"),
                email: getVerifyEmail(),
            };
            UpdateUserPassword(data)
                .then((res) => {
                    if (res) {
                        toastSuccess("Password Successfullu Updated.");
                        removeSession();
                    }
                })
                .catch((err) => {
                    removeSession();
                });
        }
    }

    return (
        <div
            className="d-flex justify-content-center"
            style={{ marginTop: "100px" }}
        >
            <div className="login-box">
                <div className="login-logo">
                    <a href="#">
                        <b>Admin</b>LTE
                    </a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">
                            You are only one step a way from your new password,
                            recover your password now.
                        </p>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (pass = input)}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (repass = input)}
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    onClick={ChangePassword}
                                    className="btn btn-primary btn-block"
                                >
                                    Change password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecoverPassword;
