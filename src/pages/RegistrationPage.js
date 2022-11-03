import React, { Suspense } from "react";
import FullScreenLoader from "../components/MasterLayout/FullScreenLoader";
const Registration = React.lazy(() => import("../components/Registration"))

function RegistrationPage() {
    return (
        <div>
            <Suspense fallback={<FullScreenLoader />}>
                <Registration />
            </Suspense>
        </div>
    );
}

export default RegistrationPage;
