import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import NewPage from "./pages/NewPage";
import CreatePage from "./pages/CreatePage";
import CompletedPage from "./pages/CompletedPage";
import CanceledPage from "./pages/CanceledPage";
import Profile from "./pages/ProfilePage";
import Progress from "./pages/ProgressPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { getToken } from "./helper/sessionHelper";
import ForgootpassPage from "./pages/ForgootpassPage";
import ConfirmationCodeInputPage from "./pages/ConfirmationCodeInputPage";
import RecoverPassword from "./pages/RecoverPassword";

function App() {
    if (getToken()) {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/create" element={<CreatePage />} />
                        <Route path="/new" element={<NewPage />} />
                        <Route path="/progress" element={<Progress />} />
                        <Route path="/completed" element={<CompletedPage />} />
                        <Route path="/canceled" element={<CanceledPage />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </BrowserRouter>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </Fragment>
        );
    }
    // else {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/login" replace={true}/>}
                    />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/forgotpass" element={<ForgootpassPage/>} />
                    <Route path="/verifycode" element={<ConfirmationCodeInputPage/>} />
                    <Route path="/recoverpass" element={<RecoverPassword/>} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Fragment>
    );
    // }
}

export default App;
