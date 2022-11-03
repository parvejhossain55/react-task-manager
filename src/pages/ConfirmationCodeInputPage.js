import React from "react";
import ReactCodeInput from "react-code-input";
import { userCodeVerify } from "../APIRequest/UserAPI";
import { getVerifyEmail, setLocalData } from "../helper/sessionHelper";
import { toastWarn } from "./../helper/formHelper";
import { useNavigate } from 'react-router-dom';


function ConfirmationCodeInputPage() {
    let code;
    const navigate = useNavigate();

    function checkVerificationCode() {
        // console.log(code);
        if (!code) {
            toastWarn("Check your email and provide your verification code");
        } else if (code.length != 6) {
            toastWarn("Verification code must be 6 digit");
        } else {
            const data = {
                code : code,
                email: getVerifyEmail()
            }
            userCodeVerify(data).then((res) => {
                if(res) {
                    setLocalData("verifyCode", code)
                    navigate('/recoverpass')
                } else {
                    navigate('/forgotpass')
                }
            })
        }
    }

    return (
        <div>
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
                        <div className="card-body">
                            <p className="login-box-msg">
                                You forgot your password? Here you can easily
                                retrieve a new password.
                            </p>
                            <div className="ml-4 mb-4">
                                <ReactCodeInput
                                    onChange={(e) => (code = e)}
                                    type="text"
                                    fields={6}
                                />
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button
                                        onClick={checkVerificationCode}
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        Verify Confirmation Code
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationCodeInputPage;
