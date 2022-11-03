import React, { Suspense } from "react";
import FullScreenLoader from "./../components/MasterLayout/FullScreenLoader";
const Login = React.lazy(() => import("../components/Login"));

function LoginPage() {
    return (
        <Suspense fallback={FullScreenLoader}>
            <Login />
        </Suspense>
    );
}

export default LoginPage;
