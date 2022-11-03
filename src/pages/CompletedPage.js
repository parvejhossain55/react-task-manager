import React, { Suspense, lazy } from "react";
import FullScreenLoader from "../components/MasterLayout/FullScreenLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
// import { showLoader } from "../redux/state/settingSlice";
// import store from "../redux/store/store";
const Complete = lazy(() => import("../components/Complete"));

function CompletedPage() {
    // store.dispatch(showLoader())
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<FullScreenLoader />}>
                    <FullScreenLoader />
                    <Complete />
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default CompletedPage;
