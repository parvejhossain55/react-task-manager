import React, { Suspense, lazy } from "react";
import MasterLayout from "../components/MasterLayout/MasterLayout";
// import { showLoader } from "../redux/state/settingSlice";
// import store from "../redux/store/store";
import FullScreenLoader from "./../components/MasterLayout/FullScreenLoader";
const Canceled = lazy(() => import("../components/Canceled"));

function CanceledPage() {
    // store.dispatch(showLoader())
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<FullScreenLoader />}>
                    <FullScreenLoader />
                    <Canceled />
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default CanceledPage;
