import React, { Suspense } from "react";
import FullScreenLoader from "../components/MasterLayout/FullScreenLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
// import { showLoader } from "../redux/state/settingSlice";
// import store from "../redux/store/store";
const ProgerssList = React.lazy(() => import("../components/ProgressList"));

function ProgressPage() {
    // store.dispatch(showLoader());
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<FullScreenLoader />}>
                    <FullScreenLoader />
                    <ProgerssList />
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default ProgressPage;
