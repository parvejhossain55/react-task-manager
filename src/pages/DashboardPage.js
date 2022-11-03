import React, { Suspense, lazy } from "react";
import FullScreenLoader from "../components/MasterLayout/FullScreenLoader";
import MasterLayout from "../components/MasterLayout/MasterLayout";
const Dashboard = lazy(()=> import("../components/Dashboard"))

function DashboardPage() {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<FullScreenLoader/>}>
                    <Dashboard />
                </Suspense>
            </MasterLayout>
        </div>
    );
}

export default DashboardPage;
