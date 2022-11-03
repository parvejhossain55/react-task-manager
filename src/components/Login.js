import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { LoginUser } from "../APIRequest/UserAPI";
import { toastWarn } from "../helper/formHelper";

function Login() {
    let email,
        password = useRef();

    function UserSignup(e) {
        if (!email.value) {
            toastWarn("Email address is required");
        } else if (!password.value) {
            toastWarn("Password is required");
        } else {
            const data = {
                email: email.value,
                password: password.value,
            };
            e.target.lastChild.classList.add("spinner-border");

            LoginUser("/login", data).then((res) => {
                if (res === true) {
                    window.location.href = "/";
                } else {
                    e.target.lastChild.classList.remove("spinner-border");
                    toastWarn("Invalid Email or Password");
                }
            });
        }
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <p>
                        <b>Task Manager</b>
                    </p>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">
                            Sign in to start your session
                        </p>

                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (email = input)}
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (password = input)}
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
                        <div className="row">
                            <div className="col-7">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-5">
                                <button
                                    onClick={UserSignup}
                                    className="btn btn-primary btn-block"
                                >
                                    Sign In
                                    <span
                                        className=""
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            marginLeft: "8px",
                                        }}
                                    ></span>
                                </button>
                            </div>
                        </div>

                        <div className="social-auth-links text-center mb-3">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i> Sign in
                                using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i> Sign
                                in using Google+
                            </a>
                        </div>

                        <p className="mb-1">
                            <NavLink to="/forgotpass">
                                I forgot my password
                            </NavLink>
                        </p>
                        <p className="mb-0">
                            <NavLink to="/register" className="text-center">
                                Register a new membership
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}

export default Login;
