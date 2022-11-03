import React from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/img/profile.jpg";
import { getUserDetail, removeSession } from "../../helper/sessionHelper";

function MasterLayout(props) {

    let userImg = getUserDetail().image;

    function checkMenuDropdown(e) {
        if (e.target.parentNode.className.indexOf("menu-open") === -1) {
            e.target.parentNode.classList.add("menu-open");
        } else {
            e.target.parentNode.classList.remove("menu-open");
        }
    }

    function showProfileDropdown() {
        let item = document.querySelector("#showProfiledropdown");
        let itemlist = document
            .querySelector("#showProfiledropdown")
            .querySelector("#dropdoownRight");

        if (
            item.classList.contains("show") ||
            itemlist.classList.contains("show")
        ) {
            item.classList.remove("show") || itemlist.classList.remove("show");
        } else {
            item.classList.add("show") || itemlist.classList.add("show");
        }
    }

    return (
        <div>
            <div className="wrapper">
                {/* <!-- Navbar --> */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* <!-- Left navbar links --> */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="pushmenu"
                                href="#!"
                                role="button"
                            >
                                <i
                                    className="fa fa-home"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item d-none d-sm-inline-block">
                            <a href="#" className="nav-link">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* <!-- Right navbar links --> */}
                    <ul className="navbar-nav ml-auto">
                        {/* <!-- Navbar Search --> */}
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-widget="navbar-search"
                                href="#"
                                role="button"
                            >
                                <i className="fas fa-search"></i>
                            </a>
                            <div className="navbar-search-block">
                                <form className="form-inline">
                                    <div className="input-group input-group-sm">
                                        <input
                                            className="form-control form-control-navbar"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-navbar"
                                                type="submit"
                                            >
                                                <i className="fas fa-search"></i>
                                            </button>
                                            <button
                                                className="btn btn-navbar"
                                                type="button"
                                                data-widget="navbar-search"
                                            >
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                        {/* <!-- Notifications Dropdown Menu --> */}
                        <li
                            id="showProfiledropdown"
                            className="nav-item dropdown"
                        >
                            <a
                                onClick={showProfileDropdown}
                                className="nav-link"
                                data-toggle="dropdown"
                                href="#"
                            >
                                <img
                                    src={userImg ? userImg : profileImg}
                                    style={{
                                        height: "40px",
                                        width: "40px",
                                        marginTop: "-8px",
                                    }}
                                />
                            </a>
                            <div
                                id="dropdoownRight"
                                className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
                            >
                                <span className="dropdown-item dropdown-header">
                                    <img
                                        src={userImg ? userImg : profileImg}
                                        style={{
                                            height: "80px",
                                            width: "80px",
                                        }}
                                    />
                                </span>
                                <span className="dropdown-item dropdown-header">
                                    <h5>Parvej Hossain</h5>
                                </span>
                                <div className="dropdown-divider"></div>
                                <NavLink to="/profile" className="dropdown-item">
                                    <i className="fas fa-user mr-2"></i>{" "}
                                    Profile
                                </NavLink>
                                <div className="dropdown-divider"></div>
                                <a
                                    href="#"
                                    onClick={removeSession}
                                    className="dropdown-item"
                                >
                                    <i className="fa fa-sign-out mr-2"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                {/* <!-- /.navbar --> */}

                {/* <!-- Main Sidebar Container --> */}
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* <!-- Brand Logo --> */}
                    <a href="#!" className="brand-link">
                        <span className="brand-text font-weight-light">
                            AdminLTE 3
                        </span>
                    </a>

                    {/* <!-- Sidebar --> */}
                    <div className="sidebar">
                        {/* <!-- Sidebar Menu --> */}
                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                {/* <!-- Add icons to the links using the .nav-icon className
                      with font-awesome or any other icon font library --> */}
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={["nav-link"]}
                                        style={{ background: "#007bff" }}
                                    >
                                        <i className="nav-icon fas fa-tachometer-alt"></i>
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="#!"
                                        onClick={checkMenuDropdown}
                                        className="nav-link"
                                    >
                                        <i
                                            className="nav-icon fa fa-tasks"
                                            aria-hidden="true"
                                        ></i>
                                        <p>
                                            Tasks
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        {/* <li className="nav-item">
                                            <NavLink
                                                to="/all"
                                                className={["nav-link"]}
                                            >
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>All Task</p>
                                            </NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink
                                                to="/create"
                                                className={["nav-link"]}
                                            >
                                                <i className="far fa-circle nav-icon"></i>
                                                <p>Add New Task</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/new" className={["nav-link"]}>
                                        <i className="nav-icon fa-regular fa-square-plus"></i>
                                        <p>New Task</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/progress"
                                        className={["nav-link"]}
                                    >
                                        <i className="nav-icon fa-solid fa-bars-progress"></i>
                                        <p>Progress Task</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/completed"
                                        className={["nav-link"]}
                                    >
                                        <i className="nav-icon fa-solid fa-window-restore"></i>

                                        <p>Completed Task</p>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/canceled"
                                        className={["nav-link"]}
                                    >
                                        <i className="nav-icon fa-regular fa-rectangle-xmark"></i>
                                        <p>Canceled Task</p>
                                    </NavLink>
                                </li>
                                <hr
                                    style={{
                                        margin: "8px 0px",
                                        borderTop:
                                            "2px solid rgb(127 127 127 / 52%)",
                                    }}
                                />
                                <li className="nav-item">
                                    <a
                                        onClick={removeSession}
                                        className="nav-link"
                                    >
                                        <i className="nav-icon fa fa-sign-out"></i>
                                        <p>Logout</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* <!-- /.sidebar-menu --> */}
                    </div>
                    {/* <!-- /.sidebar --> */}
                </aside>

                {/* <!-- Content Wrapper. Contains page content --> */}
                <div className="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}

                    {/* <!-- /.content-header --> */}

                    {/* <!-- Main content --> */}
                    <div className="content">
                        <div className="container-fluid pt-3">
                            {/* Child Element Mount Here */}
                            {props.children}
                        </div>
                        {/* <!-- /.content --> */}
                    </div>
                </div>
                {/* <!-- ./wrapper --> */}

                {/* Content Footer */}
                <footer className="main-footer">
                    <strong>
                        Copyright &copy; 2014-2021{" "}
                        <a href="https://adminlte.io">AdminLTE.io</a>.
                    </strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.2.0
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default MasterLayout;
