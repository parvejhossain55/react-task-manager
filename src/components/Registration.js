import React, { useRef, useState } from "react";
import { PostUserRegistration } from "../APIRequest/UserAPI";
import { toastWarn } from "../helper/formHelper";
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [termCheck, setTermChecked] = useState(false);
    let fname,
        lname,
        mobileNum,
        emailAdd,
        pass,
        confpass = useRef();

    function checkHandler(e) {
        let checked = e.target.checked;
        setTermChecked(checked);
    }

    function userRegistration() {
        if (!fname.value) {
            toastWarn("First Name is must be required");
        } else if (!lname.value) {
            toastWarn("Last Name is must be required");
        } else if (!mobileNum.value) {
            toastWarn("Mobile is must be required");
        } else if (!emailAdd.value) {
            toastWarn("Email Address is must be required");
        } else if (!pass.value) {
            toastWarn("Password is not be empty");
        } else if (!confpass.value) {
            toastWarn("Please Re-type your password");
        } else if (!termCheck) {
            toastWarn("Please checked our Term and Condition");
        } else if (pass.value !== confpass.value) {
            toastWarn("Password and Re-type password doesnt match");
        } else {
            // Form Data
            const data = {
                firstName: fname.value,
                lastName: lname.value,
                mobile: mobileNum.value,
                email: emailAdd.value,
                password: pass.value,
                confirmPassword: confpass.value,
            };

            PostUserRegistration("/signup", data).then((res) => {
                if (res === true) {
                    navigate("/login");
                } else {
                    navigate('/login')
                }
            });
            // console.log(data);
        }
    }

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href="javascrit:void(0)">
                        <b>Admin</b>LTE
                    </a>
                </div>

                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">
                            Register a new membership
                        </p>

                        {/* <form action="" method="post"> */}
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (fname = input)}
                                name="firstName"
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (lname = input)}
                                name="lastName"
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (mobileNum = input)}
                                name="mobile"
                                type="text"
                                className="form-control"
                                placeholder="Mobile Number"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    {/* <i className="fas fa-solid fa-mobile"></i> */}
                                    <i className="fa-solid fa-mobile-button"></i>
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                ref={(input) => (emailAdd = input)}
                                name="email"
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
                                ref={(input) => (pass = input)}
                                name="password"
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
                                ref={(input) => (confpass = input)}
                                name="confirmPassword"
                                type="password"
                                className="form-control"
                                placeholder="Retype password"
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input
                                        onChange={checkHandler}
                                        name="terms"
                                        type="checkbox"
                                        id="agreeTerms"
                                    />
                                    <label htmlFor="agreeTerms">
                                        I agree to the <a href="#">terms</a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <button
                                    onClick={userRegistration}
                                    className="btn btn-primary btn-block"
                                    disabled={!termCheck ? true : false}
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                        {/* </form> */}

                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i>
                                Sign up using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i>
                                Sign up using Google+
                            </a>
                        </div>

                        <a href="/login" className="text-center">
                            I already have a membership
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
