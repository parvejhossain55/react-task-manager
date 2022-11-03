import React, { Suspense } from "react";
import FullScreenLoader from "../components/MasterLayout/FullScreenLoader";
import MasterLayout from "./../components/MasterLayout/MasterLayout";
const Create = React.lazy(() => import("../components/Create"));

function CreatePage() {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<FullScreenLoader/>}>
                    <FullScreenLoader/>
                    <Create />
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default CreatePage;
