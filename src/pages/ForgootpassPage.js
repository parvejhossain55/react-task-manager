import React, { useRef } from "react";
import { sendVerificationCodeByEmail } from "../APIRequest/UserAPI";
import { toastWarn } from "./../helper/formHelper";
import { useNavigate } from 'react-router-dom';

function ForgootpassPage() {
    const navigate = useNavigate();
    let email = useRef();
    let emailFilter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    function ValidateEmail() {
        if (!email.value) {
            toastWarn("Please provide your email address");
        } else if (!emailFilter.test(email.value)) {
            toastWarn("Invalid email address");
        } else {
            sendVerificationCodeByEmail(email.value).then((res) => {
                if(res === true) {
                    navigate('/verifycode')
                } else {
                    navigate('/forgotpass')
                }
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
                            You forgot your password? Here you can easily
                            retrieve a new password.
                        </p>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (email = input)}
                                type="email"
                                className="form-control"
                                placeholder="Your Valid Email Address"
                                defaultValue="parvejhossain4040@gmail.com"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    onClick={ValidateEmail}
                                    className="btn btn-primary btn-block"
                                >
                                    Validate Email
                                </button>
                            </div>
                        </div>

                        <p className="mt-3 mb-1">
                            <a href="/login">Login</a>
                        </p>
                        <p className="mb-0">
                            <a href="/register" className="text-center">
                                Register a new membership
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgootpassPage;
