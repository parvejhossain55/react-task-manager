import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ProfileUpdate, setUserInfoById } from "../APIRequest/UserAPI";
import profileImg from "../assets/img/profile.jpg";
import { getUserDetail, setUserDetail } from "../helper/sessionHelper";
import { useSelector } from "react-redux";
import FileBase64 from "react-file-base64";
import { toastSuccess, toastWarn } from "./../helper/formHelper";
import bcrypt from "bcryptjs";

function Profile() {
    let fname,
        lname,
        mobileNum,
        currentPassword,
        updatePassword = useRef();

    // hold user updated base64 string
    let image;
    let id = getUserDetail()._id;

    // get user data to show form default value
    let userdata = useSelector((state) => state.user.userData);

    // call api for load current use data
    useEffect(() => {
        setUserInfoById(id);
    }, []);

    // get update profile photo base64 string
    function getFiles({ base64 }) {
        image = document.querySelector("#profile").src = base64;
    }

    // update user information
    function onUpdateUser() {
        if (!fname.value) {
            toastWarn("First Name is not be empty");
        } else if (!lname.value) {
            toastWarn("Last Name is not be empty");
        } else if (!mobileNum.value) {
            toastWarn("Mobile is not be empty");
        } else if (currentPassword.value && updatePassword.value) {
            const checkPass = bcrypt.compareSync(
                currentPassword.value,
                getUserDetail().password
            );

            if (checkPass !== false) {
                const data = {
                    _id: id,
                    firstName: fname.value,
                    lastName: lname.value,
                    mobile: mobileNum.value,
                    image,
                    password: bcrypt.hashSync(updatePassword.value),
                };

                ProfileUpdate(id, data).then((res) => {
                    if (res) {
                        toastSuccess("Password Successfully Updated");
                    }
                });
                setUserDetail(data);
            } else {
                toastWarn("Password Does Not Match");
            }
        } else {
            const data = {
                _id: id,
                firstName: fname.value,
                lastName: lname.value,
                mobile: mobileNum.value,
                image,
                password: getUserDetail().password,
            };
            ProfileUpdate(id, data).then((res) => {
                if (res) {
                    toastSuccess("Profile Successfully Updated");
                }
            });
            setUserDetail(data);
        }
    }

    return (
        <div>
            {/* {console.log(userdata)} */}
            <section className="content">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">Profile Info</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="inputName">
                                        First Name
                                    </label>
                                    <input
                                        ref={(input) => (fname = input)}
                                        type="text"
                                        id="inputName"
                                        className="form-control"
                                        defaultValue={userdata[0]?.firstName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        ref={(input) => (lname = input)}
                                        type="text"
                                        id="lastName"
                                        className="form-control"
                                        defaultValue={userdata[0]?.lastName}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobileNumber">Mobile</label>
                                    <input
                                        ref={(input) => (mobileNum = input)}
                                        type="text"
                                        id="mobileNumber"
                                        className="form-control"
                                        defaultValue={userdata[0]?.mobile}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="emailAddress">Email</label>
                                    <input
                                        type="text"
                                        id="emailAddress"
                                        className="form-control"
                                        defaultValue={userdata[0]?.email}
                                        readOnly
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="profilePhoto">
                                        Current Profile Photo
                                    </label>
                                    <div>
                                        <img
                                            alt="asjflskd"
                                            id="profile"
                                            src={
                                                userdata[0]?.image
                                                    ? userdata[0]?.image
                                                    : profileImg
                                            }
                                            style={{
                                                height: "120px",
                                                width: "120px",
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="profilePhoto">
                                        Update Profile Photo
                                    </label>
                                    <FileBase64 onDone={getFiles.bind(this)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card card-secondary">
                            <div className="card-header">
                                <h3 className="card-title">Update Password</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="currentPassword">
                                        Current Password
                                    </label>
                                    <input
                                        ref={(input) =>
                                            (currentPassword = input)
                                        }
                                        type="text"
                                        id="currentPassword"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="udatePassword">
                                        Update Password
                                    </label>
                                    <input
                                        ref={(input) =>
                                            (updatePassword = input)
                                        }
                                        type="text"
                                        id="udatePassword"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <NavLink to="/" className="btn btn-secondary">
                            Cancel
                        </NavLink>
                        <button
                            onClick={onUpdateUser}
                            className="btn btn-success float-right"
                        >
                            Update Changes
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Profile;
