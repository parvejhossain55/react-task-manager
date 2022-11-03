import React, { Suspense } from "react";
import FullScreenLoader from "../components/MasterLayout/FullScreenLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
// import { showLoader } from "../redux/state/settingSlice";
// import store from "../redux/store/store";
const NewTask = React.lazy(() => import("../components/NewTask"));


function NewPage() {
    // store.dispatch(showLoader())
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<FullScreenLoader />}>
                    <FullScreenLoader />
                    <NewTask />
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default NewPage;
